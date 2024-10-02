// ==UserScript==
// @name         bing2
// @version      2024-10-02
// @description  屏蔽知乎关键字
// @match        https://cn.bing.com/search?*
// ==/UserScript==

(function() {
    'use strict';
    //更新
    var search=document.getElementById('sb_form_q').value
    if(search.indexOf('-site')!=-1){
        document.getElementById('sb_form_q').value=search.replace('-site:zhihu.com ','')
    }
})();