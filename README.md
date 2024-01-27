# zi-an.github.io
* 忽略文件夹./public是要发布的静态网页
```
git clone --branch=mysite git@github.com:zi-an/zi-an.github.io.git mysite
```



=====================================================================
# 发布网页

## 只克隆最新版本+master分支
```
git clone --depth 1 git@github.com:zi-an/zi-an.github.io.git .
```

## 代码提交
```
hugo --theme=hugo-book 
```
然后进入./public文件夹提交代码