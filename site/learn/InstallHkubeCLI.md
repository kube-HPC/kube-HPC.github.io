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

Download `hkubectl` [latest version](https://github.com/kube-HPC/hkubectl/releases):

```bash
# Check release page for latest version
export os="linux" # or macos
export latestVersion="$(curl -s https://api.github.com/repos/kube-HPC/hkubectl/releases/latest | grep -oP '"tag_name": "\K(.*)(?=")')"
curl -Lo hkubectl https://github.com/kube-HPC/hkubectl/releases/download/${latestVersion}/hkubectl-${os} \
&& chmod +x hkubectl \
&& sudo mv hkubectl /usr/local/bin/
```

> For mac change os to macos.  
> For Windows download hkubectl-win.exe.  
> Or, download the files manually (note - make them executable & move to /usr/local/bin/ folder, as explained above):
>
<div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
    <a href="/hkubectl_files/hkubectl-macos" download>
        <button class="download-btn">
        Download for macOS
        </button>
    </a>
    <a href="/hkubectl_files/hkubectl-win.exe" download>
        <button class="download-btn">
        Download for Windows
        </button>
    </a>
    <a href="/hkubectl_files/hkubectl-linux" download>
        <button class="download-btn">
        Download Linux Version
        </button>
    </a>
</div>

<style>
  .download-btn {
    background-color: orange;
    padding: 15px 30px;
    color: white;
    border: none;
    font-size: 16px;
    font-weight: bold;
  }
</style>

Config `hkubectl` with your running Kubernetes.

```bash
# Config
hkubectl config set endpoint ${KUBERNETES-MASTER-IP}

hkubectl config set rejectUnauthorized false
```

> Make sure `kubectl` is configured to your cluster.
>
> HKube requires that certain pods will run in privileged security permissions, consult your Kubernetes installation to see how it's done.