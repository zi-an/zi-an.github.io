#!/bin/bash

cd ~/ipv6 
sh -c "docker exec nginx ip -6 addr | grep 240" > now.txt

dif=`diff ~/ipv6/last.txt ~/ipv6/now.txt`
echo ${dif}
if [ ${dif} ];then
 echo "no change"
else
 rm ~/ipv6/last.txt
 cp ~/ipv6/now.txt ~/ipv6/last.txt
 git add .
 git commit -m "update ipv6"
 git push -u origin ipv6
fi
