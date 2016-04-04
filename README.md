# Koop Docker example

> Sample application using [Koop](https://github.com/esri/koop) with [Docker](https://www.docker.com/).

## How to build and deploy locally or onto AWS
1. Install [Docker Toolbox](https://www.docker.com/products/docker-toolbox)
2. Get a Docker Host running with [Docker Machine](https://docs.docker.com/machine/get-started/)

### Kubernetes on AWS
1. Install the AWS CLI
2. Set up a Kubernetes Cluster
3. `chmod +x build.sh`
4. `./build/sh` to build the application the cloud
5. Log into to AWS and find your new load balancer
6. Change the health check to http and `/status` as the route and grab the URL
7. You are up and running with koop-socrata

Note: If you want to make changes to the Dockerfile or the package.json you will need to set up your own account with Docker. You can then make changes to the `deploy.sh` script to point to your own repo. Just replace any instances of `dmfenton` with your username


## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/Esri/contributing).

## License

[Apache-2.0](LICENSE.md)
