---
title: string
weight: 1
#权重
bookFlatSection: false
#左显示
bookCollapseSection: true
#左折叠
bookHidden: false
#隐藏
bookToc: false
#右目录
---

# 三剑客awk+grep+sed

### awk使用
```
-F fs or --field-separator fs
指定输入文件折分隔符，fs是一个字符串或者是一个正则表达式，如-F:。
-v var=value or --asign var=value
赋值一个用户定义变量。
-f scripfile or --file scriptfile
从脚本文件中读取awk命令。
-mf nnn and -mr nnn
对nnn值设置内在限制，-mf选项限制分配给nnn的最大块数目；-mr选项限制记录的最大数目。这两个功能是Bell实验室版awk的扩展功能，在标准awk中不适用。
-W compact or --compat, -W traditional or --traditional
在兼容模式下运行awk。所以gawk的行为和标准的awk完全一样，所有的awk扩展都被忽略。
-W copyleft or --copyleft, -W copyright or --copyright
打印简短的版权信息。
-W help or --help, -W usage or --usage
打印全部awk选项和每个选项的简短说明。
-W lint or --lint
打印不能向传统unix平台移植的结构的警告。
-W lint-old or --lint-old
打印关于不能向传统unix平台移植的结构的警告。
-W posix
打开兼容模式。但有以下限制，不识别：/x、函数关键字、func、换码序列以及当fs是一个空格时，将新行作为一个域分隔符；操作符**和**=不能代替^和^=；fflush无效。
-W re-interval or --re-inerval
允许间隔正则表达式的使用，参考(grep中的Posix字符类)，如括号表达式[[:alpha:]]。
-W source program-text or --source program-text
使用program-text作为源代码，可与-f命令混用。
-W version or --version
打印bug报告信息的版本。
```
* 以.为分隔符分解字符串,并输出第二个
```
awk -F '.' '{printf $2}' /etc/hosts
#等价于
cat /etc/hosts | awk -F '.' '{printf $2}'
#等价于
awk -F '.' '{printf $2}' < /etc/hosts
```


### grep使用

```
-i：忽略大小写进行匹配。
-v：反向查找，只打印不匹配的行。
-n：显示匹配行的行号。
-r：递归查找子目录中的文件。
-l：只打印匹配的文件名。
-c：只打印匹配的行数。
```
```
grep 127.0.0.1 /etc/hosts
#等价于
cat /etc/hosts | grep 127.0.0.1
```

### sed使用