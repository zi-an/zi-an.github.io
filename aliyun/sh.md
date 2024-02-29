

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