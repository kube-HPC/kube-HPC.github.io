---
title: Versions
layout: ../_core/DocsLayout
category: Learn
permalink: /learn/versions/
next: /learn/pipelines/
---

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
> using force: true will cause a pipeline failure since Hkube need to shut down the running instances

see [versions](/spec/#tag/Versions) for more details.

After successful algorithm build a new version will be created, if it was the first build then the new version will automatically will be activated for this algorithm. the next builds will also create new versions but you will need to manually choose which version you want to apply.


