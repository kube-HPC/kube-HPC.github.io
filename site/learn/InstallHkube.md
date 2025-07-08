---
title: Install HKube
sidebarTitle: Install HKube
layout: ../_core/DocsLayout
category: Learn
permalink: /learn/install/
sublinks: Prerequisites
next: /learn/installCLI/
# next: /learn/keycloak/
---

### Prerequisites
---
HKube requires a working installation of kubernetes.  
There are many options for local k8s installations. e.g  [Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/) or [microk8s](https://microk8s.io/).  

HKube is installed using helm. Both helm 2 and the newer [helm 3](https://helm.sh/docs/intro/install/) should work.

> Make sure kubectl is configured to your cluster.  
> In order to collect algorithm logs, and create builds, **HKube** requires that certain pods will run in privileged security permissions. Consult your kubernetes installation to see how to do that.  

These instructions assume the use [Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/) and [helm 3](https://helm.sh/docs/intro/install/)

Click [here](../../learn/install/openshift/) for Openshift instructions

## Helm repository setup

The chart is hosted in http://hkube.org/helm/
To add the repo to your helm run
```console
$ helm repo add hkube http://hkube.org/helm/
```
## Start minikube
Currently HKube requires at least 4 cpu cores and 6GB of memory, ingress controller, registry, and dynamic storage.  
First, run:
```bash
docker context use default
```
This will be your output:
```console
default
Current context is now "default"
```
Next:
```hkube-tabs
# { "hkube": true, "schema": "install" }
```

## Installing the Chart
To install the chart with the release name `hkube`:  
> Also set the registry to the internal registry  

```bash
helm install hkube --set build_secret.docker_registry=registry.minikube --set build_secret.docker_registry_insecure=true hkube/hkube
```
This command installs `hkube` in a minimal configuration for development. See below for production install.  
> Be patient. This can take some time depending on your internet connection  

### Open the dashboard
Before starting your journey, verify that the requiered resources have finished loading (make sure to copy the whole line):
```bash
kubectl rollout status deployment/simulator --watch; kubectl rollout status deployment/api-server --watch
```
Once it let's you know the resources have been successfully rolled out, get the IP address of your minikube instance
```bash
minikube ip
```
and browse to the dashboard at `http://<minikube_ip_here>/hkube/dashboard/`

## TL;DR;
```console
$ helm repo add hkube http://hkube.org/helm/
$ helm install hkube hkube/hkube
```
## Uninstalling the Chart
```console
$ helm delete hkube
```
## Configuration
The default installation of HKube (with default values) is designed for local development.  
It will install:  

- `etcd` cluster for state management
- `redis` cluster for queues  
- `minio` for object storage  
- small configuration for `hkube`  

## Production deployment
### general
1. for HA installation, a HA kubernetes cluster is needed.  
2. hkube uses needs persistent storage. The default installation uses minio hosted in the cluster. For production installations it is recommended to create a dedicated s3 server, or use a PVC.
3. to enable running multiple pipelines set the number of pipeline driver to a higher number (the default is 1)

### configuration
Common configuration options are described below. For a complete list see the helm chart Readme

|                        Parameter                        | Description                                       |                            Default   |
|---------------------------------------------------------|---------------------------------------------------|--------------------------------------|
| global.clusterName                                      | The dns domain name of the cluster. needed for Jaeger | `cluster.local`                      |
| global.registry                                         | Docker registry for private registries            | `''`                                 |
| global.registry_namespace                               |                                                   | `hkube`                              |
| global.registry_username                                |                                                   | `''`                                 |
| global.registry_password                                |                                                   | `''`                                 |
| global.registry_insecure                                |                                                   | `false`                              |
| global.registry_skip_tls_verify                         |                                                   | `false`                              |
| global.storage.fs.pvc.storage_class                     | Dynamic storage storageClassName. Empty for default. `'-'` to disable  | `''`                                 |
| global.storage.s3.access_key                            | access key for s3                                 | `hkubeminiokey`                      |
| global.storage.s3.secret_key                            | secret key for s3                                 | `hkubeminiosecret`                   |
| global.storage.s3.url                                   | endpoint url for s3                               | `'http://hkube-minio:9000'`          |
| env.default_storage                                     | selects the storage mode [`s3` or `fs`]           | `s3`                                 |
| jaeger.enable                                           | enable install of jaeger and dependencies         | `false`                              |
| minio.enable                                            |                                                   | `true`                               |
| build_secret.docker_registry                            | Docker registry information for automated builds  | `''`                                 |
| build_secret.docker_namespace                           |                                                   | `''`                                 |
| build_secret.docker_username                            |                                                   | `''`                                 |
| build_secret.docker_password                            |                                                   | `''`                                 |
| task_executor.env.pipeline_drivers_amount               | Set to 30 for a reasonable size                   | `1`                                  |


Specify each parameter using the `--set key=value[,key=value]` argument to `helm install`. For example:

```console
$ helm install hkube hkube/hkube  --set global.clusterName=cluster.local
```

Alternatively, a YAML file that specifies the values for the parameters can be provided while
installing the chart. For example:

```console
$ helm install hkube hkube/hkube  --values values.yaml
```

<!-- ```hkube-box
# { "hkube": true, "url": "/learn", "title": "next &rarr;", "text": "Learn More" }
``` -->
