---
title: Hkube 101
sidebarTitle: Hkube 101
layout: ../_core/DocsLayout
category: Learn
permalink: /learn/
sublinks: Features, Getting started - UI, Getting started - REST API, Getting started - CLI, Let's talk about HKUBE, CLI Usage Example

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
  
- **Running your creations**

    - Both algorithms and pipelines, produce results ald logs that can be viewed in the UI.
    - We offer debugging options and various advanced configurations.


##  Getting started - REST API

##  Getting started - CLI



## Let's talk about HKUBE

### The Problem

We want to solve the next problem with given input and a desired output:

- _Input:_ Two numbers `N`, `k`.
- _Desired Output:_ A number `M` so: ![sum](/../img/101/sum.svg)

For example: `N=5`, `k=3` will result:![series](/../img/101/series.svg)

### Solution

We will solve **the problem** by running a distributed pipeline of three algorithms: Range, Multiply and Reduce.

#### Range Algorithm

Creates an array of length `N`.

```console
 N = 5
 5 -> [1,2,3,4,5]
```

#### Multiply Algorithm

Multiples the received data from `Range Algorithm` by `k`.

```console
k = 2
[1,2,3,4,5] * (2) -> [2,4,6,8,10]
```

#### Reduce Algorithm

The algorithm will wait until all the instances of the `Multiply Algorithm` will finish then it will summarize the received data. 

```console
[2,4,6,8,10] -> 30
```

### Algorithm

The pipeline is built from algorithms which are containerized with docker.

There are two ways to integrate your algorithm into HKube:

- **Seamless Integration** - As written above HKube can build your docker automatically with the HKube's websocket wrapper.
- **Code writing** - In order to add algorithm manually to HKube, you need to wrap your algorithm with HKube. HKube already has a wrappers for `python`,`javaScript`, and `java`.

#### Implementing the [Algorithms](#meet-the-algorithms)

We will create the algorithms to solve [the problem](#the-problem), HKube currently support two languages for auto build _Python_ and _JavaScript_.

  > Important notes:
>
> - **Installing dependencies**
>   During the container build, HKube will search for the _requirement.txt_ file and will try to install the packages from the pip package manager.
> - **Advanced Operations**
>   HKube can build the algorithm only by implementing start function but for advanced operation such as one time initiation and gracefully stopping you have to implement two other functions `init` and `stop`.

##### Range (Python)

```Python
def start(args):
    print('algorithm: range start')
    input = args['input'][0]
    array = list(range(input))
    return array
```

The `start` method calls with the args parameter, the inputs to the algorithm will appear in the `input` property.

The `input` property is an array, so you would like to take the first argument (`"input":["@flowInput.data"]` as you can see we placed `data` as the first argument)

##### Multiply (Python)

```Python
def start(args):
    print('algorithm: multiply start')
    input = args['input'][0]
    mul = args['input'][1]
    return input * mul
```

We've sent two parameters `"input":["#@Range","@flowInput.mul"]`, the first one is the output from `Range` that sent an array of numbers, but because we used the **batch** sign **(#)** each instance of the multiply algorithm will get one item from the array, the second parameter we passing is the `mul` parameter from the `flowInput` object.

##### Reduce (Javascript)

```javascript
module.exports.start = args => {
	console.log('algorithm: reduce start');
	const input = args.input[0];
	return input.reduce((acc, cur) => acc + cur);
};
```

We've placed `["@Multiply"]` in the input parameter, HKube will collect all the data from the multiply algorithm and will send it as an array in the first input parameter.

## CLI Usage Example

### Building a Pipeline

We will **implement the algorithms** using various languages and **construct a pipeline** from them using **HKube**.

![PipelineExample](/../img/101/pipeline-example-1.png)

#### Pipeline Descriptor

The **pipeline descriptor** is a **JSON object** which describes and defines the links between the **nodes** by defining the dependencies between them.

```json
{
	"name": "numbers",
	"nodes": [
		{
			"nodeName": "Range",
			"algorithmName": "range",
			"input": ["@flowInput.data"]
		},
		{
			"nodeName": "Multiply",
			"algorithmName": "multiply",
			"input": ["#@Range", "@flowInput.mul"]
		},
		{
			"nodeName": "Reduce",
			"algorithmName": "reduce",
			"input": ["@Multiply"]
		}
	],
	"flowInput": {
		"data": 5,
		"mul": 2
	}
}
```

> Note the `flowInput`: `data` = N = 5, `mul` = k = 2

#### Node dependencies - Legend

HKube [allows special signs](http://hkube.io/learn/execution/#batch) in nodes `input` for defining the pipeline execution flow.

In our case we used:

**(@)**  —  References input parameters for the algorithm.

**(#)**  —  Execute nodes in parallel and reduce the results into single node.

**(\#@)** — By combining `#` and `@` we can create a batch processing on node results.

![JSON](/../img/101/pipeline-example-2.png)

#### JSON Breakdown

We created a pipeline name `numbers`.

```json
    "name":"numbers"
```

The pipeline is defined by three nodes.

```json
"nodes":[
    {
            "nodeName":"Range",
            "algorithmName":"range",
            "input":["@flowInput.data"]
        },
        {
            "nodeName":"Multiply",
            "algorithmName":"multiply",
            "input":["#@Range","@flowInput.mul"]
        },
        {
            "nodeName":"Reduce",
            "algorithmName":"reduce",
            "input":["@Multiply"]
        },
    ]
```

In HKube, the linkage between the nodes is done by defining the algorithm inputs. `Multiply` will be run after `Range` algorithm because of the input dependency between them.

Keep in mind that HKube will transport the results between the nodes **automatically** for doing it HKube currently support two different types of transportation layers _object storage_ and _files system_.

![Group 4 (3)](/../img/101/pipeline-example-3.png)

The `flowInput` is the place to define the Pipeline inputs:

```json
"flowInput":{
    "data":5,
    "mul":2
}
```

In our case we used _Numeric Type_ but it can be any [JSON type](https://json-schema.org/understanding-json-schema/reference/type.html) (`Object`, `String` etc).

### Integrate Algorithms

After we created the [algorithms](#meet-the-algorithms), we will integrate them with the [CLI](#cli).

> Can be done also through the [Dashboard](#dashboard).

Create a `yaml` (or `JSON`) that defines the **algorithm**:

```yaml
# range.yml
name: range
env: python # can be python or javascript
resources:
  cpu: 0.5
  gpu: 1 # if not needed just remove it from the file
  mem: 512Mi

code:
  path: /path-to-algorithm/range.tar.gz
  entryPoint: main.py
```

Add it with the [CLI](#cli):

```console
hkubectl algorithm apply --f range.yml
```

> Keep in mind we have to do it **for each one of the algorithms**.

### Integrate Pipeline

Create a `yaml` (or `JSON`) that defines the **pipeline**:

```yml
# number.yml
name: numbers
nodes:
  - nodeName: Range
    algorithmName: range
    input:
      - '@flowInput.data'
  - nodeName: Multiply
    algorithmName: multiply
    input:
      - '#@Range'
      - '@flowInput.mul'
  - nodeName: Reduce
    algorithmName: reduce
    input:
      - '@Multiply'
flowInput:
  data: 5
  mul: 2
```

#### Raw - Ad-hoc pipeline running

For running our pipeline as raw-data:

```bash
hkubectl exec raw --f numbers.yml
```

#### Stored - Storing the pipeline descriptor for future runs

First we store the pipeline:

```bash
hkubectl pipeline store --f numbers.yml
```

Then you can execute it (if `flowInput` available)

```bash
# flowInput stored
hkubectl exec stored numbers
```

For executing the pipeline with other input, create `yaml` (or `JSON`) file with `flowInput` key:

```yml
# otherFlowInput.yml
flowInput:
  data: 500
  mul: 200
```

Then you can executed it by pipeline `name`:

```bash
# Executes pipeline "numbers" with data=500, mul=200
hkubectl exec stored numbers --f otherFlowInput.yml
```

### Monitor Pipeline Results

As a result of executing pipeline, HKube will return a `jobId`.

```bash
# Job ID returned after execution.
result:
  jobId: numbers:a56c97cb-5d62-4990-817c-04a8b0448b7c.numbers
```

This is a unique identifier helps to **query** this **specific pipeline execution**.

- **Stop** pipeline execution:
  `hkubectl exec stop <jobId> [reason]`

- **Track** pipeline status:
  `hkubectl exec status <jobId>`

- **Track** pipeline result:
  `hkubectl exec result <jobId>`