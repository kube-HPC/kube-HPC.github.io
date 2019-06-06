---
title: Hkube 101
sidebarTitle: Hkube 101
layout: ../_core/DocsLayout
category: Learn
permalink: /learn/
next: /learn/install/
---


### Install Hkube

```console
$ helm repo add hkube http://hkube.io/helm/
$ helm install hkube/hkube
```

read more [here](/learn/install/)

### Add algorithm

Create a basic algorithm yaml/json file.

```yaml
name: my-alg
env: python

resources:
   cpu: 0.5
   gpu: 1
   mem: 512Mi

code:
   path: /home/user/my-alg.tar.gz
   entryPoint: main.py
```

Run apply to build the algorithm

```console
hkubectl algorithm apply --f algorithm.yml
```

read more [here](/learn/algorithms/)


### Add pipeline

Create a basic pipeline yaml/json file.

```yaml
name: my-pipeline
nodes:
- nodeName: my-node-1
  algorithmName: my-alg
  input:
  - "http://s3.data/flow"
- nodeName: my-node-2
  algorithmName: my-alg
  input:
  - "@my-node-1"
```

Run execute command to run the pipeline

```console
hkubectl pipeline exec raw --f pipeline.yml
```

read more [here](/learn/pipelines/)
