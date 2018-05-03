---
title: Algorithm API
sidebarTitle: API
layout: ../_core/DocsLayout
category: Algorithms
permalink: /algorithms/api
next: /algorithms/build/
---

All messages between Hkube and algorithm are in JSON format.

#### **Hkube to Algorithm**
---
-  initialize
-  start
-  stop

##### *JSON*
```js
{
   "command": <string>, // one of the above
   "data": <Object>
}
```

#### **Algorithm to Hkube**
---
-  initialized
-  started
-  stopped
-  progress
-  errorMessage
-  done

##### *JSON*
```js
{
   "command": <string>, // one of the above
   "data": <Any>,
   "error": <Object> {
      "code": <string>,
      "message": <string>,
      "details": <string>
   }
}
```

#### **Event: initialize**

The first event that sent to the algorithm, sent for every task activation.

```js
{
   "command": "initialize",
   "data": {
       "input": ["str", 512, false, {"foo":"bar"}]
   }
}
```
> data include input array, same input as written in the [descriptor]()

Response event after initialization complete.  

```js
{
   "command": "initialized"
}
```

#### **Event: start**
event to start the algorithm task

```js
{
   "command": "start"
}
```

> This event include no data

response event after start complete.  

```js
{
   "command": "started"
}
```

response event after the algorithm finish the task. 

```js
{
   "command": "done"
}
```

#### **Event: stop**
event to abort the running algorithm task

```js
{
   "command": "stop"
}
```

response event after stop complete.  

```js
{
   "command": "stopped"
}
```

#### **Event: errorMessage**

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

#### **Event: progress**

If you want to report progress about your algorithm, send this event.

```js
{
   command: "progress"
}
```

```hkube
# { "hkubex": true, "schema": "connect" }
```