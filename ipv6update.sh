#!/bin/bash

dir=`dirname ${BASH_SOURCE}`
cd $dir

docker=`sh -c 'ip -6 addr | grep 240'|awk '{ print $2 }'|awk -F'/64' '{ print $1 }'|awk 'NR==1'`
now=`echo $docker|md5sum`

last=`md5sum last.txt`
if [ ${now:0:32} == ${last:0:32} ] ;then
 echo "no change"
else
 git pull
 echo -n $docker > last.txt 
 git add .
 git commit -m "update ipv6"
 git push -u origin ipv6
fi
