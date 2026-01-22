安装windows11 

磁盘加密解除
```
manage-bde.exe -off c:
manage-bde.exe -off d:
manage-bde.exe -off e:
```

设置系统为utf-8
设置-语言设置-Windows 显示语言(展开)-Beta 版：使用 Unicode UTF-8 提供全球语言支持-开

```
slmgr /skms yun.mm
slmgr /ato
```

鼠标右键恢复
```
reg add "HKEY_CURRENT_USER\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /ve /f
taskkill /f /im explorer.exe >nul 2>&1
start explorer.exe
```

桌面显示秒
```
Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Name "ShowSecondsInSystemClock" -Value 1; Stop-Process -Name explorer -Force
```


我的电脑-查看-显示-文件扩展名


输入法
常规-中文输入时使用英文标点

中英文模式切换-shift
按键-中英文标点切换-无
按键-简体/繁体中文输入切换-关

游戏-能关就关

任务栏
搜索-仅"搜索"图标
任务栏对齐方式-靠左
任务栏行为-合并任务栏按钮并隐藏标签-任务栏已满时

C:\Windows\System32\drivers\etc\

# Block Windows Update
127.0.0.1 windowsupdate.com
127.0.0.1 www.windowsupdate.com
127.0.0.1 update.microsoft.com
127.0.0.1 download.windowsupdate.com
127.0.0.1 wustat.windows.com
127.0.0.1 stats.microsoft.com
127.0.0.1 sls.update.microsoft.com
127.0.0.1 fe3.delivery.mp.microsoft.com
127.0.0.1 tlu.dl.delivery.mp.microsoft.com
127.0.0.1 dl.delivery.mp.microsoft.com
127.0.0.1 assets1.xboxlive.com
127.0.0.1 assets2.xboxlive.com
127.0.0.1 telemetry.microsoft.com
127.0.0.1 watson.telemetry.microsoft.com
127.0.0.1 vortex.data.microsoft.com
127.0.0.1 settings-win.data.microsoft.com
127.0.0.1 choice.microsoft.com