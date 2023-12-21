#!/bin/bash
echo 'run after_install.sh: ' >> /home/ec2-user/carbon-emissions/deploy.log

echo 'cd /home/ec2-user/carbon-emissions-cicd' >> /home/ec2-user/carbon-emissions/deploy.log
cd /home/ec2-user/carbon-emissions/client >> /home/ec2-user/carbon-emissions/deploy.log

echo 'npm install' >> /home/ec2-user/carbon-emissions/deploy.log 
npm install >> /home/ec2-user/carbon-emissions/deploy.log

echo 'npm run build' >> /home/ec2-user/carbon-emissions/deploy.log 
npm run build >> /home/ec2-user/carbon-emissions/deploy.log