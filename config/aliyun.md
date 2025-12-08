# 阿里轻量云服务器使用
| 2024
https://swas.console.aliyun.com/servers
手机号登录
root@120.76.158.149

# 设置密钥
* 重置系统后要重新设置密钥(设置完还要重启)才会生效
```
ed25519
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIOnFp3JLA1fwdHjEs8NSpgQ4k0eAhvaQbecKXl03mhsm imported-openssh-key
```

# debian11升级debian12
```
sed -i "s|bullseye|bookworm|g" /etc/apt/sources.list
apt update
apt full-upgrade
```
默认全yes+y

# 完成配置
```
wget zian.netlify.app/debian/auto.sh
chmod 777 auto.sh
echo aliyun > /etc/hostname
```

# 云服务器优化
```
dd if=/dev/zero of=/home/swap bs=1G count=2
mkswap /home/swap
sed -i "s|vm.swappiness = 0|vm.swappiness = 60|g" /etc/sysctl.conf
echo "/home/swap swap swap defaults 0 0"  >>  /etc/fstab

echo 3 > /proc/sys/vm/drop_caches
```




echo "aliyun" > /etc/hostname
rm /home/admin/.ssh/authorized_keys -f

wget https://zian.netlify.app/debian/virc

mv virc /etc/vim/vimrc.tiny
wget https://zian.netlify.app/debian/keys.zip
sed -i "22iHostKey /etc/ssh/ssh_host_ed25519_key" /etc/ssh/sshd_config 
sed -i "s|HashKnownHosts yes|HashKnownHosts no|g" /etc/ssh/ssh_config 
rm /etc/ssh/ssh_host_*key*
mkdir /root/.ssh -p

echo 'export DOCKER_HOST="tcp://127.0.0.1:2375"' >> /etc/skel/.bashrc
echo "clear" >> /etc/skel/.bashrc
useradd docker -s /bin/bash -k /etc/skel -m

dd if=/dev/zero of=/home/swap bs=1G count=2
mkswap /home/swap
sed -i "s|vm.swappiness = 0|vm.swappiness = 60|g" /etc/sysctl.conf
echo "/home/swap swap swap defaults 0 0"  >>  /etc/fstab