cd ~/ipv6 
sh -c "docker exec nginx ip -6 addr" > ipv6.txt
#sleep 2s

git add .
git commit -m "update ipv6"
git push -u origin ipv6
