---
title: API Implementation
sidebarTitle: Implement
layout: ../_core/DocsLayout
category: Algorithms
permalink: /algorithms/implement
next: /algorithms/build/
---

Hkube communicate with your algorithm via websocket (native websocket or socketio).  
This tutorial explain how to create a websocket client that works with Hkube.
You can implement the websocket client in any language. 

*  [Connect](#connect)
*  [Handle Events](#handle-events)
   * [Initialize](#initialize)
   * [Start](#start)
   * [Stop](#stop)
*  [Reconnect](#reconnect)
*  [Handle Errors](#handle-errors)
*  [Send Event](#send-event)

## Connect

The first thing your algorithm should do is to create a websocket client that listens to: **ws://localhost:3000**.  

```hkube
# { "hkube": true, "schema": "connect" }
```

## Handle Events

Here we are registering to events from Hkube.  
Each event has a specific handler, as described below.

```hkube
# { "hkube": true, "schema": "handle-messages" }
```

## initialize

The initialize event is the first event that Hkube send to your algorithm.  
The payload of this event includes the pipeline data and the input for your algorithm.  
You need to store the input in local variable for later use.  
> same input as written in the [descriptor](/learn/input/)

```hkube
# { "hkube": true, "schema": "handle-messages-initialize" }
```

## start

The start event is the second event that Hkube send to your algorithm.  
As you can see, at the first step of this handler you need to tell Hkube that your algorithm has started.  
Then you let the algorithm do it's work and finally you send the done event with the algorithm result.

```hkube
# { "hkube": true, "schema": "handle-messages-start" }
```

## stop

Hkube will send this event to your algorithm only if stop request was made by Hkube users.

```hkube
# { "hkube": true, "schema": "handle-messages-stop" }
```

## Reconnect

Web Sockets are not auto reconnect, so it's important that you will handle connection lose.   

```hkube
# { "hkube": true, "schema": "reconnect" }
```

## Handle Errors

It's highly recommended that you will catch any error in your algorithm and send it to Hkube.  

```hkube
# { "hkube": true, "schema": "handle-errors" }
```

## Send Event

This is a simple handler for send response back to Hkube.

```hkube
# { "hkube": true, "schema": "send-event" }
```