---
title: KAI Integration
sidebarTitle: KAI Integration
layout: ../_core/DocsLayout
category: Learn
sublinks: Configuration, Example
permalink: /learn/kai/
next: /learn/codeapi/
---

The **KAI Scheduler** lets you control how your algorithms use resources.  
It allows assigning algorithms to queues, limiting memory, and sharing GPUs between multiple algorithms to improve efficiency.

## What is KAI Scheduler?

**KAI Scheduler** is a Kubernetes component that manages how workloads are scheduled.  
It supports advanced features like GPU sharing (using fractions of a GPU) and queue prioritization — allowing multiple algorithms to use the same GPU efficiently.

You can find the KAI Scheduler source code and installation guide [here](https://github.com/NVIDIA/KAI-Scheduler).

> **Important:**  
> To use this feature, the KAI Scheduler **must be installed and configured** in your cluster.  
> It requires **Kubernetes version 1.24.x or higher**.  
> Make sure all **prerequisites** mentioned in the [KAI GitHub repository](https://github.com/NVIDIA/KAI-Scheduler) are met before enabling this integration.

---

## Configuration

KAI-related settings are defined in the `kaiObject` section inside your algorithm specification.  
This section allows you to control how the algorithm interacts with the scheduler, including queue assignment, memory allocation, and GPU fraction usage.

**Example of `kaiObject` configuration:**

```json
{
  "kaiObject": {
    "queue": "gpu-queue",
    "memory": "512Mi",
    "fraction": 0.5
  }
}
```

### **Properties**

| Field        | Type   | Description                                                | Required  |
| :----------- | :----- | :--------------------------------------------------------- | :-------  |
| **queue**    | string | Name of the KAI queue to assign the algorithm to.          | ✅ Yes    |
| **memory**   | string | Memory limit for the algorithm (e.g., `"512Mi"`, `"1Gi"`). | ❌ No     |
| **fraction** | number | Fraction of GPU usage (e.g., `0.5` for 50% GPU).           | ❌ No     |

---

## Example

Below is a minimal algorithm configuration that includes `kaiObject`:

```json
{
  "name": "gpu-fraction-algorithm",
  "algorithmImage": "docker.io/hkubedevtest/my-gpu-algo:latest",
  "cpu": 0.5,
  "mem": "512Mi",
  "gpu": 1,
  "kaiObject": {
    "queue": "gpu-queue",
    "memory": "512Mi",
    "fraction": 0.5
  }
}
```

In this example:

* The algorithm requests **one GPU** but sets a **fraction of 0.5**, allowing the GPU to be shared between two algorithms.  
* The **queue** defines which KAI-managed queue handles this algorithm.  
* The **memory** value specifies an optional memory limit.

---
