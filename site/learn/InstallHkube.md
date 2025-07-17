---
title: Install HKube
sidebarTitle: Install HKube
layout: ../_core/DocsLayout
category: Learn
permalink: /learn/install/
sublinks: Prerequisites, Minikube Installation, Production Deployment
next: /learn/api/
---

## Prerequisites

---

- HKube requires a working Kubernetes cluster.
- You can use local Kubernetes like [Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/) or [microk8s](https://microk8s.io/).
- HKube is installed using Helm. Both Helm 2 and the newer [Helm 3](https://helm.sh/docs/intro/install/) should work.
- `kubectl` must be configured to your Kubernetes cluster.
- HKube needs certain pods to run with privileged permissions for logs and builds; consult your Kubernetes docs on how to enable that.

> These instructions assume the use [Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/) and [Helm 3](https://helm.sh/docs/intro/install/)  
> Click [here](../../learn/install/openshift/) for Openshift instructions

---

## Minikube Installation
### 1. Helm repository setup

The chart is hosted in http://hkube.org/helm/
To add the HKube Helm repo to your helm run:
<pre class="bash" id="helmRepo">
helm repo add hkube http://hkube.org/helm/
helm repo update <button class="copy-btn" onclick="copyToClipboard('helmRepo')">Copy</button>
</pre>


### 2. Set Docker Context

Make sure your Docker CLI is using the default context:

<pre class="bash" id="dockerContext">
docker context use default <button class="copy-btn" onclick="copyToClipboard('dockerContext')">Copy</button>
</pre>


This will be your output:
```console
default
Current context is now "default"
```

### 3. Start Minikube
Currently HKube requires at least 4 cpu cores and 6GB of memory, ingress controller, registry, and dynamic storage.  

HKube was tested on Kubernetes v1.23.5, so to run it properly, start Minikube with:
```hkube-tabs-with-copy
# { "hkube": true, "schema": "install" }
```


### 4. Wait for All Pods
Make sure all pods are ready before you continue:
<pre class="bash" id="getPods">
kubectl get pods -A <button class="copy-btn" onclick="copyToClipboard('getPods')">Copy</button>
</pre>


### 5. Install HKube
Install the HKube chart using Helm:
<pre class="bash" id="installHKube">
helm upgrade -i hkube hkube/hkube \
  --set build_secret.docker_registry=registry.minikube \
  --set build_secret.docker_registry_insecure=true \
  --set global.hkube_url=https://192.168.49.2/hkube \
  --set global.ingress.use_regex=true \
  --timeout 15m <button class="copy-btn" onclick="copyToClipboard('installHKube')">Copy</button>
</pre>

> <div style="font-size: 0.8em"> Note: the IP `192.168.49.2` is taken out of the command `minikube ip`.  
Verify it's your minikube IP. </div>

This command installs `hkube` in a minimal configuration for development. See below for production install.  
Be patient. This can take some time depending on your internet connection.

### 6. Verify HKube Deployment
Before starting your journey, verify that the required components have fully rolled out:
<pre class="bash" id="rolloutSimulator">
kubectl rollout status deployment/simulator --watch
kubectl rollout status deployment/api-server --watch <button class="copy-btn" onclick="copyToClipboard('rolloutSimulator')">Copy</button>
</pre>

### 7. Access HKube Dashboard
Once the components have been successfully rolled out, get the Minikube IP:
<pre class="bash" id="minikubeIp">
minikube ip <button class="copy-btn" onclick="copyToClipboard('minikubeIp')">Copy</button>
</pre>

Finally, open your browser and access the dashboard at:
```perl
https://<minikube_ip_here>/hkube/dashboard/
```

### Uninstalling HKube
To remove the HKube release from your cluster:
<pre class="bash" id="uninstallHKube">
helm delete hkube <button class="copy-btn" onclick="copyToClipboard('uninstallHKube')">Copy</button>
</pre>


### Configuration Details
The default HKube installation is meant for local development.
It includes:

- `etcd` for storing internal state
- `redis` for queues and messaging
- `minio` as an object storage
- Small configuration for `HKube`  

---

## Production Deployment
### General
1. for HA installation, a HA kubernetes cluster is needed.  
2. HKube uses needs persistent storage. The default installation uses minio hosted in the cluster. For production installations it is recommended to create a dedicated s3 server, or use a PVC.
3. to enable running multiple pipelines set the number of pipeline driver to a higher number (the default is 1)

### Configuration
Common configuration options are described below. For a complete list see the helm chart Readme

|                        Parameter                        | Description                                       |                            Default   |
|---------------------------------------------------------|---------------------------------------------------|--------------------------------------|
| global.clusterName                                      | The dns domain name of the cluster. needed for Jaeger | `cluster.local`                      |
| global.registry                                         | Docker registry for private registries            | `''`                                 |
| global.registry_namespace                               |                                                   | `hkube`                              |
| global.registry_username                                |                                                   | `''`                                 |
| global.registry_password                                |                                                   | `''`                                 |
| global.registry_insecure                                |                                                   | `false`                              |
| global.registry_skip_tls_verify                         |                                                   | `false`                              |
| global.storage.fs.pvc.storage_class                     | Dynamic storage storageClassName. Empty for default. `'-'` to disable  | `''`                                 |
| global.storage.s3.access_key                            | access key for s3                                 | `hkubeminiokey`                      |
| global.storage.s3.secret_key                            | secret key for s3                                 | `hkubeminiosecret`                   |
| global.storage.s3.url                                   | endpoint url for s3                               | `'http://hkube-minio:9000'`          |
| env.default_storage                                     | selects the storage mode [`s3` or `fs`]           | `s3`                                 |
| jaeger.enable                                           | enable install of jaeger and dependencies         | `false`                              |
| minio.enable                                            |                                                   | `true`                               |
| build_secret.docker_registry                            | Docker registry information for automated builds  | `''`                                 |
| build_secret.docker_namespace                           |                                                   | `''`                                 |
| build_secret.docker_username                            |                                                   | `''`                                 |
| build_secret.docker_password                            |                                                   | `''`                                 |
| task_executor.env.pipeline_drivers_amount               | Set to 30 for a reasonable size                   | `1`                                  |


Specify each parameter using the `--set key=value[,key=value]` argument to `helm install`. For example:

```console
helm install hkube hkube/hkube  --set global.clusterName=cluster.local
```

Alternatively, a YAML file that specifies the values for the parameters can be provided while
installing the chart. For example:

```console
helm install hkube hkube/hkube  --values values.yaml
```

<!-- ```hkube-box
# { "hkube": true, "url": "/learn", "title": "next &rarr;", "text": "Learn More" }
``` -->


<script>
  function copyToClipboard(elementId) {
    const codeBlock = document.getElementById(elementId);
    const button = codeBlock.querySelector('.copy-btn');

    const text = Array.from(codeBlock.childNodes)
      .filter(node => node.nodeType === Node.TEXT_NODE || node.tagName !== 'BUTTON')
      .map(node => node.textContent)
      .join('')
      .trim();

    navigator.clipboard.writeText(text).then(() => {
      const original = button.textContent;
      button.textContent = 'Copied!';
      setTimeout(() => { button.textContent = original; }, 500);
    }).catch((err) => {
      console.error('Copy failed', err);
    });
  }
</script>

