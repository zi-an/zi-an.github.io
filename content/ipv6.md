---
menu:
  after:
    name: ipv6
    weight: 5
title: IPV6
---

## 这是我的ipv6

ipv6的获取方式

```
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta content="yes" name="apple-mobile-web-app-capable">
    <meta content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
          name="viewport">
    <meta charset="UTF-8">
    <title>ipv6</title>
</head>
<body>
<button onclick="copy()"><h3 id="copy1">123</h3></button>
<br><br>
<button onclick="enter()"><h3 id="copy2">http</h3></button>

</body>

<script type="text/javascript">
    let d;
    let httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", "https://raw.githubusercontent.com/zi-an/zi-an.github.io/ipv6/now.txt");
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
        d = httpRequest.responseText;
        d = '[' + d.substring(d.indexOf('240'), d.indexOf('/64')) + ']';
        document.getElementById("copy1").innerText = d;
        document.getElementById("copy2").innerText = "http://" + d;
    }

    function copy() {
        let text = document.getElementById("copy1").innerText;
        navigator.clipboard.writeText(text).then(function () {
            alert("复制成功");
        }, function () {
            alert("复制失败");
        });
    }

    function enter() {
        let url = document.getElementById("copy2").innerText;
        window.open(url)
    }
</script>
</html>
<!--https://zi-an.github.io/ipv6.html-->

```