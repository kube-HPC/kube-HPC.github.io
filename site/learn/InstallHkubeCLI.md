---
title: Install CLI
sidebarTitle: Install CLI
layout: ../_core/DocsLayout
category: Learn
permalink: /learn/installCLI/
sublinks: Cli, Setup
next: /learn/api/
---

## Cli

`hkubectl` is HKube command line tool.

```bash
hkubectl [type] [command] [name]

# More information
hkubectl --help
```

## Setup

Download `hkubectl` [latest version](https://github.com/kube-HPC/hkubectl/releases).

```bash
# Check release page for latest version
export latestVersion="$(curl -s https://api.github.com/repos/kube-HPC/hkubectl/releases/latest | grep -oP '"tag_name": "\K(.*)(?=")')"
curl -Lo hkubectl https://github.com/kube-HPC/hkubectl/releases/download/${latestVersion}/hkubectl-linux \
&& chmod +x hkubectl \
&& sudo mv hkubectl /usr/local/bin/
```

> For mac replace with hkubectl-macos
> For Windows download hkubectl-win.exe

Config `hkubectl` with your running Kubernetes.

```bash
# Config
hkubectl config set endpoint ${KUBERNETES-MASTER-IP}

hkubectl config set rejectUnauthorized false
```

> Make sure `kubectl` is configured to your cluster.
>
> HKube requires that certain pods will run in privileged security permissions, consult your Kubernetes installation to see how it's done.