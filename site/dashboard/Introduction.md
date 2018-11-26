---
title: Dashboard
sidebarTitle: Dashboard
layout: ../_core/DocsLayout
category: Dashboard
sublinks: Jobs, Workers, Algorithms, Pipelines
permalink: /dashboard/
---

Hkube Dashboard can help you in:

* [Jobs](#jobs)
* [Workers](#workers)
* [Algorithms](#algorithms)
* [Pipelines](#pipelines)
* and many more...


### Accessing the Dashboard UI
---
https://<KUBERNETES-MASTER-IP>/hkube/simulator/


### Jobs

The **Jobs** tab let you monitor your pipelines state and progress.
 
![Jobs](/img/dashboard/jobs.png)


### Extra details

Pressing the + icon near the Job ID will open the extra details panel, here you can see the DAG of your pipeline.  You can also see the status, results and pipeline data.

![DAG](/img/dashboard/dag.png)

![Pipeline Details](/img/dashboard/details.png)


### Workers

The **Workers** tab let you monitor your currently active workers.  
A Worker is an Hkube process that responsible for running a single algorithm.  
So this screen is basically showing details about your running algorithms.

![Workers](/img/dashboard/workers.png)


### Algorithms

The **Algorithms** tab let you add, edit and delete your algorithms.

![Algorithms](/img/dashboard/algorithms.png)


### Add algorithm

Adding algorithm is easy, just press the + button and fill the following details:

* Algorithm name - must contain only alphanumeric, dash or dot.
* Algorithm image - e.g. hkube/algorithm-example*.
* CPU usage - in cores.
* Memory usage - in Mb.

> \*make sure the image exists in the [docker hub](https://hub.docker.com/r/hkube/algorithm-example/)

![Add Algorithm](/img/dashboard/add-algorithm.png)


### Delete algorithm

Deleting algorithm is also easy. However, if you have any stored/running pipelines that depend on these algorithms, they will be deleted as well.

![Delete algorithm](/img/dashboard/delete-algorithm1.png)

![Delete algorithm](/img/dashboard/delete-algorithm2.png)


### Debug algorithm

If you want to inspect your algorithm integration with Hkube, you can debug your algorithm using the debug tab.  
Follow these three steps:  
1) Press the + button, write the algorithm name for debugging.  
2) Run a pipeline that contains this new algorithm you just created.  
3) Copy the **path** to your WebSocket client code.
 
![Debug algorithm](/img/dashboard/debug-algorithm.png)


### Pipelines

The **Pipelines** tab let you add, edit and delete your pipelines.  
You can also execute pipelines, this will let you edit some properties before execute.

> Modifying the pipeline in the execute window will not affect the stored pipeline.

![Stored pipelines](/img/dashboard/pipelines.png)

![Execute pipeline](/img/dashboard/exec-pipeline.png)

