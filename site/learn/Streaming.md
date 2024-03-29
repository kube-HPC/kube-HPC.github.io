---
title: Streaming
sidebarTitle: Streaming
layout: ../_core/DocsLayout
category: Learn
sublinks: Introduction, Features, Advanced
permalink: /learn/streaming/
next: /learn/caching/
---

# Streaming

## Introduction

While Batch processing is need for some cases, such as gathering and data enrichment, there are other cases where the data is generated continuously, which typically send in the data records simultaneously. Streaming data includes a wide variety of data such as log files generated by customers using your mobile or web applications, eCommerce purchases, in-game player activity, information from social networks, financial trading floors, or geospatial services telemetry from connected devices or instrumentation in data centers.  
HKube's data streaming is an extension to hkube batch processing pipeline architecture that handles millions of events at scale,
In real-time. As a result, you can collect, analyze, and store large amounts of information.
That capability allows for applications, analytics, and reporting in real-time.

![StreamingDiagram](../../img/streaming/Streaming-diagram-nobackground.png)

### Use Cases - Stream Tweets in real-time

So where are hkube data streams good for? we can take a look on stream from Twitter as an example on this particular case we want to enrich the data from other resources for example Facebook or Linkedin and other internal databases before saving it

- Use the Twitter API and Hkube Streaming to get and analyze real-time twitts for your research
- "twitt" node subscribes to Twitter API and is receiving real-time twitts
- "sort" node is sorting and sending the twitts according to their language
- "A" and "B" nodes analyze the twitt messages and save them to DB

## Features

Hkube streaming pipeline supports :

### Unique data transportation

hkube as its own data transportation which allows sending data directly between nodes in that way we can ensure the follows

- The data will keep its order
- highly throughput low latency
- highly scalable

### Autoscaling

The throughput of streaming can be varied over time so we will able to handle bursts and also free
resources for other jobs in case it's not needed.  
With its own unique heuristic system hkube is able to recognize changes in throughput and to act pretty fast to support the needs.  
To understand it lets look at a scenario the demonstrate how hkube handle pressures

### conditional data flows

On streaming data in the majority of the time, we want that the data will move on a specific flow but there are scenarios when we want to change the flow dynamically.
To understand it let take the twitter use case for example, in the majority of the cases we just want to enrich the data with more data from other resources but for example, in case that we cant recognize the post writer for some reason we want to create other prerequisites before the enrichment.
Hkube helps you to handle that situation with conditional data flow we will explain later how to create and work with this feature

### How to work with

- Streaming pipelines are built from Stateful and Stateless algorithms

#### Stateful algorithm

- A stateful algorithm is coupled for a specific execution
- The stateful algorithm must use hkube's SDK to decide on which flow the data should continue the default one or one of the conditionals
- Only one stateful algorithm can be executed for each algorithm kind on a specific execution
- There can be multiple stateful algorithms with different node names
- The stateful algorithm will be closed if one of the following occurred:
  - The execution is closed by the client using HKube's API
  - On algorithm main function return

#### Stateless algorithm

- A stateless algorithm can serve its life multiple executions
- The stateless algorithm can scale (up/down) dynamically according to the job’s needs
- On failure, Hkube will skip the current execution (performance needs)
- Stateless algorithm doesn't need to use hkub's API to continue the flow those will happen after the return command
- Scaling up stateless is depended on:
  - Sending Node queue size
  - Queue size increase/decrease rate
  - Receiving node process time

#### Streaming Flow

- The Flow is representing the flow of data through the pipeline Nodes (Flow mast start with Stateful Node/Algorithm)
- Define streaming flows in simple syntax example: node A stream to B and C, node B stream to D. it will be: A >> B&C | B >> D

```json
{
    "streaming": {
        "flows": {
            "analyze": "sort>>A",
            "master": "twitt >>sort>>B"
        },
        "defaultFlow": "master"
    }
}
```

### Advanced

#### HKUBE API STREAMING METHODS for Stateful algorithm

- **sendMessage(msg,flowName)**
    - Passing on a message to the next node in the pipeline-flow.
    - parameters:
    - msg - A created message as desired to be obtained by the next node.
    - flowName: The name of the flow of nodes defined in the pipeline definition. This parameter should be given only if a new flow is initiated. (Not if the processing is already in the middle of a flow.) In case no flow name is given and the node is not in the middle of a flow initiated earlier, the default flow defined in the pipeline definition will be used as a flow name.
- **registerInputListener(onMessage=handleMessage)**
    - Used only within a stateful algorithm. registerInputListener allows registering a method written by the algorithm implementor, which will be invoked upon each message that arrives.

    - The onMessage signature is onMessage(msg, origin) where the origin is the name of the previous node.

- **startMessageListening()**
    - Used only within a stateful algorithm. Once all message handlers had been registered using registerInputListener, startMessageListening needs to be invoked to start getting the messages upon arrival.​ #
