// ==UserScript==
// @name         HSCK视频倒计时
// @include      /^https?:\/\/[^/]*\/v5\/\d+-\d+-\d+\.html/
// ==/UserScript==

const player = u => {
  window.MacPlayer = { PlayUrl: u, FullUrl: u, JsonUrl: u, PlayType: 'auto', PlayIsLive: false };
  const app = document.getElementById('read_zone');
  if (!app) return;
  const ifr = document.createElement('iframe');
  ifr.src = atob('L3N0YXRpYy9wbGF5ZXIvZHBsYXllci5odG1s') + '?v=' + Date.now();
  ifr.setAttribute('frameborder', '0');
  ifr.setAttribute('allowfullscreen', 'true');
  ifr.setAttribute('webkitallowfullscreen', 'true');
  ifr.setAttribute('scrolling', 'no');
  ifr.style.cssText = 'width:100%;height:100%;position:absolute;top:0;left:0;right:0;bottom:0;border:0;display:block;';
  app.innerHTML = '<div style="position:relative;width:100%;padding-top:56.25%;background:#000;"><div id="frame_slot" style="position:absolute;top:0;left:0;right:0;bottom:0;"></div></div>';
  document.getElementById('frame_slot').appendChild(ifr);
};

const play = p => {
  const body = ['id=' + p.id, 'sid=' + p.sid, 'nid=' + p.nid, 'tk=' + p.tk, 'g=1', 'x=100', 'y=100', 'dt=1',
    'sw=' + ((screen && screen.width) || 0), 'sh=' + ((screen && screen.height) || 0),
    'tz=' + new Date().getTimezoneOffset(), 't=' + Date.now()].join('&');
  fetch('/static/count.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 'X-Requested-With': 'XMLHttpRequest' },
    body: body, credentials: 'same-origin'
  }).then(r => r.json()).then(j => { if (j && j.ok && j.u) player(atob(j.u)); });
};

const params = () => {
  const m = document.documentElement.outerHTML.match(/var\s+AID='([^']+)',\s*ASID='([^']+)',\s*ANID='([^']+)',\s*AK='([^']+)'/);
  return m ? { id: m[1], sid: m[2], nid: m[3], tk: m[4] } : null;
};

let n = 0;
const t = setInterval(() => {
  n += 300;
  const app = document.getElementById('read_zone');
  const p = params();
  if (app && p) { play(p); clearInterval(t); }
  else if (n > 15000) clearInterval(t);
}, 300);