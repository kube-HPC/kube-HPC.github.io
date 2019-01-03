---
title: Webhooks
layout: ../_core/DocsLayout
category: Learn
permalink: /learn/webhooks/
sublinks: Progress, Result
---

The WebHooks are an HTTP callbacks, the system can send request to the client when something happens.  
Consider it like push notifications.  
There are two types of webhooks, progress and result.  

You can also fetch the same data from the API:  

* progress - /api/v1/exec/status
* result   - /api/v1/exec/results

> The webhooks are optional

### Progress

The purpose of the progress webhook is to update the client  
when the state of the pipeline is changed.

```json
"name": "batch",
"nodes": [{
    "nodeName": "green",
    "algorithmName": "green-alg",
    "input": ["#[1,2,3]"]
}],
"webhooks": {
    "progress": "<URL>",
    "result": "<URL>"
}
```

And this is the progress webhook payload

```json
{
    "jobId": "batch:672a8b0e-c0b0-486e-bb2b-4571b0805f29",
    "timestamp": "2018-01-16T14:47:04.142Z",
    "pipeline": "batch",
    "level": "info",
    "status": "completed",
    "data": {
        "progress": "100.00",
        "details": "100.00% completed, 3 succeed"
    }
}
```

### Result

The purpose of the result webhook is to update the client when the pipeline is completed.  
By running the following batch pipeline, the system will send the result to the specified address.

```json
"name": "batch-pipeline",
"nodes": [{
    "nodeName": "green",
    "algorithmName": "green-alg",
    "input": ["#[1,2,3]"]
}],
"webhooks": {
    "progress": "<URL>",
    "result": "<URL>"
}
```

This is the result webhook payload, notice that there is a result for each batch node.

```json
{
    "jobId": "batch-pipeline:e51c8dd7-7a7b-4d65-ad36-d1a919a9dee1",
    "timestamp": "2018-01-16T15:15:00.369Z",
    "pipeline": "batch-pipeline",
    "status": "completed",
    "data": [{
                "nodeName": "green",
                "batchID": "green#1",
                "algorithmName": "green-alg",
                "result": 10
            },
            {
                "nodeName": "green",
                "batchID": "green#2",
                "algorithmName": "green-alg",
                "result": 20
            },
            {
                "nodeName": "green",
                "batchID": "green#3",
                "algorithmName": "green-alg",
                "result": 30
            }
        ]
    }
}
```