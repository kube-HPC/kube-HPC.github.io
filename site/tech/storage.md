---
title: Tech
sidebarTitle: Tech
layout: ../_core/DocsLayout
category: Tech
sublinks: Storage, Logging, Tracing, Monitoring
permalink: /tech/
next: /tech/dashboard/
---

## Storage

Hkube support built-in storage options:

- S3 - Amazon object storage (default)
- FS - Files system
- Redis - in-memory data structure store.
- Etcd - key value store.
- Custom - write your own, PR are welcomed

## Logging

When your algorithm write logs to the stdout/stderr, Hkube will automatically collect these logs, add metadata and write these logs in a JSON format. You don't need to implement any special logger in your algorithm. If you want to write custom JSON with your specific fields....

```json
{
  "stream": "stdout",
  "log": "This is to let you now we are connected",
  "type": "connected",
  "extra": {
    "foo": "bar"
  }
}
```

The cluster-level logging is outside the scope of Hkube. However, you can implement
[Logging](https://kubernetes.io/docs/tasks/debug-application-cluster/logging-elasticsearch-kibana/) Using Elasticsearch and Kibana. Hkube add metadata to logs, so you can filter the field `meta.internal.algorithmName`.

You can import our [Kibana dashboard](https://github.com/kube-HPC/deploy-cluster/blob/master/deployments/logging/kibana-dashboards/kibana-dashboard.json) in this link.

## Tracing

Hkube push by default [traces](https://opentracing.io/) to [Jaeger](https://www.jaegertracing.io/), using the opentracing. these traces are used by our [dashboard](../tech/dashboard/)

## Monitoring

Hkube collect internal metrics, if [prometheus](https://prometheus.io/) is installed in your cluster, you can use [grafana](https://grafana.com/) to monitor your algorithms in the cluster.

You can import our [Grafana dashboard](https://github.com/kube-HPC/deploy-cluster/tree/master/deployments/monitoring/dashboards) in this link.
