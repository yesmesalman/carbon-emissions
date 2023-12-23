#!/bin/bash

echo 'run application_start.sh: ' >> /home/ec2-user/carbon-emissions/deploy.log

echo 'pm2 restart carbonApp' >> /home/ec2-user/carbon-emissions/deploy.log
pm2 restart carbonApp >> /home/ec2-user/carbon-emissions/deploy.log