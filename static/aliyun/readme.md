# 阿里轻量云服务器使用

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