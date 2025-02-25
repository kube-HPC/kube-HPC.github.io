---
title: Triggers
layout: ../_core/DocsLayout
category: Learn
permalink: /learn/triggers/
next: /learn/webhooks/
sublinks: Cron, Pipelines
---

HKube can run your stored pipelines based on triggers.  
There are two types of triggers: **Cron** trigger and **Pipelines** trigger.

### Cron

HKube can schedule your stored pipelines based on cron pattern.  
see this [cron](https://crontab.guru/) editor in order to construct your cron.  

If you want to run your pipeline periodically using cron, you just need to add cron triggers to your stored pipeline.  For example: lets create a pipeline that will run in the 20th and 40th seconds, every Sunday, Monday and Tuesday.

 ```json
"name": "trigger-cron",
"nodes": [
    {
        "nodeName": "green",
        "algorithmName": "green-alg",
        "input": [1 , true, "hello"]
      },
 ],
 "triggers": {
     "cron": {
         "pattern": "20,40 * * * * 0,1,2",
         "enabled": false
     }
}
```
Now all you need to do is to start your [cron pipeline](/spec/#tag/Cron/paths/~1cron~1start/post).  
To stop your [cron pipeline](/spec/#tag/Cron/paths/~1cron~1stop/post). 
Alternative way to start/stop is to update pipeline descriptor with enabled true/false in this way once pipeline is stored with enabled true/false the cron job start/stop automatically.

### Pipelines

 You can run your pipelines each time another pipeline/s has been succeed.  
 For example: lets create a simple pipeline *trigger-1*.

```json
"name": "trigger-1",
"nodes": [
    {
        "nodeName": "green",
        "algorithmName": "green-alg",
        "input": [1 , true, "hello"]
      }
 ]
```

Now lets create another pipeline *trigger-2*, that has new property **triggers**.  
Inside **triggers** we add the **pipelines** property which is an array of stored pipelines.  
Now each time *trigger-1* will run with success, *trigger-2* will run too.


 ```json
"name": "trigger-2",
"nodes": [
    {
        "nodeName": "green",
        "algorithmName": "green-alg",
        "input": [1 , true, "hello"]
      }
 ],
 "triggers": {
     "pipelines": ["trigger-1"] 
}
```

You can create multiple **pipelines** that will trigger this pipeline by creating array of pipelines.

 ```json
"name": "trigger-2",
"nodes": [
    {
        "nodeName": "green",
        "algorithmName": "green-alg",
        "input": [1 , true, "hello"]
      }
 ],
 "triggers": {
     "pipelines": ["trigger-a", "trigger-b", "trigger-c"] 
}
```