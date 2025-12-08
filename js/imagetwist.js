// ==UserScript==
// @name         imagetwist
// @description  imagetwist
// @version      2025-12-05
// @include      https://imagetwist.com/*jpg
// @exclude      https://imagetwist.com/i/*jpg
// ==/UserScript==

(function() {
    'use strict';

    window.location.href=document.getElementsByTagName("img")[1].src
})();