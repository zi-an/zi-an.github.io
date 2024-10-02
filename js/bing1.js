// ==UserScript==
// @name         bing1
// @version      2024-10-02
// @description  屏蔽知乎的链接
// @match        https://cn.bing.com/search?*
// ==/UserScript==

(function() {
    'use strict';
    //忽略zhihu.com
    var url=window.location.href
    if(url.indexOf('zhihu')==-1){
        if(url.indexOf('?q=')>0){location.href=url.substr(0,url.indexOf('?q=')+3)+'-site%3Azhihu.com '+url.substr(url.indexOf('?q=')+3)}
        if(url.indexOf('&q=')>0){location.href=url.substr(0,url.indexOf('&q=')+3)+'-site%3Azhihu.com '+url.substr(url.indexOf('&q=')+3)}
    }
})();