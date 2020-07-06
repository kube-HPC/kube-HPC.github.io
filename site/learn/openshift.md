---
title: Openshift Install
sidebarTitle: Install Hkube
layout: ../_core/DocsLayout
category: Learn
permalink: /learn/install/openshift
sublinks: Prerequisites
next: /learn/api/
---

## HKube over OpenShift
These instructions has been tested with Openshift 4.4 and 3.11  
Tested with HKube version **1.2.189**. For versions prior to that see [old instructions](./before_v1.2.189)  
The openshift cluster need to support dynamic storage provisioning

### pre-reqs
These instructions are for helm v3.  
1. add hkube helm repo
```console
helm repo add hkube http://hkube.io/helm/
```
2. set env for username (developer in this example)  
```export USERNAME=developer```
3. create a project for hkube (hkube in this example)  
```export NAMESPACE=hkube```  

### setup required prerequisites as admin
```console
# add role for needed permissions and bind it to the user 
oc create clusterrole hkube-installer-role \
--verb=create,get,list,watch,update,patch,delete,deletecollection \
--resource=events,ingresses.extensions,ingresses.networking.k8s.io,ingresses.extensions/status,ingresses.networking.k8s.io/status
oc adm policy add-role-to-user hkube-installer-role $USERNAME -n $NAMESPACE
```
note: if kubernetes version < 1.14 remove `ingresses.networking.k8s.io` from above command
### Install nginx ingress controller
Installing nginx-ingress-controller in openshift without admin requires a few prelimiary steps  

1. create a pvc named ```nginx-pvc-tmp``` in the openshift console. any size will do
2. Create nginx-values.yaml
Note that the userUd value needs to match the valid UID in your project. Get the valid UID:  
```console
export VALID_UID=$(oc get project ${NAMESPACE} -o yaml |grep "openshift.io/sa.scc.uid-range:" | awk -F:  '{print $2}' | awk -F/ '{print $1}')
echo $VALID_UID
```

```console
cat <<EOF >nginx-values.yaml
controller:
  image:
    repository: quay.io/kubernetes-ingress-controller/nginx-ingress-controller
    pullPolicy: IfNotPresent
    runAsUser: $VALID_UID
    allowPrivilegeEscalation: false
  containerPort:
    http: 8080
    https: 6443    
  service:
    ports:
      http: 8080
      https: 6443
    type: ClusterIP  
  extraArgs: 
    http-port: 8080
    https-port: 6443
  extraVolumeMounts: 
  # Additional volumeMounts to the controller main container.
    - name: ssl
      mountPath: /etc/ingress-controller/ssl
    - name: nginx
      mountPath: /etc/nginx/opentracing.json
      subPath: opentracing.json
    - name: nginx
      mountPath: /etc/nginx/nginx.conf
      subPath: nginx.conf
    - name: nginx
      mountPath: /tmp
  extraVolumes: 
  # Additional volumes to the controller pod.
    - name: ssl
      emptyDir: {}    
    - name: nginx
      persistentVolumeClaim:
        claimName: nginx-pvc-tmp
  extraInitContainers: 
  # Containers, which are run before the app containers are started.
    - name: init-mount
      image: busybox
      command: ['sh', '-c', 'echo {} >/tmp/nginx/opentracing.json; touch /tmp/nginx/nginx.conf']
      volumeMounts:
        - name: nginx
          mountPath: /tmp/nginx
  scope:
    enabled: true
defaultBackend:
  image:
    runAsUser: $VALID_UID
  service:
    servicePort: 8080 
EOF
```
3. install nginx

```console
helm install nginx -f ./nginx-values.yaml hkube/nginx-ingress
```
4. create a route for the nginx service (nginx-nginx-ingress-controller)

### Install HKube

1. create values file for install
Create some environment variables with user data
```console
export DOCKER_USERNAME=docker_username
export DOCKER_PASSWORD=docker_password
```

```console
cat <<EOF >hkube-values.yaml
env:
  default_storage: 'fs'
global:
  production: true
  ingress_controller_enable: false
  k8senv: openshift
  namespaced: true
  isPrivileged: false
  clusterName: cluster.local
  # registry: docker.io/
  registry: ""
  storage:
    binary: true
    fs:
      pvc: 
         name: 'hkube-storage'
         capacity: '50Gi'
         storage_class: ''
      base_directory: '/hkubedata'
  ingress:
    use_regex: true
    requireTls: false
build_secret:
  docker_registry: ''
  docker_namespace: ''
  docker_username: $DOCKER_USERNAME
  docker_password: $DOCKER_PASSWORD
etcd:
  persistentVolume:
    storageClass: ''
minio:
  enable: false
algorithm_operator:
  build_mode: openshift
# needed for single node (testing) 
#thirdparty:
#  redis-ha:
#    hardAntiAffinity: false
EOF
```

2. install hkube

```console
helm install hkube -f hkube-values.yaml hkube/hkube
```

> note: there is an issue with jaeger tracing on openshift. Currently it will not work
