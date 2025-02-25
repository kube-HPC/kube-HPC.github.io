---
title: Versions
layout: ../_core/DocsLayout
category: Learn
permalink: /learn/versions/
next: /learn/pipelines/
---

## Overview
Hkube manages versions for algorithms and pipelines, meaning you can easily switch between them.
Each version has a unique version id and creation date, and details about the spec of the version.

## Algorithms
A new version will be created in those cases:  
1) First time you insert algorithm with image.  
2) Each time anything in the spec has changed.  
3) After a successful algorithm build.   

Every algorithm points to a specific version, meaning you can switch between versions by using the Dashboard or the Swagger-API.  
For using the Swagger-API use `POST` with `/versions/algorithms/apply` using the correct body, example:  
```json
{
    "name": "alg-name",  // the name of the algorithm
    "version": "version-id", // the existing version you want to switch to
    "force": true  // should replace or not current algorithm version for running algorithm instances
}
```
> Using force: true will cause a pipeline failure since Hkube need to shut down the running instances

see [versions](/spec/#tag/Algorithm-Versions) for additional details.

After successful algorithm build a new version will be created, if it was the first build then the new version will automatically will be activated for this algorithm. the next builds will also create new versions but you will need to manually choose which version you want to apply.

## Pipelines
