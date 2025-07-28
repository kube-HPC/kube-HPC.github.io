---
title: API
sidebarTitle: API
layout: ../_core/DocsLayout
category: Learn
permalink: /learn/api/
sublinks: Restful, Cli
next: /learn/installCLI/
---

HKube supports two types of APIs, Restful and Cli.

### Restful API

Please check out the full Rest API [documentation](http://hkube.org/spec).    
Also check the [Swagger-UI](http://petstore.swagger.io/?url=https://raw.githubusercontent.com/kube-HPC/hkube/master/core/api-server/api/rest-api/swagger.json).  


### Cli

`hkubectl` is a command-line tool that help you to work with hkube more easily.  
For download, please follow the instructions [here](../installCLI/#setup).

#### Syntax

```
hkubectl [type] [command] [name]
```
To get commands and options, run:
```
hkubectl --help
```


In the next sections you will learn in details about the pipeline definitions.
