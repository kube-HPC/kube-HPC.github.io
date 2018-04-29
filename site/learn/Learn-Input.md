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
    "nodeName": "example",
    "algorithmName": "example-alg",
    "input": [42, 42.56, -512.23, false, true, "OK", [2,3,4], null, {foo: "bar"}]
}]
```

## Input Order

Take a look at the input of **Node E**: ["@B", "@C", "@D"].  
The order of the arguments is not important here, it also can be ["@D", "@C", "@B"].  
The order is only important for the algorithm function signature.