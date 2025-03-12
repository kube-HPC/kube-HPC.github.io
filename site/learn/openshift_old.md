---
title: Openshift Install (old)
sidebarTitle: Install HKube
layout: ../_core/DocsLayout
category: Learn
permalink: /learn/install/openshift/before_v1.2.189/
sublinks: Prerequisites
next: /learn/api/
---

## HKube over OpenShift
### pre-reqs

1. add hkube helm repo

```console
helm repo add hkube http://hkube.org/helm/
```

### general setup
- set env for username (developer in this example)  
```export USERNAME=developer```
- create a project for hkube (hkube in this example)  
- create a project for tiller (tiller in this example)  
```export NAMESPACE=hkube```  
```export TILLER_NAMESPACE=tiller```  

### setup helm tiller
```console
oc process -f https://github.com/openshift/origin/raw/master/examples/helm/tiller-template.yaml -p TILLER_NAMESPACE="${TILLER_NAMESPACE}" -p HELM_VERSION=v2.14.3 | oc create -f -
oc policy add-role-to-user admin "system:serviceaccount:${TILLER_NAMESPACE}:tiller"
```

### setup required prerequisites as admin
```console
# create CRD object
cat <<EOF | kubectl apply -f -
apiVersion: "apiextensions.k8s.io/v1beta1"
kind: CustomResourceDefinition
metadata:
  name: etcdclusters.etcd.database.coreos.com
spec:
  group: etcd.database.coreos.com
  names:
    kind: EtcdCluster
    listKind: EtcdClusterList
    plural: etcdclusters
    shortNames:
    - etcd
    singular: etcdcluster
  scope: Namespaced
  version: v1beta2
EOF
# add role for needed permissions and bind it to the user 
oc create clusterrole hkube-installer-role --verb=create,get,list,watch,update,patch,delete,deletecollection --resource=etcdclusters.etcd.database.coreos.com,events,ingresses.extensions
oc adm policy add-role-to-user hkube-installer-role $USERNAME --role-namespace=$NAMESPACE -n $NAMESPACE
oc adm policy add-role-to-user hkube-installer-role "system:serviceaccount:${TILLER_NAMESPACE}:tiller" -n $TILLER_NAMESPACE
oc adm policy add-role-to-user hkube-installer-role "system:serviceaccount:${TILLER_NAMESPACE}:tiller" -n $NAMESPACE
```

### Install nginx ingress controller
Installing nginx-ingress-controller in openshift without admin requires a few prelimiary steps  

1. create a pvc named ```nginx-pvc-tmp``` in the openshift console. any size will do
2. Create nginx-values.yaml

```console
cat <<EOF >nginx-values.yaml
controller:
  image:
    repository: quay.io/kubernetes-ingress-controller/nginx-ingress-controller
    pullPolicy: IfNotPresent
    runAsUser: 1000170000
    allowPrivilegeEscalation: false
  containerPort:
    http: 8080
    https: 6443    
  service:
    ports:
      http: 8080
      https: 6443    
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
    runAsUser: 1000170000
  service:
    servicePort: 8080 
EOF
```
3. install nginx

```console
helm install --name nginx -f ./nginx-values.yaml hkube/nginx-ingress
```
4. create a route for the nginx service (nginx-nginx-ingress-controller)

### Install HKube

1. create values file for install

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
         # pv_name: pv0100
         # storage_class: ''
         # nfs_server: '172.31.20.233'
         # nfs_root: '/var/nfs/hkube'
      base_directory: '/hkubedata'
  ingress:
    use_regex: true      
build_secret:
  docker_registry: ''
  docker_namespace: ''
  docker_username: my_docker_username
  docker_password: my_docker_password
algorithm_operator:
  build_mode: openshift
# needed for single node (testing)  
#thirdparty:
#  redis-ha:
#    hardAntiAffinity: false
EOF
```

2. create pv for hkube and set the name above (or define default storage class)
3. install hkube

```console
helm install --name hkube -f hkube-values.yaml hkube/hkube
```
