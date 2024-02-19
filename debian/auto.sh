#!/bin/bash

function default(){
    str=`cat /etc/systemd/logind.conf | grep lock`
    if [ ${#str} != 20 ] ; then
        hostname k610d
        echo k610d > /etc/hostname
        echo "192.168.10.5 k610d" >> /etc/hosts
        echo "HandleLidSwitch=lock" >> /etc/systemd/logind.conf
        systemctl restart systemd-logind.service
        sed -i "s/^[^#].*swap*/#&/g" /etc/fstab
        systemctl mask dev-sda3.swap
        sed -i "s|security.debian.org|mirrors.tuna.tsinghua.edu.cn|g" /etc/apt/sources.list
        apt update
        apt install -y curl openssh-server unzip wget
        wget https://zian.netlify.app/debian/virc
        mv virc /etc/vim/vimrc.tiny
        wget https://zian.netlify.app/debian/keys.zip
        sed -i "22iHostKey /etc/ssh/ssh_host_ed25519_key" /etc/ssh/sshd_config 
        sed -i "s|HashKnownHosts yes|HashKnownHosts no|g" /etc/ssh/ssh_config 
        rm /etc/ssh/ssh_host_*key*
        mkdir /root/.ssh -p
        unzip -P zian keys.zip -d /etc/ssh/ 
        mv /etc/ssh/id_ed* ~/.ssh/ -b
        rm keys.zip
        echo "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIOnFp3JLA1fwdHjEs8NSpgQ4k0eAhvaQbecKXl03mhsm" >> /root/.ssh/authorized_keys 
        chmod 700 /root/.ssh 
        chmod 644 /root/.ssh/authorized_keys
        echo "source /etc/profile" >> /root/.bashrc 
        echo "clear" >> /root/.bashrc
        echo 'net.ipv6.conf.all.disable_ipv6 = 1'>/etc/sysctl.conf
        echo 'net.ipv6.conf.default.disable_ipv6 = 1'>>/etc/sysctl.conf
        echo 'net.ipv6.conf.lo.disable_ipv6 = 1'>>/etc/sysctl.conf
        /sbin/sysctl -p
    fi
}

function docker(){
    if command -v docker >/dev/null 2>&1; then
        apt install -y docker-compose
        echo '{"hosts":["unix:///var/run/docker.sock","tcp://0.0.0.0:2375"]}' > /etc/docker/daemon.json
        sed -i "s|-H fd:// ||g" /usr/lib/systemd/system/docker.service
        systemctl daemon-reload
        systemctl restart docker.service
    fi
}


date
if [ -z $1 ] ; then
    default >> /dev/null;echo system auto installed
elif [[ $1 = "docker" ]] ; then
    docker >> /dev/null;echo docker installed
fi
date



