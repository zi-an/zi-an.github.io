---
title: "Linux"
weight: 1
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

# Debian开源操作系统

* 下载地址: https://mirror.accum.se/debian-cd/current/amd64/iso-cd/
* 文档地址: https://manpages.debian.org/bookworm/ (右上角搜索命令)

## shell脚本注意点
* 不使用环境变量,一般优先单引号
```
#!/bin/bash
#首行注明脚本的执行方式,bash与sh有区别

name=Heisenberg

echo "Now say my $name"
# 双引号,解析$的环境变量转为Heisenberg

echo 'Now say my $name'
# 单引号,不解析$的环境变量不变为$name
```

## if
```
#!/bin/bash
a=$1
b=$2
if [ $a == $b ];then
   echo "a and b is equal"
else
   echo "a and b is not equal"
fi
```
* if中不能使用大于号>,小于号<
```
== or =： 等于
-eq ： 等于
-ne ：不等于
-gt ：大于
-ge ：大于等于
-lt ：小于
-le ：小于等于
-e 判断对象是否存在
-d 判断对象是否存在，并且为目录
-f 判断对象是否存在，并且为常规文件
-L 判断对象是否存在，并且为符号链接
-h 判断对象是否存在，并且为软链接
-s 判断对象是否存在，并且长度不为0
-r 判断对象是否存在，并且可读
-w 判断对象是否存在，并且可写
-x 判断对象是否存在，并且可执行
-O 判断对象是否存在，并且属于当前用户
-G 判断对象是否存在，并且属于当前用户组
-nt 判断file1是否比file2新  [ "/data/file1" -nt "/data/file2" ]
-ot 判断file1是否比file2旧  [ "/data/file1" -ot "/data/file2" ]
|| 单方成立；
&& 双方都成立表达式。
```
## 获取脚本输出结果
```
#!/bin/bash
exec=`date`
echo $exec
```