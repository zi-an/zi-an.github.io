// ==UserScript==
// @name         imagetwist
// @description  imagetwist
// @version      2025-12-09
// @include      https://imagetwist.com/*
// @exclude      https://imagetwist.com/i/*
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    let imgCount = 0;
    let observer = new MutationObserver((mutations) => {
        for (let mut of mutations) {
            if (mut.type === 'childList') {
                // 检查新增节点中是否有 img
                const imgs = document.querySelectorAll('img');
                if (imgs.length >= 2) {
                    const fourthSrc = imgs[1].src; // 第四个，索引为3
                    console.log('第四个 img 的 src:', fourthSrc);
                    window.location.href=fourthSrc
                    observer.disconnect(); // 停止监听
                    // 在这里可以做你想做的事，比如发送到后台、修改等
                    break;
                }
            }
        }
    });

    // 开始监听整个文档的 DOM 变化
    observer.observe(document.documentElement || document, {
        childList: true,
        subtree: true
    });

    // 防御性：如果页面已经加载完成（虽然 unlikely 在 document-start）
    if (document.readyState !== 'loading') {
        const imgs = document.querySelectorAll('img');
        if (imgs.length >= 2) {
            console.log('第四个 img 的 src（已加载）:', imgs[1].src);
            observer.disconnect();
        }
    }
})();