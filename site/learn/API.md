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

Please check out the full Rest API [documentation](http://hkube.org/spec).    
Also check the [Swagger-UI](http://petstore.swagger.io/?url=https://raw.githubusercontent.com/kube-HPC/hkube/master/core/api-server/api/rest-api/swagger.json).  


### Cli

`hkubectl` is a command-line tool that help you to work with hkube more easily.


#### Download

```console
export latestVersion="$(curl -s https://api.github.com/repos/kube-HPC/hkubectl/releases/latest | grep -oP '"tag_name": "\K(.*)(?=")')"
curl -Lo hkubectl https://github.com/kube-HPC/hkubectl/releases/download/${latestVersion}/hkubectl-linux \
&& chmod +x hkubectl \
&& sudo mv hkubectl /usr/local/bin/
```

#### Config

`hkubectl` config set endpoint <KUBERNETES-MASTER-IP>  
`hkubectl` config set rejectUnauthorized false

#### Syntax

```
hkubectl [type] [command] [name]
```


In the next sections you will learn in details about the pipeline definitions.
