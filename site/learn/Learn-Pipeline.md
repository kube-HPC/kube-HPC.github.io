---
title: Pipeline
layout: ../_core/DocsLayout
category: Learn
permalink: /learn/pipeline/
next: /learn/nodes/
---

The basic concept behind the Hkube pipeline is [DAG](https://en.wikipedia.org/wiki/Directed_acyclic_graph)  
Directed Acyclic Graph is a graph consisting of nodes connected  
with edges that have a direction: A -> B -> C.  

![Diagram](/img/docs/DAG.png)

The reasons for choosing this structure are:
- Represent an orderings processing of nodes
- Data flow between the nodes
- Parallel and batch processing

