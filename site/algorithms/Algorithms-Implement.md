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

*  [Connect](#connect)
*  [Handle Messages](#handle-messages)
   * [Initialize](#initialize)
   * [Start](#start)
   * [Stop](#stop)
*  [Reconnect](#reconnect)
*  [Handle Errors](#handle-errors)
*  [Send Event](#send-event)

## Connect

The algorithm should create a websocket client that listens to: **ws://localhost:3000**.  
You can implement the websocket client in any language. 

```hkube
# { "hkube": true, "schema": "connect" }
```

## Handle Messages

Here we are registering to events from Hkube.  
Each event has specific handler, as described below.

```hkube
# { "hkube": true, "schema": "handle-messages" }
```

## initialize

```hkube
# { "hkube": true, "schema": "handle-messages-initialize" }
```

## start

```hkube
# { "hkube": true, "schema": "handle-messages-start" }
```

## stop

```hkube
# { "hkube": true, "schema": "handle-messages-stop" }
```

## Reconnect

```hkube
# { "hkube": true, "schema": "reconnect" }
```

## Handle Errors

```hkube
# { "hkube": true, "schema": "handle-errors" }
```

## Send Event

```hkube
# { "hkube": true, "schema": "send-event" }
```