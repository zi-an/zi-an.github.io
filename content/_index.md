--- 
title: 首页
type: docs
bookToc: false
---

# 我的Github Pages

{{< columns >}}
## Hugo构建工具
通过 Hugo 你可以快速搭建你的静态网站,比如博客系统,文档介绍,公司主页,产品介绍等等.
<--->
## hugo-book主题
hugo-book 适合做文档功能的网页
{{< /columns >}}


## 准备
* 建议使用hugo extended (解压hugo_extended_0.111.3_windows-amd64.zip把exe放到C:/Windows下)
* 主题hugo-book下载https://themes.gohugo.io/themes/hugo-book/
* 主题演示地址 https://hugo-book-demo.netlify.app/

# 构建 shell
* 创建文件并把example运行
```
hugo new site mysite
cd mysite
git clone https://github.com/alex-shpak/hugo-book themes/hugo-book
cp ./themes/hugo-book/exampleSite/content.en/* ./content -r
hugo server --theme=hugo-book --buildDrafts
```

## 发布 shell
* ~~修改 config.toml中的baseURL~~
* 使用主题生成静态页面文件
* 之后生成./public文件夹,复制到nginx即可以
``` 
hugo --theme=hugo-book 
```

## github
```
git clone --branch=mysite git@github.com:zi-an/zi-an.github.io.git mysite
```

# 80端口测试项目
```
hugo server --contentDir=themes/hugo-book/exampleSite/content.en -p=80
```