cd ~/ipv6 
sh -c "docker exec nginx ip -6 addr | grep 240" > ipv6.txt
#sleep 2s

git add .
git commit -m "update ipv6"
git push -u origin ipv6
