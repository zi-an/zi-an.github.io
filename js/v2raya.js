// ==UserScript==
// @name V2rayA自动登录
// @version 1.0
// @description 打开10.0.0.211自动登录
// @match http://10.0.0.211/*
// ==/UserScript==
if (localStorage.token) return;
fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: '{"username":"xxxxxx","password":"xxxxxx"}'
}).then(r => r.json()).then(d => {
    if (d.code == 'SUCCESS') {
        localStorage.token = d.data.token;
        location.href = '/';
    }
});