---
title: nginx
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

# Nginx
* https://nginx.org/en/docs/
* https://nginx.org/en/docs/http/ngx_http_core_module.html (内置变量大全)
* https://nginx.org/en/docs/http/ngx_http_log_module.html (日志配置)
## 常用模块

|模块|功能|备注|
|-|-|-|
|ngx_stream_proxy_module|TCP/UDP转发模块||
|ngx_http_proxy_module|HTTP代理模块||
|ngx_http_gzip_module|gzip压缩||
|ngx_http_v3_module|http3模块|1.25.0以后可用|

### Windows版nginx
* 为不完全版,许多功能可能不可用,以下命令为部分命令

|命令|作用|备注|
|-|-|-|
|taskkill /f /im nginx.exe|关闭nginx||
|nginx -s stop|关闭nginx||
|nginx -t|仅测试配置文件是否正确||
|nginx -s reload|重新加载配置文件||
|nginx &|后台运行|
