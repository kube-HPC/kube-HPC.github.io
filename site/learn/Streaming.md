---
title: Streaming
sidebarTitle: Streaming
layout: ../_core/DocsLayout
category: Learn
permalink: /learn/streaming/gateways
next: /learn/streaming/gateways
---

## Introduction
Gateways are a great for exposing your application to an external use and make stream processing even more flexible.

### How to work with
Gateways are created using the `kind` option with type `gateway`.  
Each pipeline can contains many different gateways.  
In this example you can see that node `A` is a gateway that stream data to node `B`.


```
{
    "name": "gateway",
    "kind":"stream",
    "nodes": [
        {
            "nodeName": "A",
            "kind": "gateway",
            "spec": {
               "name": "images-gateway",
               "description": "images streaming source",
               "cpu": 1,
               "mem": "1Gi"
            }
        },
        {
            "nodeName": "B",
            "algorithmName": "green-alg"
        }
    ],
     "streaming": {
        "flows": {
            "main": "A >> B"
        }
    }
}
```

If you run this pipeline, you will get in the response a list of gateways.  
For each node with kind gateway, you will get an object representing the gateway.

```
{
    "jobId": "<uuid>",
    "gateways": [{
        "nodeName": "A",
        "url": "hkube/gateway/images-gateway"
    }]}
```

The api for your gateway should look like this.  
```
https://<YOUR_DOMAIN>/hkube/gateway/images-gateway
```

You can also watch and test your gateway using our swagger-ui.
```
https://<YOUR_DOMAIN>/hkube/gateway/images-gateway/swagger-ui/
```