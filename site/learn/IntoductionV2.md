---
title: Hkube 101
sidebarTitle: Hkube 101
layout: ../_core/DocsLayout
category: Learn
permalink: /learn/
sublinks: Features, Getting started - UI
next: /learn/install/
---


> HKube is a cloud-native open source framework to run **[distributed](https://en.wikipedia.org/wiki/Distributed_computing) pipeline of algorithms** built on [Kubernetes](https://kubernetes.io/).
>
> HKube optimally **utilizing** pipeline's resources, based on **user priorities** and **[heuristics](https://en.wikipedia.org/wiki/Heuristic)**.

## Features

- **Distributed pipeline of algorithms**

  - Receives [DAG graph](https://en.wikipedia.org/wiki/Directed_acyclic_graph) as input and automatically parallelizes your algorithms over the cluster.
  - Manages the complications of distributed processing, keep your code simple (even single threaded).

- **Language Agnostic** - As a container based framework designed to facilitate the use of any language for your algorithm.

- **Batch Algorithms** - Run algorithms as a batch - instances of the same algorithm in order to accelerate the running time.

- **Optimize Hardware Utilization**

  - Containers **automatically** placed based on their resource requirements and other constraints, while not sacrificing availability.
  - Mixes critical and best-effort workloads in order to **drive up utilization** and save resources.
  - **Efficient execution** and clustering by heuristics which uses pipeline and algorithm metrics with combination of user requirements.

- **Build API** - Just upload your code, you **don't have to worry** about building containers and integrating them with HKube API.


## Getting started - UI

- **Uploading Algorithms**

  - Currently, we support Javascrypt, Python- for **autobuild**, and Java for **manual** works.
  - For compatability, algorithms must recieve input as follows:
     ```Java
        Java example here
    ```
    ```Python
    def start(args):
        print('algorithm: range start')
        input = args['input'][0]
        array = list(range(input))
        return array
    ```
    ```Javascript
    module.exports.start = args => {
        console.log('algorithm: reduce start');
        const input = args.input[0];
        return input.reduce((acc, cur) => acc + cur);
    };
    ```
  - Using the UI, there are three ways to upload your algorithms:
    - Via version control ( github/gitlab)
    - Via local package - You must pack your algorithm using
    ```Console
    $ tar -zcvf MyAlgo.tar.gz *
    ```
    - Via a pre-built docker image.
  
  ![AlgUpload](/../img/101/AlgoUpload.png) 
- **Creating a Pipeline**
    
    - While being able to run the uploaded algorithms seperately, you may create a pipeline to build your algorithm flow.
    - Using the pipeline creation wizard, you may interconnect existing algorithms and modify the input flow between each part.

  ![PipelineWiz](/../img/101/PipeLineWiz.png)
  
