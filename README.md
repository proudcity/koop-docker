# Koop Docker example

> Sample application using [Koop](https://github.com/esri/koop) with [Docker](https://www.docker.com/).

## How to build and deploy onto Google Container Engine
1. Install [Docker Toolbox](https://www.docker.com/products/docker-toolbox)
2. Get a Docker Host running with [Docker Machine](https://docs.docker.com/machine/get-started/)
3. Set up [Google Cloud SDK and Kubernetes CLI](https://cloud.google.com/container-engine/docs/before-you-begin)
4. Create a Google Container Engine [Cluster](https://cloud.google.com/container-engine/docs/clusters/operations#creating_a_container_cluster)
  - Note: You may need to create a network first
5. Configure [kubectl](https://cloud.google.com/container-engine/docs/before-you-begin) for your cluster
6. Sign up for developer access to [Yelp's API](https://www.yelp.com/developers)
7. Copy kubeneretes/koop-docker-rc.yaml.example to kubernetes/koop-docker-rc.yaml
8. Replace the variables in the above file with the one's you got from Yelp
9. Create a Replication Controller on your cluster `kubectl create -f kubernetes/koop-docker-rc.yaml`
10. Create a Service on your cluster `kubectl create -f kubernetes/koop-docker-service.yaml`
11. Get your service endpoint `kubectl get services`

At this point you can access the Koop you have installed with the Yelp Provider.
The URL will look like `${your endpoint}/yelp/FeatureServer/0`

Note: If you want to make changes to the Dockerfile or the package.json you will need to set up your own account with Docker. You can then make changes to the `deploy.sh` script to point to your own repo. Just replace any instances of `dmfenton` with your username


## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/Esri/contributing).

## License

[Apache-2.0](LICENSE.md)
