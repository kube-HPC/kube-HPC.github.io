---
title: Algorithms
sidebarTitle: Algorithms
layout: ../_core/DocsLayout
category: Learn
sublinks: Create, Versions, Builds, Advanced
permalink: /learn/algorithms/
next: /learn/pipelines/
---

## Introduction
Algorithms are the smallest units you need in order to create a pipeline.  
No matter what is your pipeline use-case, algorithm is essential unit for that task.

### How to work with
 There are 3 ways to add algorithms to Hkube.  
- **Code**  - you only have code and you packed it with zip/tar.gz and upload to Hkube.  
- **Image** - you only have docker image since you already deployed your algorithm to Hkube.  
- **Git**   - you only have github/gitlab repository and you want that Hkube will build the algorithm on each commit.  


### Create
Lets add our first algorithm using the `Code` option.  
For this example we will use `Python`.  
First, create `main.py` file and paste the following code into it.  
Second, create zip file from `main.py`.


```hkube-tabs
# { "hkube": true, "schema": "algorithm-start" }
```

To insert the algorithm to Hkube, you can use the REST-API/Dashboard/hkubectl.  
In this tutorial we will create the algorithm using the Hkube Dashboard.

![Diagram](/img/examples/add-algorithm/hello-wizard.png) 

Here we selected the `Code` Build Type and just Drag & Drop our zip file.   
By using the `Code` option, there are minimal fields you need to provide.  
**`Algorithm Name`** - we defined our unique name for you algorithm as `hello`.  
**`Environment`**  - we need to tell Hkube this `Python` algorithm.  
**`Entry Point`** - we defined our entry point to be the `main.py` file.


After submitting the algorithm, you will see the `hello` algorithm added to the algorithm list.

![Diagram](/img/examples/add-algorithm/hello-list.png)


Now, Hkube will run a build process to create your algorithm image.  
This process is actually creating a Docker image and push it to Docker Hub.  

Please notice that there is no image yet for this algorithm, this is because the algorithm is running it's first build. Notice that you can't run algorithm without an image.  
Now, lets double click on the `hello` algorithm.

![Diagram](/img/examples/add-algorithm/hello-versions.png) 

We can see that there are no versions yet, now push to the builds tab and watch the build process.

![Diagram](/img/examples/add-algorithm/hello-build.png) 

This screen lets you track the build progress.  
Once the build  completed successfullyy, a new version will be created and an image will be updated.

![Diagram](/img/examples/add-algorithm/hello-build-ok.png) 

We can see here that the build has completed successfully, now lets go back to the versions tab and see that we have a new version with a new image.  

![Diagram](/img/examples/add-algorithm/hello-version.png) 


Thats it! you created your first algorithm.  
Now you can run your algorithm by just pressing the run button.  

![Diagram](/img/examples/add-algorithm/hello-run.png) 


Now, go back to the jobs tab and see the pipeline execution.  
You can see the results of the pipeline execution "Hello Hkube!"

### Create with Image

This is the most fast and easy way to add a new algorithm.

![Diagram](/img/examples/add-algorithm/hello-image.png) 

### Create with Git

If you are using GitHub or GitLab, you can easily integrate your algorithms with Hkube.   

![Diagram](/img/examples/add-algorithm/hello-git.png) 

After you submit this form, Hkube will run a build process to create your algorithm image.  
If you want each commit will trigger new build for the algorithm, you also need to specify a GitHub webhook.

```
http://<CLUSTER>/hkube/api-server/api/v1/builds/webhook/github
```

![Diagram](/img/examples/add-algorithm/hello-github-webhook.png) 

![Diagram](/img/examples/add-algorithm/hello-github-webhook-result.png) 

You know your webhook is work if you get Response: 200 and `buildId`

#### Algorithm methods:  
Your algorithm must include a method named `start`.  
> <T any> start(Dictionary<T string, T any> data)

> There are also some optional methods:
> <T> init(Dictionary data)
> <T> stop(Dictionary data)
> <T> exit(Dictionary data)


### Versions

Hkube manage versions for algorithms, so you can easily switch between them.  
There are three cases when a new version will be created:  
1) First time you insert algorithm with image.  
2) Each time `algorithm image` has been changed.  
3) After successful algorithm build.   

Every algorithm points to a specific version, you can switch between versions by using the Dashboard or the API.  
using the API just `POST` to `/versions/algorithms/apply` with body.  
```json
{
    "name"  // the name of the algorithm
    "image" // the new version you want switch to
    "force" // should replace or not current algorithm version for running algorithm instances
}

```
> using force: true while algorithm is in use by running pipeline will cause pipeline failure, since Hkube to rerun the algorithms.

see [versions](/spec/#tag/Versions) for more details.

After successful algorithm build a new version will be created, if it was the first build then the new version will automatically will be activated for this algorithm. the next builds will also create new versions but you will need to manually choose which version you want to apply.


### Builds
TBD

## Monitoring Metrics
Algorithms using Tensorflow can generate metrics for a Tenosrboard view. Later upon request, a Tensorboard webserver will start, serving a dashboard comparing different runs of the algorithm.
To allow hkube to display your algorithms Tesorboard metrics: In the algorithm code, write your Tensorboard metrics to a folder path set as environment variable ALGO_METRICS_DIR value. 
To run Tesorboard: In Hkube spec find 'board' api to start a tensorboard web server, visualizing the tensor metrics.

### Advanced Settings

|   |Type|Description|Required|
|---|---|---|---|
|**name**|`string`|Unique identifier representing a specific algorithm| &#10003; Yes|
|**env**|`string`||No|
|**algorithmImage**|`string`|image name as in the docker registry|No|
|**cpu**|`number`|algorithm cpu|No, default: `0.1`|
|**gpu**|`number`|algorithm gpu|No|
|**mem**|`string`|algorithm memory|No, default: `"256Mi"`|
|**reservedMemory**|`string`|Reserved memory for HKube's operations such as in-memory cache, higher value means faster data retrieval and less algorithm memory, lower value means slower data retrieval and more algorithm memory|No|
|**options**|`object`||No, default: `{}`|
|**version**|`string`|Hkube's auto increment semantic versioning|No|
|**mounts**|`object` `[]`|a list of volumes to mount into the algorithm|No|
|**gitRepository**|`object`||No|
|**entryPoint**|`string`||No|
|**dependencyInstallCmd**|`string`|Command to run to install algorithm dependencies. CWD is the algorithm root folder Defaults to language specific defaults. e.g. For python: pip install -r requirements.txt |No|
|**baseImage**|`string`|Custom docker image to be used as base to the newly built algorithm image|No|
|**minHotWorkers**|`integer`|how many live algorithm instances will always run|No, default: `0`|
|**maxWorkers**|`integer`|Maximum number of workers for this algorithm. 0 marks no limit|No|
|**quotaGuarantee**|`integer`|The amount of algorithms required to be scheduled first in a case of cluster pressure|No|
|**algorithmEnv**|`object`|key value environment variables for algorithm|No|
|**workerEnv**|`object`|key value environment variables for worker|No|
|**nodeSelector**|`object`|key value labels for nodes constraint|No|
|**labels**|`object`|attach key value metadata to algorithm pod, usually for users|No|
|**annotations**|`object`|attach key value metadata to algorithm pod, usually for tools and libraries|No|
|**type**|`string`|type of algorithm code resource|No, default: `"Image"`|
|**downloadFileExt**|`string`|the extension name that will be attached to a file when downloading algorithm result|No|

## github

|   |Type|Description|Required|
|---|---|---|---|
|**url**|`string`|a url for the git repository| &#10003; Yes|
|**commit**|`object`|commit details|No|
|**branchName**|`string`|the branch name you wish to create a build from|No, default: `"master"`|
|**tag**|`string`|a specific tag which will trigger the build|No|
|**token**|`string`|a token which allows hkube's build system to access private repositories more information https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line|No|
|**gitKind**|`string`||No, default: `"github"`|