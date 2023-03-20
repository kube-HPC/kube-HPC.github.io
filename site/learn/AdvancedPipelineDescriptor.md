---
title: Advanced Pipeline Descriptor
sidebarTitle: Advanced Pipeline Descriptor
layout: ../_core/DocsLayout
category: Learn
permalink: /learn/advancedPipeline/
next: /learn/install/
---

#### Advance Options

There are more features that can be defined from the descriptor file.

```JSON
"webhooks": {
    "progress": "http://my-url-to-progress",
      "result": "http://my-url-to-result"
    },
  "priority": 3,
  "triggers":
      {
      "pipelines":[],
        "cron":{}
      }
  "options":{
      "batchTolerance": 80,
      "concurrentPipelines": 2,
      "ttl": 3600,
      "progressVerbosityLevel":"info"
  }
```

- **webhooks** - There are two types of webhooks, _progress_ and _result_.

  > You can also fetch the same data from the REST API.

  - progress:`{jobId}/api/v1/exec/status`
  - result: `{jobId}/api/v1/exec/results`

- **priority** - HKube support five level of priorities, five is the highest. Those priorities with the metrics that HKube gathered helps to decide which algorithms should be run first.

- **triggers** - There are two types of triggers that HKube currently support `cron` and `pipeline`.

  - **cron** - HKube can schedule your stored pipelines based on cron pattern.
    > Check [cron editor](https://crontab.guru/) in order to construct your cron.
  - **pipeline** - You can set your pipelines to run each time other pipeline/s has been finished successfully .

- **options** - There are other more options that can be configured:

  - **Batch Tolerance** - The Batch Tolerance is a threshold setting that allow you to control in which _percent_ from the batch processing the entire pipeline should be fail.
  - **Concurrency** - Pipeline Concurrency define the number of pipelines that are allowed to be running at the same time.
  - **TTL** - Time to live (TTL) limits the lifetime of pipeline in the cluster. stop will be sent if pipeline running for more than ttl (in seconds).
  - **Verbosity Level** - The Verbosity Level is a setting that allows to control what type of progress events the client will notified about. The severity levels are ascending from least important to most important: `trace` `debug` `info` `warn` `error` `critical`.
