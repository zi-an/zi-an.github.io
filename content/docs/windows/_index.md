---
title: "Windows"
weight: 3
#权重
bookFlatSection: true
#左显示
bookCollapseSection: true
#左折叠
bookHidden: false
#隐藏
bookToc: false
#右目录
---

## Windows 

# windows 10 ltsc
* U盘刻录工具: https://github.com/pbatard/rufus/releases/download/v4.2/rufus-4.2p.exe
```
ed2k://|file|LTSC_2021_X64.ISO|5044211712|1555B7DCA052B5958EE68DB58A42408D|/
ed2k://|file|LTSC_2021_X32.ISO|3621132288|F67BB339ADFEFCF6ED22400EAACBD068|/
slmgr /skms kms.03k.org
slmgr /ato
```

# office 2016 pro plus
```
ed2k://|file|Office2016pp_zh_64.ISO|1123452928|31087A00FF67D4F5B4CBF4AA07C3433B|/
ed2k://|file|Office2016pp_zh_32.ISO||986441728|2DE74581C10096137481873B3AD57D43|/
cd "C:\Program Files\Microsoft Office\Office16"
cscript ospp.vbs /sethst:kms.03k.org
cscript ospp.vbs /act
```
