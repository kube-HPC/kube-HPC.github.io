---
title: Hkube 101
sidebarTitle: Hkube 101
layout: ../_core/DocsLayout
category: Start
permalink: /start/
sublinks: Prerequisites, Install Hkube, Your Code, Hkube API
---

For Hkube 101, we will cover install Hkube, Integrate your algorithm and Restful API.

### Prerequisites
---

1) Install [Kubernetes](https://kubernetes.io/docs/user-journeys/users/application-developer/foundational/#section-1) or [Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/)

> Make sure kubectl is configured to your cluster.

### Install Hkube
---

`npm` i -g @hkube/hkubectl  
`hkubectl` deploy -t  
`hkubectl` deploy -c  
`hkubectl` verify  
`hkubectl`
.....

### Your Code
---

Integrate your algorithm into Hkube is the only task that requires code writing.  
See the API [spec](/code/api/) and the [code samples](/code/implement/) guide for more details

### Hkube API
---

Learn more about [pipelines](/learn/pipeline/) and how to store, execute and work with them.  
Check out our Rest API [spec](https://kube-hpc.github.io/api-server).

```hkube-box
# { "hkube": true, "url": "/learn", "title": "next &rarr;", "text": "Learn More" }
```