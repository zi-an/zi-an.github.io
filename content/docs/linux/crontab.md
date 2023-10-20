---
title: crontab
weight: 3
#权重
bookFlatSection: false
#左显示
bookCollapseSection: true
#左折叠
bookHidden: false
#隐藏
bookToc: false
#右目录
---

## 定时任务crontab
```
*    *    *    *    *
-    -    -    -    -
|    |    |    |    |
|    |    |    |    +----- 星期中星期几 (0 - 6) (星期天 为0)
|    |    |    +---------- 月份 (1 - 12) 
|    |    +--------------- 一个月中的第几天 (1 - 31)
|    +-------------------- 小时 (0 - 23)
+------------------------- 分钟 (0 - 59)
```

* 制定任务,5分钟执行一次
```
*/5 * * * * docker exec maomiav2 /update.sh
```

* 查看日志 : journalctl -u cron.service -fn200
```
root@k610d:~# journalctl -u cron.service -fn200
Oct 19 08:48:29 k610d systemd[1]: Started cron.service - Regular background program processing daemon.
Oct 19 08:48:29 k610d cron[529]: (CRON) INFO (pidfile fd = 3)
Oct 19 08:48:29 k610d cron[529]: (CRON) INFO (Running @reboot jobs)
Oct 19 09:05:01 k610d CRON[8231]: pam_unix(cron:session): session opened for user root(uid=0) by (uid=0)
Oct 19 09:05:01 k610d CRON[8232]: (root) CMD (docker exec maomiav2 /update.sh)
Oct 19 09:05:01 k610d CRON[8231]: (CRON) info (No MTA installed, discarding output)
Oct 19 09:05:01 k610d CRON[8231]: pam_unix(cron:session): session closed for user root
```

* 日志排查--需要邮件传输代理(Mail Transfer Agent)
```
apt install postfix #选择本地模式
tail /var/mail/root #查看执行后的结果
```