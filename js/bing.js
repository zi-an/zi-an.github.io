// ==UserScript==
// @name         bing-site
// @version      2024-10-12
// @description  必应搜索屏蔽知乎
// @match        https://cn.bing.com/search?*
// ==/UserScript==

(function() {
    'use strict';
    //忽略zhihu.com
    var filter=' -site:zhihu.com'
    var url=window.location.href
    if(url.indexOf('-site')==-1){
        var newurl = new URL(window.location.href);
        newurl.searchParams.set('q', newurl.searchParams.get('q')+filter);
        location.href=newurl.toString();
    }
    if(url.indexOf('-site')!=-1){
        var search=document.getElementById('sb_form_q').value
        document.getElementById('sb_form_q').value=search.replace(filter,'')
        document.title=document.title.replace(filter,'')
    }
})();
