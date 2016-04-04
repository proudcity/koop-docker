#!/bin/bash
echo "Create a volume for your postgres instance"
aws ec2 create-volume --availability-zone us-east-1a --size 10 --volume-type gp2 | grep -oP 'vol-[\S]{8}' | tee volume.log
mv kubernetes/postgres-pv.yaml.example kubernetes/postgres-pv.yaml
cat volume.log | xargs -I sed -i -e 's/awsvolid/{}/' kubernetes/postgres-pv.yaml.example
echo "Create a Persistent Volume with Kubernetes"
kubectl create -f kubernetes/postgres-pv.yaml
echo "create a Persistent Volume Claim that matches the persistent volume"
kubectl create -f kubernetes/postgres-pvclaim.yaml
echo "Now that your data volume is ready create your postgres replication controller"
kubectl create -f kubernetes/postgres-rc.yaml
echo "Create a service that will expose postgres to your koop containers"
kubectl create -f kubernetes/postgres-svc.yaml
echo "Time to create your koop replication controller. this will spin up two instances"
kubectl create -f kubernetes/koop-rc.yaml
echo "Create a service and attach a load balancer onto your koop instances"
kubectl create -f kubernetes/koop-svc.yaml
