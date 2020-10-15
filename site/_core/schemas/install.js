import React from 'react';
import Prism from '../Prism';

const items = [
    {
        name: 'Linux',
        content: <Prism language="bash">
            {`
minikube start --driver docker --insecure-registry="minikube:5000"
minikube addons enable storage-provisioner
minikube addons enable ingress
minikube addons enable registry
# verify that all pods are running
pods -A
    `}
        </Prism>
    },
    {
        name: 'Windows',
        content: <Prism language="shell">
            {`
minikube start --driver hyperv --cpus 4 --memory 6GB --insecure-registry="minikube:5000"
minikube addons enable storage-provisioner
minikube addons enable ingress
minikube addons enable registry
    `}
        </Prism>
    },
    {
        name: 'MacOS',
        content: <Prism language="shell">
            {`
minikube start --cpus 4 --memory 6GB --insecure-registry="minikube:5000"
minikube addons enable storage-provisioner
minikube addons enable ingress
minikube addons enable registry
    `}
        </Prism>
    },
];

module.exports = items;
