---
title: Input
layout: ../_core/DocsLayout
category: Learn
permalink: /learn/input/
next: /learn/execution/
sublinks: Input Types, Input Order
---

## Input Types

The node input can accept as many arguments as you want from any type:  
Number, Boolean, String, Array, Null and JSON Object.

```js
"name": "example-input",
"nodes": [{
    "nodeName": "example1",
    "algorithmName": "example1-alg",
    "input": [42, 42.56, -512.23, false, true, "OK", [2,3,4], null, {foo: "bar"}]
    },
    {
    "nodeName": "example2",
    "algorithmName": "example2-alg",
    "input": [256, false, "@example1"]
    }]
```

## Input Order

Take a look at the input of **Node example2** `[256, false, "@example1"]`
the order of the arguments is not important here, it also can be `["@example1", 256, false]`.

> The order is only important for the algorithm function signature.