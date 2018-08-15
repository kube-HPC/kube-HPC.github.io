---
title: Algorithm API
sidebarTitle: API
layout: ../_core/DocsLayout
category: Code
permalink: /code/api/
next: /code/implement/
---

The first step you need is to expose your algorithms to the outer world.     
All messages between Hkube and algorithm are in JSON format.

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


[How To Implement](/algorithms/implement/#handle-messages)

##### *JSON*
```json
{
   "command": "<string>", // one of the above
   "data": "<Object>"
}
```

### Event: initialize

The first event that sent to the algorithm, sent for every task activation.

```json
{
   "command": "initialize",
   "data": {
       "input": ["str", 512, false, {"foo":"bar"}]
   }
}
```
> data include input array, same input as written in the [descriptor](/learn/input/)

### Event: start

Event to start the algorithm task

```json
{
   "command": "start"
}
```

> This event include no data

### Event: stop

Event to abort the running algorithm task

```json
{
   "command": "stop"
}
```

### Event: exit

Event to exit

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
* The "error" property holds the error message text from sub pipeline.

### Event: subPipelineDone

Event to inform algorithm that sub pipeline (Raw or Stored) has completed successfully.

```json
{
   "command": "subPipelineDone",
   "data": {
       "subPipelineId": "<alg-subPipeline-internal-id>"
       "response": [1, 5, 67, 19]
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

Response event after initialization complete.  

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
                    "input":    ["array", "of", "values"]
                }
                ...
            ],
            "options": {
                ...
            },
            "webhooks": {
                ...
            }
        },
        "subPipelineId": "<alg-subPipeline-internal-id>"
   }
}
```

* The "subPipeline" object gives a standard raw full description of the requested sub pipeline.
* The "subPipelineId" property holds sub pipeline internal Id in algorithm (as the algorithm may start several sub-pipelines).

### Event: startStoredSubPipeline

If you want to start a Stored sub-pipeline from your algorithm, use this event.

```json
{
   "command": "startStoredSubPipeline",
   "data": {
        "subPipeline": {
            "name": "<stored-sub-pipeline-name>",
        },
        "subPipelineId": "<alg-subPipeline-internal-id>"
   }
}
```

* The "subPipeline" object gives a standard stored description of the requested sub pipeline (name and optionally flowInput, options, webhooks).
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

[How To Implement](/algorithms/implement/#handle-errors)
