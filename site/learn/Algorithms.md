---
title: Algorithms
sidebarTitle: Algorithms
layout: ../_core/DocsLayout
category: Learn
sublinks: Integration Methods, Events & Communication, Implementation
permalink: /learn/algorithms/
next: /learn/streaming/
---

HKube offers two ways to integrate your algorithm:

1. No code involved, no WebSocket and no Docker.  
2. Involves code writing, work with WebSocket and Docker.

HKube communicates with algorithms using WebSocket and JSON messages.

---
## Integration Methods

Integrating an algorithm into HKube involves three main steps:  
1) Implement connectivity with HKube using WebSocket.  
2) Build the algorithm image and push it to Docker registry.  
3) Add the algorithm to HKube.

**We can handle the first two steps for you** – so you don’t have to deal with WebSocket or Docker yourself.

HKube and your algorithm communicate using WebSocket's full-duplex messaging system.  
All messages between them are in JSON format.

---
### The Easy Way
If you want a simple, code-free setup, use `hkubectl` to register an algorithm without handling WebSockets or Docker manually. 
- No code involved.  
- No WebSocket.  
- No Docker.  

**Steps to Register an Algorithm:**
1. Create an algorithm configuration file (YAML or JSON).
2. Apply the algorithm using `hkubectl`.

**Example YAML Configuration:**
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

**Apply Algorithm:**
Run the following command:
```console
hkubectl algorithm apply --f algorithm.yml
```

**Key Parameters:**

* `env` - Supported environments: `python`, `nodejs`, `jvm`
* `resources` - Define CPU, GPU, and memory allocation.
* `code.path` - Path to the algorithm`s source code.
* `code.entryPoint` - The file containing the [algorithm methods](#algorithm-methods).

**Algorithm Methods:**

* **Required:** Your algorithm must include a `start` method.
```typescript
<T any> start(Dictionary<T string, T any> data)
```
* **Optional:** `initialize(data)`, `stop(data)`
```typescript
<T> initialize(Dictionary data)
<T> stop(Dictionary data)
```

The `data` argument contains the following keys:

* `input` Array <Any>
* `pipelineName` <String>
* `algorithmName` <String>
* `nodeName` <String>
* `jobId` <String>
* `taskId` <String>
* `info` <Object>
   * `extraData` <Object>
   * `lastRunResult` <Object>

#### Tracking Your Algorithm’s Status
If the response contains a `buildId`, it means a build was triggered. You can monitor its progress: [Build Status](http://petstore.swagger.io/?url=https://raw.githubusercontent.com/kube-HPC/hkube/master/core/api-server/api/rest-api/swagger.json#/Webhooks/get_webhooks_status__jobId_)

You can do the same using our [API](http://petstore.swagger.io/?url=https://raw.githubusercontent.com/kube-HPC/hkube/master/core/api-server/api/rest-api/swagger.json#/StoreAlgorithms/post_store_algorithms)

---
### The Long Way
- Code involves.
- Use WebSocket.
- Use Docker.

---
## Events & Communication
This section explains the events exchanged between HKube and your algorithm, and Sub-Pipelines.

### Events From HKube to Algorithm

These events are sent from HKube to your algorithm.

* [Initialize](#event-initialize)
* [Start](#event-start)
* [Stop](#event-stop)
* [Exit](#event-exit)
* [SubPipelineStarted](#event-subpipelinestarted)
* [SubPipelineError](#event-subpipelineerror)
* [SubPipelineDone](#event-subpipelinedone)
* [SubPipelineStopped](#event-subpipelinestopped)

**Example Event Format:**
```json
{
   "command": "<string>", // one of the above
   "data": "<Object>"
}
```

#### Event: initialize

This is the first event sent to the algorithm when a task starts.

```json
{
   "command": "initialize",
   "data": {
       "input": ["str", 512, false, {"foo":"bar"}]
   }
}
```
> data includes an input array, same input as written in the [descriptor](../input/)

#### Event: start

Invokes the algorithm task.

```json
{
   "command": "start"
}
```

> This event includes no data

#### Event: stop

Sends a request to stop the algorithm task.

```json
{
   "command": "stop"
}
```

#### Event: exit

Event invoked before taking the algorithm container down. As best practice, when invoked make the process running the algorithm exit.

```json
{
   "command": "exit"
}
```

#### Event: subPipelineStarted

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

#### Event: subPipelineError

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

#### Event: subPipelineDone

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

#### Event: subPipelineStopped

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

---
### Events From Algorithm to HKube


These events are sent from algorithm to HKube.

* [initialized](#event-initialized)
* [started](#event-started)
* [stopped](#event-stopped)
* [done](#event-done)
* [progress](#event-progress)
* [errorMessage](#event-errormessage)

**Example Event Format:**
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

#### Event: initialized

Response event after initialization completes.  

```json
{
   "command": "initialized"
}
```

#### Event: started

Response event after start complete.  

```json
{
   "command": "started"
}
```

#### Event: stopped

Response event after stop complete.  

```json
{
   "command": "stopped"
}
```

#### Event: done

Sent when the algorithm completes its task.

```json
{
   "command": "done"
}
```

#### Event: progress

If you want to report progress about your algorithm, send this event.

```json
{
   "command": "progress",
   "data": "optional extra details"
}
```

#### Event: errorMessage

Sent if an error occurs.

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

---
### Sub-Pipelines
You can trigger and manage sub-pipelines directly from your algorithm.

* [startRawSubPipeline](#event-startrawsubpipeline)
* [startStoredSubPipeline](#event-startstoredsubpipeline)
* [stopSubPipeline](#event-stopsubpipeline)
* [startSpan](#event-startspan)
* [finishSpan](#event-finishspan)

#### Event: startRawSubPipeline

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

#### Event: startStoredSubPipeline

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

#### Event: stopSubPipeline

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

#### Event: startspan

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

#### Event: finishspan

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
* Note: in case of algorithm error, remember to send finishSpan to all started spans (in reverse order) before sending errorMessage - [Handle Errors](../algorithms/#handle-errors)

---
## Implementation

HKube communicates with your algorithm via WebSocket (native WebSocket or socketio).  
This tutorial explains how to create a websocket client that works with HKube.
You can implement the websocket client in any language (PR are welcomed).

* [Connect](#connect)
* [Handle Events](#handle-events)
  * [Initialize](#initialize)
  * [Start](#start)
  * [Stop](#stop)
* [Reconnect](#reconnect)
* [Handle Errors](#handle-errors)
* [Send Event](#send-event)

### Connect

The first thing your algorithm should do is create a WebSocket client that connects to: **ws://localhost:3000**.

```hkube-tabs
# { "hkube": true, "schema": "connect" }
```

### Handle Events

Here we are registering to events from HKube.  
Each event has a specific handler, as described below.

```hkube-tabs
# { "hkube": true, "schema": "handle-messages" }
```

#### Initialize

The initialize event is the first event that HKube sends to your algorithm.  
The payload of this event includes the pipeline data and the input for your algorithm.  
You need to store the input in a local variable for later use.  
> same input as written in the [descriptor](../learn/input/)

```hkube-tabs
# { "hkube": true, "schema": "handle-messages-initialize" }
```

#### Start

The start event is the second event that HKube sends to your algorithm.  
As you can see, at the first step of this handler you need to tell HKube that your algorithm has started.  
Then you let the algorithm do it's work and finally you send the done event with the algorithm result.

```hkube-tabs
# { "hkube": true, "schema": "handle-messages-start" }
```

#### Stop

HKube will send this event to your algorithm only if stop request was made by HKube users.

```hkube-tabs
# { "hkube": true, "schema": "handle-messages-stop" }
```

### Reconnect

Web Sockets are not auto reconnect, so it's important that you will handle connection lose.   

```hkube-tabs
# { "hkube": true, "schema": "reconnect" }
```

### Handle Errors

It’s recommended to catch and report errors in your algorithm to HKube.  

```hkube-tabs
# { "hkube": true, "schema": "handle-errors" }
```

### Send Event

This is a simple handler for send response back to HKube.

```hkube-tabs
# { "hkube": true, "schema": "send-event" }
```

---
### Monitoring Metrics
If your algorithm uses TensorFlow, you can generate metrics for visualization in TensorBoard. HKube supports this by allowing you to store TensorBoard-compatible logs, which can later be viewed in a dedicated dashboard.
**How It Works:**

1. **Write Metrics:** In your algorithm code, save TensorBoard metrics to the directory specified by the environment variable `ALGO_METRICS_DIR`.
2. **View Metrics:** Upon request, HKube can start a TensorBoard web server to display and compare different algorithm runs.

**Running TensorBoard:**
To launch TensorBoard in HKube, use the 'board' API in the HKube spec. This will start a web server where you can visualize and analyze the recorded metrics.