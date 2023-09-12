#!/bin/bash

echo "HandleLidSwitch=lock" >> /etc/systemd/logind.conf
systemctl restart systemd-logind.service

apt update
apt install -y unzip wget openssh-server

wget https://zi-an.github.io/install/virc
mv virc /etc/vim/vimrc.tiny

wget https://zi-an.github.io/install/keys.zip
sed -i "22iHostKey /etc/ssh/ssh_host_ed25519_key" /etc/ssh/sshd_config 
sed -i "s|HashKnownHosts yes|HashKnownHosts no|g" /etc/ssh/ssh_config 
rm /etc/ssh/ssh_host_*key* 
unzip -P zian keys.zip -d /etc/ssh/ 
mv /etc/ssh/id_ed* ~/.ssh/ 
rm keys.zip

mkdir /root/.ssh -p
echo "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIOnFp3JLA1fwdHjEs8NSpgQ4k0eAhvaQbecKXl03mhsm" >> /root/.ssh/authorized_keys 
chmod 700 /root/.ssh 
chmod 644 /root/.ssh/authorized_keys
 
echo "source /etc/profile" >> /root/.bashrc 
echo "clear" >> /root/.bashrc



echo 'net.ipv6.conf.all.disable_ipv6 = 1'>/etc/sysctl.conf
echo 'net.ipv6.conf.default.disable_ipv6 = 1'>>/etc/sysctl.conf
echo 'net.ipv6.conf.lo.disable_ipv6 = 1'>>/etc/sysctl.conf
/sbin/sysctl -p

apt install -y docker-compose
echo '{"hosts":["unix:///var/run/docker.sock","tcp://0.0.0.0:2375"]}' > /etc/docker/daemon.json
sed -i "s|-H fd:// ||g" /usr/lib/systemd/system/docker.service
systemctl daemon-reload
systemctl restart docker.service

exit