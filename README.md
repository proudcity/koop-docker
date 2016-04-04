# Koop Docker example

> Sample application using [Koop](https://github.com/koopjs/koop) with [Docker](https://www.docker.com/) and [Kubernetes](http://kubernetes.io/).

## How to build and deploy locally or onto AWS
1. Install [Docker Toolbox](https://www.docker.com/products/docker-toolbox)
2. Get a Docker Host running with [Docker Machine](https://docs.docker.com/machine/get-started/)

### Run locally
1. `docker-compose up -d`
2. Find the IP to your koop container is the same as your docker host
3. You are up and running with [koop-socrata](https://github.com/koopjs/koop-socrata)

### Kubernetes on AWS
1. Install the [AWS CLI](http://aws.amazon.com/cli/)
2. Set up a [Kubernetes Cluster](http://kubernetes.io/docs/getting-started-guides/aws/)
3. `chmod +x build.sh`
4. `./build/sh` to build the application on the cloud
5. Log into to AWS and find your new load balancer
6. Change the health check to http and `/status` as the route and grab the URL
7. You are up and running with [koop-socrata](https://github.com/koopjs/koop-socrata)

Note: If you want to make changes to the Dockerfile or the package.json you will need to set up your own account with Docker. You can then make changes to the `deploy.sh` script to point to your own repo. Just replace any instances of `dmfenton` with your username


## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/Esri/contributing).

## License

[Apache-2.0](LICENSE.md)
