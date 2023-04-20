---
title: Nodes
layout: ../_core/DocsLayout
category: Learn
permalink: /learn/nodes/
next: /learn/input/
sublinks: Entry Nodes, Final Nodes
---

In order to create [this](../../learn/pipelines/) pipeline flow, we need to specify a node list which look like this:

```json
"name": "DAG",
"nodes": [{
    "nodeName": "A",
    "algorithmName": "a-alg",
    "input": ["data"]
},
{
    "nodeName": "B",
    "algorithmName": "b-alg",
    "input": ["@A"]
},
{
    "nodeName": "C",
    "algorithmName": "c-alg",
    "input": ["@B"]
},
{
    "nodeName": "D",
    "algorithmName": "d-alg",
    "input": ["@B", "@G"]
},
{
    "nodeName": "E",
    "algorithmName": "e-alg",
    "input": ["@B", "@C", "@D"]
},
{
    "nodeName": "F",
    "algorithmName": "f-alg",
    "input": ["@E"]
},
{
    "nodeName": "G",
    "algorithmName": "g-alg",
    "input": ["data"]
}]
```

> The order the nodes are written does not relevant

Each node has three properties.  
- **nodeName**: the node unique identifier in the current pipeline.  
- **algorithmName**: the name of the algorithm that should run.  
- **input**: the input to the algorithm.  

Node A and Node G will run first in parallel, because their input does not refer to any other node.  
The **@** indicates a reference to other node.  

Node B will run after Node A (["@A"]).  
Node C will run after Node B (["@B"]).  
Node D will run after Node B and G (["@B", "@G"]).  
Node E will run after Node B, C, D (["@B", "@C", "@D"]).  
Node F will run after Node E (["@E"]).

You can see that the order and the direction of the pipeline is determined by the node **input**.

### Entry Nodes

These are the nodes that will run first, in the example above Node A and Node G.   
Their input does not refer to any other node (have no parents).

### Final Nodes

These are the nodes that will run last, in the example above Node F.   
No other node is depend on these nodes (have no children).  
The results of the entire pipeline are actually the results of these nodes.
