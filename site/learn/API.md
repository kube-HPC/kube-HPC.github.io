---
title: API
sidebarTitle: API
layout: ../_core/DocsLayout
category: Learn
permalink: /learn/api/
sublinks: Restful, Cli
next: /learn/algorithms/
---

Hkube support two types of APIs, Restful and Cli

### Restful API

Please check out the full Rest API [documentation](http://hkube.io/spec).    
Also check the [Swagger-UI](http://petstore.swagger.io/?url=https://raw.githubusercontent.com/kube-HPC/api-server/master/api/rest-api/swagger.json).  


### Cli

`hkubectl` is a command-line tool that help you to work with hkube more easily.


#### Download

```
curl -L https://github.com/kube-HPC/hkubectl/releases/download/v1.1.7/hkubectl.tgz | tar xvz
sudo cp ./hkubectl /usr/local/bin
```

#### Config

`hkubectl` config set endpoint <KUBERNETES-MASTER-IP>/hkube/api-server/  
`hkubectl` config set rejectUnauthorized false


#### Syntax

```
hkubectl [type] [command] [name]
```


In the next sections you will learn in details about the pipeline definitions.