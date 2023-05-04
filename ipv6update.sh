#!/bin/bash

cd ~/ipv6 
sh -c "docker exec nginx ip -6 addr | grep 240" > now.txt

now=`md5sum now.txt`
last=`md5sum last.txt`
if [ ${now:0:32} == ${last:0:32} ] ;then
 echo "no change"
else
 rm last.txt
 cp now.txt last.txt
 git add .
 git commit -m "update ipv6"
 git push -u origin ipv6
fi
