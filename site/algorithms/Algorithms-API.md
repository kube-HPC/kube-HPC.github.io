---
title: Algorithm API
sidebarTitle: API
layout: ../_core/DocsLayout
category: Algorithms
permalink: /algorithms/api
next: /algorithms/implement/
---

The first step you need is to expose your algorithms to the outer world.     
All messages between Hkube and algorithm are in JSON format.

## Events From Hkube to Algorithm
---

These events are sent from Hkube to your algorithm.

-  [Initialize](#event-initialize)
-  [Start](#event-start)
-  [Stop](#event-stop)

[How To Implement](/algorithms/implement/#handle-messages)

##### *JSON*
```js
{
   "command": <string> // one of the above
   "data": <Object>
}
```

### Event: initialize

The first event that sent to the algorithm, sent for every task activation.

```js
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

```js
{
   "command": "start"
}
```

> This event include no data

### Event: stop

Event to abort the running algorithm task

```js
{
   "command": "stop"
}
```

## Events From Algorithm to Hkube
---

These events are sent from algorithm to Hkube.

-  [initialized](#event-initialized)
-  [started](#event-started)
-  [stopped](#event-stopped)
-  [done](#event-done)
-  [progress](#event-progress)
-  [errorMessage](#event-errorMessage)

##### *JSON*
```js
{
   "command": <string>, // one of the above
   "data": <Any>
   "error": <Object> {
      "code": <string>
      "message": <string>
      "details": <string>
   }
}
```

### Event: initialized

Response event after initialization complete.  

```js
{
   "command": "initialized"
}
```

### Event: started

Response event after start complete.  

```js
{
   "command": "started"
}
```

### Event: stopped

Response event after stop complete.  

```js
{
   "command": "stopped"
}
```

### Event: done

Response event after the algorithm finish the task. 

```js
{
   "command": "done"
}
```

### Event: progress

If you want to report progress about your algorithm, send this event.

```js
{
   "command": "progress",
   "details": "Optional extra details"
}
```

### Event: errorMessage

If any error occurs in your algorithm, send this event.

```js
{
   "command": "errorMessage",
   "error": {
      "code": "<YOUR_CODE>",
      "message": "<YOUR_MESSAGE>",
      "details": "<YOUR_DETAILS>"
   }
}
```
[How To Implement](/algorithms/implement/#handle-errors)
