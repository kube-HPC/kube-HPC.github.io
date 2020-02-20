## HKube over OpenShift
### general setup
- set env for username (developer in this example)  
```export USERNAME=developer```
- create a project for hkube (hkube in this example)  
```export NAMESPACE=hkube```
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
oc create role hkube-installer-role --verb=create,get,list,watch,update,patch,delete,deletecollection --resource=etcdclusters.etcd.database.coreos.com,events -n $NAMESPACE
oc adm policy add-role-to-user hkube-installer-role $USERNAME --role-namespace=$NAMESPACE -n $NAMESPACE
oc adm policy add-role-to-user hkube-installer-role "system:serviceaccount:${NAMESPACE}:tiller" --role-namespace=$NAMESPACE -n $NAMESPACE
```
### Install HKube
```console
helm install --name hkube -f my-values.yaml hkube/hkube
```
