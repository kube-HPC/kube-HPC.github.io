---
title: Sidecars
sidebarTitle: Sidecars
layout: ../_core/DocsLayout
category: Learn
sublinks: Container Configuration, Volumes Usage, Environment Variables, Common Errors, Multiple Sidecars
permalink: /learn/sidecars/
# next: /learn/codeapi/
next: /learn/debug/
---

In HKube, sidecars are additional containers that can be added to an algorithm's pod to perform supplementary tasks alongside the main algorithm container. Sidecars are a powerful way to extend the functionality of your algorithm, such as logging, monitoring, or handling auxiliary tasks.

## What is a Sidecar?

A **sidecar** is a container that runs alongside the main container (the algorunner container) in a Kubernetes pod. Sidecars help with tasks such as logging, monitoring, and other auxiliary functions that support the main algorithm.

In HKube, sidecars are defined under the `sideCars` section in the algorithm configuration.

Below is an example of a complete sidecar configuration:
```json
{
  "sideCars": [
    {
      "container": {
        "name": "mycar",
        "image": "httpd",
        "resources": {
          "requests": {
            "cpu": "500m",
            "memory": "256Mi"
          },
          "limits": {
            "cpu": "1",
            "memory": "512Mi"
          }
        }
      },
      "volumeMounts": [
        {
          "name": "shared-volume",
          "mountPath": "/shared-dir"
        }
      ],
      "environments": {
        "env1": "val1"
      }
    }
  ]
}
```

## Container Configuration

To configure a sidecar container in HKube, you must define the container settings in json format. In addition to essential fields like `image` and `name`, you can specify various options related to Kubernetes containers, such as resource limits and environment variables.

You can find all possible container configuration fields by running:
```bash
kubectl explain pod.spec.containers
```
Or refer to the official Kubernetes documentation: [Kubernetes Container Reference](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#Container).

Below is an example of a sidecar container configuration, with resources:
```json
{
  "sideCars": [
    {
      "container": {
        "name": "mycar",
        "image": "httpd",
        "resources": {
          "requests": {
            "cpu": "500m",
            "memory": "256Mi"
          },
          "limits": {
            "cpu": "1",
            "memory": "512Mi"
          }
        }
      }
    }
  ]
}
```
> **Note:** Resources are not mandatory and will default to a preset value if not provided. You can change the default values by modifying `config.resources`.

## Volumes Usage
Sidecars can mount volumes for shared storage. In HKube, `volumes` are defined in the volumes section at the algorithm level, and mounted using `volumeMounts` in the sidecar or algorithm (for algorunner) level.

**Example:**
```json
{
  "name": "algo-car-with-volume-mount",
  "algorithmImage": "docker.io/hkubedevtest/print-every-10-sec:v4o4c4xne",
  "volumes": [
    {
      "name": "shared-volume",
      "emptyDir": {}
    }
  ],
  "volumeMounts": [
    {
      "name": "shared-volume",
      "mountPath": "/shared-dir"
    }
  ],
  "sideCars": [
    {
      "container": {
        "name": "mycar",
        "image": "httpd"
      },
      "volumeMounts": [
        {
          "name": "shared-volume",
          "mountPath": "/shared-dir"
        }
      ]
    }
  ]
}

```

## Environment Variables
You can define environment variables for your sidecar container, just like in the main container. These environment variables can be accessed by your sidecar's application code.

**Example:**
```json
{
  "sideCars": [
    {
      "container": {
        "name": "mycar",
        "image": "httpd"
      },
      "environments": {
        "env1": "val1"
      }
    }
  ]
}
```

## Common Errors
When using sidecars, you may encounter some common errors. Below are a few examples:

* **Wrong Image:** The specified image might not be found.
* **Failing on Sidecar Startup:** This could happen due to incorrect configurations or missing dependencies.
* **Insufficient Resources:** If the resource requests or limits are too high, the pod might fail to schedule.

When an error occurs, it will be displayed in the job logs in the UI.

## Multiple Sidecars
In HKube, you can define multiple sidecars in your algorithm’s specification. The `sideCars` section is an array, meaning you can add multiple sidecar elements, each as an individual object within the array.

**Important:** Each sidecar container must have a **unique container name**. This ensures that the sidecars are properly recognized and there are no conflicts between them.

**Example:**
```json
{
  "sideCars": [
    {
      "container": {
        "name": "mycar1",
        "image": "nginx"
      }
    },
    {
      "container": {
        "name": "mycar2",
        "image": "redis"
      }
    },
    {
      "container": {
        "name": "mycar3",
        "image": "httpd"
      }
    }
  ]
}
```
In this example:

* The first sidecar has the container name `mycar1` with the `nginx` image.
* The second sidecar has the container name `mycar2` with the `redis` image.
* The third sidecar has the container name `mycar3` with the `httpd` image.

Each sidecar container in the array has a unique name, as required.

By using multiple sidecars, you can integrate additional functionality (e.g., monitoring, logging, or auxiliary services) with your algorithm, all while keeping the containers isolated and uniquely identifiable.