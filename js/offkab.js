// ==UserScript==
// @name         offkab
// @version      2025-11-22
// @include      */upload/*
// @exclude      */upload/Application/*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    window.location.href=document.getElementsByTagName("img")[3].src
})();