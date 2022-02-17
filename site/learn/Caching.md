---
title: Caching / Run Node
sidebarTitle: Caching / Run Node
layout: ../_core/DocsLayout
category: Learn
sublinks: Introduction, Use Cases, How to activate cache
permalink: /learn/caching/
next: /learn/debug/
---

## Introduction
 Hkube pipeline execution can be long and complex 
 
  Hkube Caching allows you to run job from a specific node and getting the data of the predecessors from caching of the previous run, saving time and resources  enable you to monitor or debug the relevant Node without the need to wait for previous prosses to complete
  
  **Note: the Caching is only relevant to the batch pipeline**

## Use Cases 
 After executing the following job you suspect that the "yellow" node does not calculate its output properly and you wish to rerun the job with the same input while monitoring the yellow node during execution, to avoid rerunning the "red" and the "green" process you can select the yellow node and run it using the caching.

![simple.png](https://images.zenhubusercontent.com/5ddb91c470bd590001fbdfae/8f49a192-bb46-4b40-af6e-6b6a2b1d2260)

The "red" and "green" output will be taken from storage saving  processing time and resources 
![simple2.png](https://images.zenhubusercontent.com/5ddb91c470bd590001fbdfae/c54a31ed-6ad5-4464-ac27-206153499a92)

## How to activate cache
### UI
- Open the job you wish to execute cache from 
- Select the relevant node 
- Click on the play button![play2.png](https://images.zenhubusercontent.com/5ddb91c470bd590001fbdfae/cdbd035c-01ba-405c-9ac2-4a0aea3dd20a) 

### Rest API
- POST `"https://{HKUBE URL}/hkube/api-server/api/v1/exec/caching" -H  "accept: application/json" -H  "Content-Type: application/json" -d "{"jobId":"{jobId}","nodeName":"{node name}","debug":false}"`
