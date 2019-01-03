---
title: Options
layout: ../_core/DocsLayout
category: Learn
permalink: /learn/options/
next: /learn/execution/
sublinks: Batch Tolerance, Verbosity Level, Pipeline Concurrency, TTL
---

## Batch Tolerance

The Batch Tolerance is a threshold setting that allow to control in which **percent** from the batch processing the entire pipeline should be fail.  
In this example we define batch tolerance of 60%, which means that we allow max of 60% from the batch items to be fail. 

```json
"name": "example-batchTolerance",
"nodes": [{
    "nodeName": "green",
    "algorithmName": "green-alg",
    "input": ["#[1,2,3,4,5]"]
},
{
    "nodeName": "yellow",
    "algorithmName": "yellow-alg",
    "input": ["@green"]
}],
"options": {
    "batchTolerance": 60
}
```

Assuming that **Node green** will run and these are the batch items results. 

```json
green-alg 1: [false, "1"] -> success
green-alg 2: [false, "2"] -> failed
green-alg 3: [false, "3"] -> failed
green-alg 4: [false, "4"] -> failed
green-alg 5: [false, "5"] -> success
```

Now the entire pipeline will fail because 3/5 from green node batch items has failed.  
**Node yellow** will not run in this case.

## Pipeline Concurrency

Pipeline Concurrency define the number of pipelines that are allowed to be running at any time.

```json
{
    "name": "simple",
    "nodes": [
        {
            "nodeName": "green",
            "algorithmName": "green-alg",
            "input": []
        }
    ]
    "options": {
        "batchTolerance": 80,
        "concurrentPipelines": 2
    }
}
```

## TTL

Time to live (TTL)  limits the lifetime of pipeline in the cluster.
stop will be sent if pipeline running for more than ttl (in seconds).

```json
{
    "name": "simple",
    "nodes": [
        {
            "nodeName": "green",
            "algorithmName": "green-alg",
            "input": []
        }
    ]
    "options": {
        "batchTolerance": 80,
        "concurrentPipelines": 2,
        "ttl": 3600,
    }
}
```


### Verbosity Level

The Verbosity Level is a setting that allow to control what type of progress events the client will notified about.  
The severity levels are ascending from least important to most important: `trace` `debug` `info` `warn` `error` `critical`

If the client specified `debug` level, every progress from this level and above will be sent to the client.

```json
"name": "batch",
"nodes": [{
    "nodeName": "green",
    "algorithmName": "green-alg",
    "input": ["#[1,2,3,4,5,6,7,8,9,10]"]
}],
"webhooks": {
    "progress": "<URL>",
    "result": "<URL>"
},
"options": {
    "progressVerbosityLevel": "debug"
}
```

And this is the progress webhook payload:

```json
{
    "jobId": "batch:0358b42d-e0c0-4ce8-ae9a-466f02841d87",
    "timestamp": "2018-01-16T14:27:16.056Z",
    "pipeline": "batch",
    "level": "debug",
    "status": "active",
    "data": {
        "progress": "33.33",
        "details": "33.33% completed, 4 succeed, 2 active, 4 pending, 2 creating",
        "activeNodes": [
            {
                "nodeName": "green",
                "algorithmName": "green-alg",
                "batch": {
                    "active": 6,
                    "total": 10
                }
            }
        ]
    }
}

```
