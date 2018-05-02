---
title: Introduction
sidebarTitle: Introduction
layout: ../_core/DocsLayout
category: Code
permalink: /code/
---

Before you build your algorithm and push it https://kube-hpc.github.io/api-server/docs.html docker registry,
you need to expose it to the outer world.
Hkube communicate with your algorithm via socketio or websocket.  
All messages are JSON objects with 

```js
{
message = {
  command: "command",
  data: {},
  error: {}
}
```

```graphql
# { "hkubex": true, "schema": "connect" }
{
  hero {
    name
  }
}
```

dsds
dsds
dsds

```graphql
# { "hkubex": true, "schema": "connect2" }
{
  hero {
    name
  }
}
```

dsds

```js
{
message = {
command: "command",
data:{},
error:{}
}
```

-  initialize
-  start
-  stop


### initialize

command to initialize the algorithm. sent for every task activation.  

```js
payload = {
   command: "initialize",
   data: { // include input array (the same input as written in the descriptor)
       input: ["input1", "input2", {foo:"bar"}]
   }
}
```

response: initialized if OK
```js
payload = {
   command: "initialized",
		error, with data:
		{
   resultCode: "Code",
   error: "Error description"
}
```

### start
command to start the algorithm task
command: start
data: NA
response: started

### stop
command to abort the running algorithm task
command: stop
data: NA
response: stopped


-  initialized,
-  started,
-  stopped,
-  progress,
-  errorMessage,
-  done

