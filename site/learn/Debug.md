---
title: Debug Algorithm 
sidebarTitle: Debug Algorithm 
layout: ../_core/DocsLayout
category: Learn
sublinks: Introduction, Use Cases, How To
permalink: /learn/debug/
# next: /learn/tensorboard/
next: /learn/pipelines/
---
## Introduction
HKube enable debugging algorithm on your local IDE as part of a pipeline executed on the cluster

## Use Cases 
 After executing the following job you suspect that the "yellow" node does not calculate its output properly and you wish to debug it in your local IDE  

![simpleDebug.png](https://images.zenhubusercontent.com/5ddb91c470bd590001fbdfae/0df5c0ec-5325-49b7-9298-f46f1d83757f)

## How To
**HKUBE has four options for debug algorithm:** 

-  **Debug  Pipeline** - execute the pipeline from start 
    -  In the pipeline descriptor change the node type from "algorithm" to "debug"
-  **Debug from cache** , debug  specific node and while getting the data of the predecessors from caching of the previous run 
     -  In the dashboard open the relevant job select the algorithm you wish to debug click the![debug-icon.png](https://images.zenhubusercontent.com/5ddb91c470bd590001fbdfae/883feb2f-6255-4a0a-ba3a-055ae315c1a9) icon
-  **Debug algorithm** (without pipeline)
     -  Select the algorithm from the algorithm list and click the![debug-icon.png](https://images.zenhubusercontent.com/5ddb91c470bd590001fbdfae/883feb2f-6255-4a0a-ba3a-055ae315c1a9)  icon
-  **Debug Override**  - execute the pipeline from start
    -   Run the pipeline 
    -   To the options object add "debugOverride"
    -   The value is an array with the nodes name you wish to debug i.e. "debugOverride":["yellow"]

**Obtaining the debugging URL**

TBD

## On your IDE

In order to debug your algorithm locally, install the "HKUBE wrapper" package 

-  **Python:** pip install hkube-python-wrapper
-  **nodeJS:** npm i @hkube/nodejs-wrapper

After installing the "HKUBE wrapper" package
add the following code to your project and start debugging :

### Python:

```python
from hkube_python_wrapper import Algorunner
import algorithm.main as algorithm #the path of you "start" function

def main():
        print("starting algorithm runner")
        Algorunner.Debug("<the debugging URL>",algorithm.start)

if __name__ == "__main__":
    main()
```

### NodeJS
```javascript
const NodejsWrapper = require('@hkube/nodejs-wrapper');
const alg = require("./hkubeApiImage") //the path of you "start" function
const main = async () => {
    NodejsWrapper.debug("<the debugging URL>",alg)
}

main()
```

### Java

**Setup a  run debug java configuration**

![run configuraion.jpg](https://images.zenhubusercontent.com/5cd15ae29569e0651a18b5ba/eac146a1-73ec-4e13-8ccd-f9d630985c9c)

-  **Main class**
    - Java main class is hkube.algo.wrapper.Main from artifact `io.hkube:wrapper:2.0-SNAPSHOT` (also found in https://oss.sonatype.org/content/repositories/snapshots)
-  **Runtime ClassPath**
    - `io.hkube:wrapper:2.0-SNAPSHOT` and its dependencies.
    - The written algorithm module.
![image.png](https://images.zenhubusercontent.com/5ddb91c470bd590001fbdfae/6d8a53c3-5165-4437-91a6-52d38b2a7c70)
    When running the algorithm locally you need to set 2 environment variables:

| Name | Description | 
|--|--|
|ALGORITHM_ENTRY_POINT|The name of the class you wrote implementing IAlgorithm.|
|WORKER_SOCKET_URL|path obtained from a the debug algorithm defined on hkube deployment. e.g. `ws://playground.hkube.org/hkube/debug/something`|

Instead of setting these environment variables, you can also add a config.properties file to the running classpath root directory and set these environment variable names as keys.

                WORKER_SOCKET_URL=ws://playground.hkube.org/hkube/debug/something
                ALGORITHM_ENTRY_POINT=Algorithm

-  **Program argument 'debug'**

To avoid the program attempting to load the algorithm from a jar, 'debug' should be given as a program argument.
