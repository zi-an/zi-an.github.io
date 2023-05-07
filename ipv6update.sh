#!/bin/bash

cd ~/ipv6

docker=`sh -c 'docker exec nginx ip -6 addr | grep 240'|awk '{ print $2 }'|awk -F'/64' '{ print $1 }'|awk 'NR==1'`
now=`echo $docker|md5sum`

last=`md5sum last.txt`
if [ ${now:0:32} == ${last:0:32} ] ;then
 echo "no change"
else
 echo ${now} > last.txt 
 git add .
 git commit -m "update ipv6"
 git push -u origin ipv6
fi
