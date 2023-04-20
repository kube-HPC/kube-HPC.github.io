---
title: "Use case 1"
layout: ../_core/BlogLayout
permalink: /blog/start/
date: 14 May 2019
byline: "Hkube"
---

### Example

We want to build a simple pipeline of algorithms.  
The first thing we want to do is to add our algorithms to Hkube.  
Lets create an algorithm file named algorithm.yml.  

```yaml
name: my-alg
image: my-image
resources:
   cpu: 0.5
   mem: 512Mi
```

here we specify the minimum requirements: name, image and resources.  
Let's assume that we have a docker image, if you don't, Hkube can build it for you. 
click [here](../learn/algorithms/) for more details.

There are many ways to interact with Hkube, using the CLI, REST API and UI.  
In this example we are using the CLI that works directly with the REST API.  

> `hkubectl algorithm apply --f algorithm.yml`

Now we will want to create a pipeline of algorithms.  
Lets create our pipeline.yml file.

```yaml
name: my-pipeline
nodes:
- nodeName: my-node-1
  algorithmName: my-alg
  input:
  - "flowInput.urls"
- nodeName: my-node-2
  algorithmName: my-alg
  input:
  - "@my-node-1"
- nodeName: my-node-3
  algorithmName: my-alg
  input:
  - "@my-node-2"
```

And run it like this.

> `hkubectl pipeline exec raw --f pipeline.yml`

You can also store the pipeline first.

> `hkubectl pipeline store -f pipeline.yml`

And then run it only by name.

> `hkubectl pipeline exec stored my-pipeline`

As a result of executing pipeline, Hkube will return a **jobId**.  
This is a unique identifier which helps to query this specific pipeline execution.

For example: you can stop the pipeline like this.

> `hkubectl exec stop <jobId> [reason]`

You can also track the pipeline status

> `hkubectl exec status <jobId>`

or the pipeline result

> `hkubectl exec result <jobId>`