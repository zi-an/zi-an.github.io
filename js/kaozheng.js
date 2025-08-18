// ==UserScript==
// @name         考证
// @namespace    http://tampermonkey.net/
// @version      2025-08-18
// @description  try to take over the world!
// @author       You
// @match        http://agzx.gdjky.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('load', function() {
        document.getElementsByTagName('uni-view')[0].style.userSelect = 'text'
    }, false);
})();