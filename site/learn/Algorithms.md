---
title: Algorithms
sidebarTitle: Algorithms
layout: ../_core/DocsLayout
category: Learn
sublinks: API, Implement
permalink: /learn/algorithms/
next: /learn/versions/
---

There are two ways to integrate your algorithm into Hkube:  
1) No code involves, no WebSocket and no Docker.  
2) Involves code writing, work with WebSocket and Docker.

## How does it works?

Integrating algorithms into Hkube require 3 steps:  
1) Implement connectivity with Hkube using WebSocket.  
2) Build the algorithm image and push it to Docker registry.  
3) Add the algorithm to Hkube.

We can do these first two steps for you, so you won't have to deal with WebSocket and Docker. The algorithm (your code) needs a way to communicate with Hkube (receive input, report results and errors)   
Hkube communicates with algorithms via WebSocket using their full-duplex communication support.  
All messages between Hkube and algorithm are in JSON format.

## The easy way

- No Code involves.
- No WebSocket.
- No Docker.

Using the [hkubectl](/learn/api/#cli)  
> `hkubectl algorithm apply --f algorithm.yml`

Create a basic algorithm yaml/json file

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

- env - for now we only support pytohn, nodejs, jvm.
- resources - specify cpu, gpu and memory.
- code.path - the algorithm source code. 
- code.entryPoint - the location of the [algorithm methods](#algorithm-methods).

#### Algorithm methods:  
Your algorithm must include a method named `start`.  
> <T any> start(Dictionary<T string, T any> data)

> There are also some optional methods:
> <T> initialize(Dictionary data)
> <T> stop(Dictionary data)

The **data** argument contains the following keys:

- input Array<Any>
- pipelineName <String>
- algorithmName <String>
- nodeName <String>
- jobId <String>
- taskId <String>
- info <Object>
   - extraData <Object>
   - lastRunResult <Object>


If the response contains a buildId, it means that a build was triggered, and you can follow the [build status](http://petstore.swagger.io/?url=https://raw.githubusercontent.com/kube-HPC/api-server/master/api/rest-api/swagger.json#/Webhooks/get_webhooks_status__jobId_)

You can do the same using our [API](http://petstore.swagger.io/?url=https://raw.githubusercontent.com/kube-HPC/api-server/master/api/rest-api/swagger.json#/StoreAlgorithms/post_store_algorithms)


## The long way

- Code involves.
- Use WebSocket.
- Use Docker.

## Events From Hkube to Algorithm
---

These events are sent from Hkube to your algorithm.

* [Initialize](#event-initialize)
* [Start](#event-start)
* [Stop](#event-stop)
* [Exit](#event-exit)
* [SubPipelineStarted](#event-subpipelinestarted)
* [SubPipelineError](#event-subpipelineerror)
* [SubPipelineDone](#event-subpipelinedone)
* [SubPipelineStopped](#event-subpipelinestopped)

##### *JSON*
```json
{
   "command": "<string>", // one of the above
   "data": "<Object>"
}
```

### Event: initialize

The first event sent to the algorithm, sent for every task activation.

```json
{
   "command": "initialize",
   "data": {
       "input": ["str", 512, false, {"foo":"bar"}]
   }
}
```
> data includes an input array, same input as written in the [descriptor](/learn/input/)

### Event: start

The event the algorithm task is invoked by

```json
{
   "command": "start"
}
```

> This event includes no data

### Event: stop

Event to abort the running algorithm task

```json
{
   "command": "stop"
}
```

### Event: exit

Event invoked before taking the algorithm container down. As best practice, when invoked make the process running the algorithm exit.

```json
{
   "command": "exit"
}
```

### Event: subPipelineStarted

Event to inform algorithm that sub pipeline (Raw or Stored) has started

```json
{
   "command": "subPipelineStarted",
   "data": {
       "subPipelineId": "<alg-subPipeline-internal-id>"
   }
}
```

> The "subPipelineId" property holds the sub pipeline internal Id in algorithm (as given in startRawSubPipeline/startStoredSubPipeline events).

### Event: subPipelineError

Event to inform algorithm that sub pipeline (Raw or Stored) has failed.

```json
{
   "command": "subPipelineError",
   "data": {
       "subPipelineId": "<alg-subPipeline-internal-id>"
       "error": "error-message"
   }
}
```

* The "subPipelineId" property holds the sub pipeline internal Id in algorithm (as given in startRawSubPipeline/startStoredSubPipeline events).
* The "error" property holds the error message text from the sub pipeline.

### Event: subPipelineDone

Event to inform algorithm that sub pipeline (Raw or Stored) has completed successfully.

```json
{
   "command": "subPipelineDone",
   "data": {
       "subPipelineId": "<alg-subPipeline-internal-id>"
       "response": ["array", "of", "subpipeline", "output", "values"]
   }
}
```

* The "subPipelineId" property holds the sub pipeline internal Id in algorithm (as given in startRawSubPipeline/startStoredSubPipeline events), as the algorithm may start several sub-pipelines.
* The "response" property holds the sub pipeline output array.

### Event: subPipelineStopped

Event to inform algorithm that sub pipeline has stopped

```json
{
   "command": "subPiplineStopped",
   "data": {
       "subPipelineId": "<alg-subPipeline-internal-id>",
       "reason": "<stopping-reason>"
   }
}
```

* The "subPipelineId" property holds the sub pipeline internal Id in algorithm (as given in startRawSubPipeline/startStoredSubPipeline events).
* The "reason" property holds the reason for stopping the sub pipeline.


## Events From Algorithm to Hkube
---

These events are sent from algorithm to Hkube.

* [initialized](#event-initialized)
* [started](#event-started)
* [stopped](#event-stopped)
* [done](#event-done)
* [progress](#event-progress)
* [errorMessage](#event-errormessage)
* [startRawSubPipeline](#event-startrawsubpipeline)
* [startStoredSubPipeline](#event-startstoredsubpipeline)
* [stopSubPipeline](#event-stopsubpipeline)
* [startSpan](#event-startspan)
* [finishSpan](#event-finishspan)

##### *JSON*
```json
{
   "command": "<string>", // one of the above
   "data": "<Any>",
   "error": "<Object>" {
      "code": "<string>",
      "message": "<string>",
      "details": "<string>"
   }
}
```

### Event: initialized

Response event after initialization completes.  

```json
{
   "command": "initialized"
}
```

### Event: started

Response event after start complete.  

```json
{
   "command": "started"
}
```

### Event: stopped

Response event after stop complete.  

```json
{
   "command": "stopped"
}
```

### Event: done

Response event after the algorithm finish the task. 

```json
{
   "command": "done"
}
```

### Event: progress

If you want to report progress about your algorithm, send this event.

```json
{
   "command": "progress",
   "data": "optional extra details"
}
```

### Event: errorMessage

If any error occurs in your algorithm, send this event.

```json
{
   "command": "errorMessage",
   "error": {
      "code": "<YOUR_CODE>",
      "message": "<YOUR_MESSAGE>",
      "details": "<YOUR_DETAILS>"
   }
}
```

### Event: startRawSubPipeline

If you want to start a Raw sub-pipeline from your algorithm, use this event.

```json
{
   "command": "startRawSubPipeline",
   "data": {
        "subPipeline": {
            "name": "<sub-pipeline-name>",
            "nodes": [
                {
                    "nodeName": "<first-node-name>",
                    "algorithmName": "<alg-name>",
                    "input":    ["@flowInput.data"]
                }
            ],
            "options": {
            },
            "webhooks": {
            },
            "flowInput": {
               "data": ["array", "of", "subpipeline", "input", "values"]
            }
        },
        "subPipelineId": "<alg-subPipeline-internal-id>",
   }
}
```

* The "subPipeline" object gives a standard raw full description of the requested sub pipeline.
* The "input" field value of the first node should be ["@flowInput.data"]
* This input is taken from "flowInput", where you plant your subpipeline input in the "data" field.
* The "subPipelineId" property holds sub pipeline internal Id in algorithm (as the algorithm may start several sub-pipelines).

### Event: startStoredSubPipeline

If you want to start a Stored sub-pipeline from your algorithm, use this event.

```json
{
   "command": "startStoredSubPipeline",
   "data": {
        "subPipeline": {
            "name": "<stored-sub-pipeline-name>",
            "flowInput": {
               "data": ["array", "of", "subpipeline", "input", "values"]
            }
        },
        "subPipelineId": "<alg-subPipeline-internal-id>",
   }
}
```

* The "subPipeline" object gives a standard stored description of the requested sub pipeline (name and optionally flowInput, options, webhooks).
* This input is taken from "flowInput", where you plant your subpipeline input in the "data" field.
* The "subPipelineId" property holds sub pipeline internal Id in algorithm (as the algorithm may start several sub-pipelines).

### Event: stopSubPipeline

If you want to stop a sub-pipeline (Raw or Stored) from your algorithm, use this event.

```json
{
   "command": "stopSubPipeline",
   "data": {
        "subPipelineId": "<alg-subPipeline-internal-id>",
        "reason": "<reason>",
   }
}
```

* The "subPipelineId" property holds sub pipeline internal Id in algorithm.
* The "reason" property enables to put a textual reason for stopping the subpipeline.

### Event: startspan

To start a tracer span, use this event:

```json
{
   "command": "startSpan",
   "data": {
      "name": "<span-name>", 
      "tags": {
         "<key1>": <value1>,
         "<key2>": <value2>,
         ...         
      }
   }
}
```

* The "name" property is the span name, as displayed in the Jaeger.
* The optional "tags" object may include more properties to be added to span's tags (in addition to default tags).
* Note: you can nest multiple spans: startSpan 1, startSpan 2, but then need to finish then in reverse order: finishSpan 2, finishSpan 1.

### Event: finishspan

To finish the last opened tracer span, use this event:

```json
{
   "command": "finishSpan",
   "data": {
      "tags": {
         "<key1>": <value1>,
         "<key2>": <value2>,
         ...         
      },
      "error": "<error-text>"
   }
}
```

* The optional "tags" object may include more properties to be added to span's tags when finished.
* The optional "error" property is error message (or object with "message" property, e.g. exception).
* Note: in case of algorithm error, remember to send finishSpan to all started spans (in reverse order) before sending errorMessage. 

[How To Implement](/algorithms/implement/#handle-errors)


## Implement
---

Hkube communicates with your algorithm via WebSocket (native WebSocket or socketio).  
This tutorial explains how to create a websocket client that works with Hkube.
You can implement the websocket client in any language. (PR are welcomed)

* [Connect](#connect)
* [Handle Events](#handle-events)
  * [Initialize](#initialize)
  * [Start](#start)
  * [Stop](#stop)
* [Reconnect](#reconnect)
* [Handle Errors](#handle-errors)
* [Send Event](#send-event)

## Connect

The first thing your algorithm should do is create a websocket client that listens to: **ws://localhost:3000**.

```hkube-tabs
# { "hkube": true, "schema": "connect" }
```

## Handle Events

Here we are registering to events from Hkube.  
Each event has a specific handler, as described below.

```hkube-tabs
# { "hkube": true, "schema": "handle-messages" }
```

## initialize

The initialize event is the first event that Hkube sends to your algorithm.  
The payload of this event includes the pipeline data and the input for your algorithm.  
You need to store the input in a local variable for later use.  
> same input as written in the [descriptor](/learn/input/)

```hkube-tabs
# { "hkube": true, "schema": "handle-messages-initialize" }
```

## start

The start event is the second event that Hkube sends to your algorithm.  
As you can see, at the first step of this handler you need to tell Hkube that your algorithm has started.  
Then you let the algorithm do it's work and finally you send the done event with the algorithm result.

```hkube-tabs
# { "hkube": true, "schema": "handle-messages-start" }
```

## stop

Hkube will send this event to your algorithm only if stop request was made by Hkube users.

```hkube-tabs
# { "hkube": true, "schema": "handle-messages-stop" }
```

## Reconnect

Web Sockets are not auto reconnect, so it's important that you will handle connection lose.   

```hkube-tabs
# { "hkube": true, "schema": "reconnect" }
```

## Handle Errors

It's highly recommended that you will catch any error in your algorithm and send it to Hkube.  

```hkube-tabs
# { "hkube": true, "schema": "handle-errors" }
```

## Send Event

This is a simple handler for send response back to Hkube.

```hkube-tabs
# { "hkube": true, "schema": "send-event" }
```