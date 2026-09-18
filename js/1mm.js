// ==UserScript==
// @name         Mi路由器自动登录
// @match        http://1.mm/*
// @match        http://2.mm/*
// @match        http://10.0.0.1/*
// @match        http://10.0.0.2/*
// @run-at       document-start
// ==/UserScript==

const h = location.host;
const p = location.pathname + location.search;

if (h === '1.mm') location.replace('http://10.0.0.1' + p);
else if (h === '2.mm') location.replace('http://10.0.0.2' + p);
else if (!(p.includes('stok=') || p.includes('/web/'))) {
  fetch(`http://${h}/cgi-bin/luci/api/xqsystem/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `username=${encodeURIComponent('admin')}&password=${encodeURIComponent('xxxxxxxx')}`
  }).then(r => r.json()).then(j => {
    if (j && j.token) location.replace(`http://${h}/cgi-bin/luci/;stok=${j.token}/web/setting/wan`);
    else alert('路由器自动登录失败：\n' + JSON.stringify(j));
  });
}