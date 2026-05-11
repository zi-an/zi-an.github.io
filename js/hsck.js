// ==UserScript==
// @name         hsck play
// @version      2026-05-11
// @description  try to take over the world!
// @match        http://*.xyz/*
// ==/UserScript==

(function() {
    'use strict';

    // 处理所有链接
    function processLinks() {
        // 查找所有包含 -1-1.html 的 a 标签
        const links = document.querySelectorAll('a[href*="-1-1.html"]');

        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.includes('-1-1.html')) {
                // 替换链接
                const newHref = href.replace(/-1-1\.html$/, '-1-1.html?play=1');
                link.setAttribute('href', newHref);
                console.log(href)

            }
            if (href && href.includes('-1-1\//')) {
                // 替换链接
                const newHref = href.replace(/-1-1\//, '-1-1.html?play=1');
                link.setAttribute('href', newHref);
                console.log(href)
            }
        });
    }

    // 使用 MutationObserver 监听动态加载的内容
    const observer = new MutationObserver((mutations) => {
        processLinks();
    });

    // 初始处理
    processLinks();

    // 开始监听
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();