import React from 'react';
import Prism from '../Prism';

const items = [
    {
        name: 'Linux',
        content: <Prism language="bash">
            {`
minikube start --driver docker --addons ingress --addons registry \\
  --addons registry-aliases --addons storage-provisioner
# verify that all pods are running
kubectl get pods -A
    `}
        </Prism>
    },
    {
        name: 'Windows',
        content: <Prism language="shell">
            {`
minikube start --driver hyperv --cpus 4 --memory 6GB --addons ingress --addons registry --addons registry-aliases --addons storage-provisioner
kubectl get pods -A
    `}
        </Prism>
    },
    {
        name: 'MacOS',
        content: <Prism language="shell">
            {`
minikube start --cpus 4 --memory 6GB \\
  --addons ingress --addons registry --addons registry-aliases --addons storage-provisioner
kubectl get pods -A
    `}
        </Prism>
    },
];

module.exports = items;
