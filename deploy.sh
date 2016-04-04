#!/bin/bash
docker build -t dmfenton/koop-docker:latest .
docker push dmfenton/koop-docker:latest
sleep 5
kubectl rolling-update koop --image=dmfenton/koop-docker:latest
