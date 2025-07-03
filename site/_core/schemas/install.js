import React from 'react';
import Prism from '../Prism';

const items = [
    {
        name: 'Linux',
        content: <Prism language="bash">
{String.raw`minikube start --driver=docker \
  --addons ingress \
  --addons registry \
  --addons registry-aliases \
  --addons storage-provisioner \
  --kubernetes-version=v1.23.5`}
        </Prism>
    },
    {
        name: 'Windows',
        content: <Prism language="shell">
{String.raw`minikube start --driver=hyperv --cpus=4 --memory=6GB ^
  --addons=ingress ^
  --addons=registry ^
  --addons=registry-aliases ^
  --addons=storage-provisioner ^
  --kubernetes-version=v1.23.5
kubectl get pods -A`}
        </Prism>
    },
    {
        name: 'MacOS',
        content: <Prism language="shell">
{String.raw`minikube start --cpus=4 --memory=6GB \
  --addons=ingress \
  --addons=registry \
  --addons=registry-aliases \
  --addons=storage-provisioner \
  --kubernetes-version=v1.23.5
kubectl get pods -A`}
        </Prism>
    },
];

module.exports = items;
