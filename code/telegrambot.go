package main

import (
	"context"
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	tgbotapi "github.com/go-telegram-bot-api/telegram-bot-api/v5"
	"github.com/openai/openai-go/v3"
	"github.com/openai/openai-go/v3/option"
	"os"
	"regexp"
	"strconv"
	"strings"
	"time"
	"unicode/utf8"
)

var format = "2006-01-02 15:04:05"
var aiUrl = "https://platform.aitools.cfd/api/v1/"
var aiKey = "sk-1d00617bd03e4886bbfcdd164bd90d28"
var models = []string{"qwen/qwen3-coder", "qwen/qwen3-30b-a3b", "meituan/longcat-flash-chat"}
var model = models[0]
var trytimes = 0

func main() {
	_ = os.Setenv("HTTPS_PROXY", "http://yun.mm:20172")
	bot, err := tgbotapi.NewBotAPI("8480580315:AAHYaX5eKimC0jq_a7vKdVL59qTdz33cpZs")
	if err != nil {
		main()
	}
	bot.Debug = false
	fmt.Printf("启:%s\n", bot.Self.UserName)
	updates := bot.GetUpdatesChan(tgbotapi.NewUpdate(0))
	for update := range updates {
		if update.Message != nil {
			go handleMessage(bot, update.Message)
		}
	}
}
func handleMessage(bot *tgbotapi.BotAPI, update *tgbotapi.Message) {
	question := update.Text
	fmt.Printf("问:%s\n", question)
	_, _ = bot.Send(tgbotapi.NewChatAction(update.Chat.ID, tgbotapi.ChatTyping))
	if strings.Contains(update.Chat.Type, "group") {
		if strings.Contains(question, "@"+bot.Self.UserName) {
			question = strings.Replace(question, "@"+bot.Self.UserName, "", -1)
		}
	}
	answer := ai(question)
	//data, _ := os.ReadFile("d:/hadoop1.md")
	//answer := string(data)
	fmt.Printf("答:%s\n", answer)
	fmt.Println("总:", utf8.RuneCountInString(answer))
	for _, message := range splitMessage(answer, 4000) {
		msg := tgbotapi.NewMessage(update.Chat.ID, message)
		msg.ParseMode = "Markdown"
		msg.ReplyToMessageID = update.MessageID
		_, err := bot.Send(msg)
		if err != nil {
			fmt.Println("错:", err)
			msg.ParseMode = ""
			_, _ = bot.Send(msg)
		}
	}
	id := strconv.FormatInt(update.From.ID, 10)
	insertIntoMariadb(update.From.UserName+":"+id, question)
	insertIntoMariadb(bot.Self.UserName, answer)
}
func splitMessage(text string, limit int) []string {
	// 首先将整个文本转换为rune切片，确保正确处理UTF-8字符
	runes := []rune(text)
	re := regexp.MustCompile("\n\n##")
	arr := []int{0}
	// 把所有匹配的字节位置转换为字符数位置
	var runeRanges [][]int
	for _, m := range re.FindAllStringIndex(text, -1) {
		startRune := utf8.RuneCountInString(text[:m[0]])
		endRune := utf8.RuneCountInString(text[:m[1]])
		runeRanges = append(runeRanges, []int{startRune, endRune})
	}
	for _, loc := range runeRanges {
		arr = append(arr, loc[0])
	}
	arr = append(arr, len(runes)) // 使用rune切片的长度，而不是utf8.RuneCountInString
	var groups [][]int
	startIdx := 0
	for i := 1; i < len(arr); i++ {
		if arr[i]-arr[startIdx] > limit {
			groups = append(groups, arr[startIdx:i])
			startIdx = i - 1
		}
	}
	groups = append(groups, arr[startIdx:])
	var messages []string
	for _, g := range groups {
		fmt.Println("分:", g[0], g[len(g)-1])
		// 直接从rune切片创建子字符串，避免不必要的类型转换
		temp := string(runes[g[0]:g[len(g)-1]])
		temp = regexp.MustCompile(`(?m)^\s*\n`).ReplaceAllString(temp, "")
		temp = strings.ReplaceAll(temp, "####", "🟡")
		temp = strings.ReplaceAll(temp, "###", "🟠")
		temp = strings.ReplaceAll(temp, "##", "🔴")
		temp = strings.ReplaceAll(temp, "\n#", "\n⚫️")
		temp = strings.ReplaceAll(temp, "---\n", "")
		//以下为防止*号不成对导致的解析错误
		temp = strings.ReplaceAll(temp, "\n* ", "\n- ")
		temp = strings.ReplaceAll(temp, " * ", " - ")
		temp = strings.ReplaceAll(temp, "**", "*")
		temp = strings.ReplaceAll(temp, "\n   - ", "\n   ")
		temp = strings.ReplaceAll(temp, "\n- ", "\n  ")
		messages = append(messages, temp)
	}
	return messages
}

func ai(text string) string {
	client := openai.NewClient(
		option.WithAPIKey(aiKey),
		option.WithBaseURL(aiUrl),
	)
	chatCompletion, err := client.Chat.Completions.New(context.TODO(), openai.ChatCompletionNewParams{
		Model:       model,
		Temperature: openai.Float(0.0),
		Messages: []openai.ChatCompletionMessageParamUnion{
			openai.UserMessage(text),
			openai.SystemMessage("详细解答/no_think"),
		},
	})
	if err != nil {
		fmt.Println("错:", err)
		fmt.Println("试:", trytimes)
		if trytimes < 2 {
			trytimes++
			time.Sleep(1000)
			return ai(text)
		} else {
			trytimes = 0
			return "..."
		}
	}
	trytimes = 0

	return chatCompletion.Choices[0].Message.Content + "\n\ntoken=" +
		strconv.FormatInt(chatCompletion.Usage.CompletionTokens, 10)
}

func insertIntoMariadb(username, text string) {
	dsn := "zian:zian@tcp(yun.mm:3306)/zian?parseTime=true"
	mariadb, _ := sql.Open("mysql", dsn)
	_, _ = mariadb.Exec("insert into telegrambot (username,text) values (?,?)", username, text)
	_ = mariadb.Close()
}
