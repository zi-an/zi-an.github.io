# 首页

## via
- 百度提示词 + 必应搜索
这是提取自Via浏览器的主页,默认调用的是百度提示词,但因跨域问题执行过
```
sed -i "s|suggestion.baidu.com|5.mm|g" opensug.js
```

## 补充
- 目前已被search.html替代
```
add_header Access-Control-Allow-Origin *;
location /su {proxy_pass https://suggestion.baidu.com/su;}
```