---
title: Pipelines
layout: ../_core/DocsLayout
category: Learn
permalink: /learn/pipelines/
sublinks: Raw, Stored
next: /learn/nodes/
---

The basic concept behind the Hkube pipeline is [DAG](https://en.wikipedia.org/wiki/Directed_acyclic_graph)  
Directed Acyclic Graph is a graph consisting of [nodes](../learn/nodes/) connected  
with edges that have a direction: A -> B -> C.  

![Diagram](../img/execution/DAG.png)

The DAG structure allowing to:
 
* Represent an orderings processing of nodes.  
* Data flow between the nodes.  
* Parallel and batch processing.

Hkube store and execute pipelines using Restful API.
Hkube support three types of pipeline executions: Raw, Stored and Node.

### Raw

When you run **Raw** pipeline, you are actually creating new execution each time.  
It means that you need to define all the pipeline details every time you run it.

/exec/raw - full details

```json
{
    "name": "simple",
    "nodes": [
        {
            "nodeName": "green",
            "algorithmName": "green-alg",
            "input": [
                true, "@flowInput.urls", 256
            ]
        }
    ],
    "flowInput": {
        "files": {
            "link": "links-1"
        }
    },
    "options": {
        "batchTolerance": 100,
        "progressVerbosityLevel": "debug",
        "ttl": 3600
    },
    "webhooks": {
        "progress": "http://localhost:3003/webhook/progress",
        "result": "http://localhost:3003/webhook/result"
    },
    "priority": 3
}
```

### Stored

With **Stored** pipeline, you dont need to define all the pipeline details.  
You just need to store the pipeline once and then run it with the same or different input.

/exec/stored - same flowInput

```json
{
    "name": "simple"
}
```

/exec/stored - different flowInput

```json
{
    "name": "simple",
    "flowInput": {
        "urls": ["google.com"]
    }
}

```

/exec/stored - another flowInput

```json
{
    "name": "simple",
    "flowInput": {
        "urls": ["facebook.com"]
    }
}
```