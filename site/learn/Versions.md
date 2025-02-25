---
title: Versions
sidebarTitle: Versions
layout: ../_core/DocsLayout
category: Learn
permalink: /learn/versions/
sublinks: Algorithms, Pipelines
next: /learn/pipelines/
---

Hkube manages versioning for both algorithms and pipelines, allowing you to easily switch between different versions.
Each version has a unique version ID, creation date, and details about its specification.

## Algorithms
A new algorithm version is created in the following cases:  
1) The first time an algorithm is inserted with an image.  
2) Any time there is a change in the algorithm specification.  
3) After a successful algorithm build.   

Each algorithm points to a specific version, and you can switch between versions using either the Dashboard or the Swagger API.

To switch versions via the Swagger API, send a `POST` request to `/versions/algorithms/apply` with the following JSON body:
```json
{
    "name": "alg-name",  // The name of the algorithm
    "version": "version-id", // The version you want to switch to
    "force": true  // Whether to replace the current algorithm version for running instances
}
```
> **Note:** Setting "force": true will cause pipeline failures because Hkube must shut down running instances.

For more details, see [Algorithm Versions](/spec/#tag/Algorithm-Versions).

After a successful algorithm build, a new version is created. If it is the first build, the new version is automatically activated.  
For subsequent builds, new versions are created, but you must manually select which version to apply.

## Pipelines
Hkube also supports versioning for pipelines, allowing you to track and switch between different pipeline versions.

A new pipeline version is created in the following cases:  
1) The first time a pipeline is inserted.  
2) Any time there is a change in the pipeline specification.  
Each pipeline points to a specific version, and you can switch between versions using the Dashboard or the Swagger API.

To switch versions via the Swagger API, send a `POST` request to `/versions/pipelines/apply` with the following JSON body:
```json
{
    "name": "pipeline-name",  // The name of the pipeline
    "version": "version-id" // The version you want to switch to
}

```
For more details, see [Pipeline Versions](/spec/#tag/Pipeline-Versions).
