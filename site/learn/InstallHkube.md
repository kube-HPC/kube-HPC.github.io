---
title: Install Hkube
sidebarTitle: Install Hkube
layout: ../_core/DocsLayout
category: Learn
permalink: /learn/install/
sublinks: Prerequisites
next: /learn/api/
---

### Prerequisites
---

1) Install [Kubernetes](https://kubernetes.io/docs/user-journeys/users/application-developer/foundational/#section-1) or [Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/) or [microk8s](https://microk8s.io/)

> Make sure kubectl is configured to your cluster.  
> For collecting algorithm logs, and to create builds, Hkube requires that certain pods will run in privileged security permissions. Consult your kubernetes installation to see how to do that.  

Click [here](/learn/install/openshift) for Openshift instructions

## TL;DR;

```console
$ helm repo add hkube http://hkube.io/helm/
$ helm install hkube/hkube
```
## Introduction

The chart is hosted in http://hkube.io/helm/
To add the repo to your helm run
```console
$ helm repo add hkube http://hkube.io/helm/
```
## Installing the Chart
To install the chart with the release name `my-release`:

```console
$ helm install hkube/hkube --name my-release
```
This command installs `hkube` in a minimal configuration for development. See below for production install.

## Uninstalling the Chart
```console
$ helm delete my-release
```
## Configuration

There are two modes to install hkube:  
1. minimal install for development
    * one node cluster ([minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/), [microk8s](https://microk8s.io/))
    * minimal third-party (etcd, redis, jaeger-all-in-one, minio, etc...)  
2. production deployment 
    * etcd cluster (using etcd-operator)
    * redis-ha (using sentinel)
    * full jaeger deployment

## Production deployment
### prerequisites
1. hkube uses s3 for storage. The minimal installation uses minio hosted in the cluster. For production installations it is recommended to create a dedicated s3 server.

### configuration
Parameter | Description | Default
--- | --- | ---
global.storage.minio.access_key | access key for s3 | hkubeminiokey
global.storage.minio.secret_key | secret key for s3 | hkubeminiosecret
global.storage.minio.url | access url for s3 | http://minio-service:9000
global.production | flag to switch to production install | false
global.clusterName | the name of the kubernetes cluster | cluster-local


```console
$ helm install hkube/hkube \ 
--set global.production=true \ 
--set global.clusterName=dev \ 
--set global.storage.minio.url=http://192.168.10.10:9000 \ 
--set global.storage.minio.access_key=accesskey \ 
--set global.storage.minio.secret_key=secretkey 
--name my-release
```


<!-- ```hkube-box
# { "hkube": true, "url": "/learn", "title": "next &rarr;", "text": "Learn More" }
``` -->
