---
title: Install Hkube CLI
sidebarTitle: Install Hkube CLI
layout: ../_core/DocsLayout
category: Learn
permalink: /learn/installCLI/
sublinks: Overview, Setup
next: /learn/api/
---

## Overview
`hkubectl` is the Hkube command-line tool used for managing and interacting with pipelines, algorithms, and configurations in your Kubernetes cluster.  
It supports various commands to streamline the development and deployment of workflows.

---

### Command Syntax
```bash
hkubectl [type] [command] [name]
```
**Getting Help**
To see the full list of available commands, run:
```bash
hkubectl --help
```

## Setup
### Step 1: Download and Install hkubectl
**1. Set your operating system:**
```bash
export os="linux" # or macos
```
**2. Download and install:**
<pre class="bash" id="bashCode">
  curl -Lo hkubectl hkube-domain.com/hkubectl_files/hkubectl-${os} \
  && chmod +x hkubectl \
  && sudo mv hkubectl /usr/local/bin/
<button id="copyBtn" onclick="copyToClipboard('bashCode')" class="copy-btn">Copy</button>
</pre>

<p>For <strong>Windows</strong>, download <code>hkubectl-win.exe</code> from <a id="windowsLink" href="/hkubectl_files/hkubectl-win.exe">here</a>.</p>


---

### Step 2: Configure Hkube
1. **Set the Hkube API endpoint:**
```bash
hkubectl config set endpoint ${KUBERNETES-MASTER-IP}
```
2. **Handle self-signed certificates (if applicable):**
```bash
hkubectl config set rejectUnauthorized false
```
3. **Verify Kubernetes configuration:** Ensure kubectl is correctly configured to connect to your cluster:
```bash
kubectl get nodes
```

---

> **Note:**  
> Hkube requires certain pods to run with privileged security permissions.  
> Consult your Kubernetes installation documentation for guidance.

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var serverUrl = window.location.origin;

    var bashCodeElement = document.getElementById('bashCode');

    if (bashCodeElement) {
      var updatedCode = bashCodeElement.innerHTML.replace(/hkube-domain.com/g, serverUrl);
      bashCodeElement.innerHTML = updatedCode;
    }
  });
</script>


<script>
  function copyToClipboard(elementId) {
    var code = document.getElementById(elementId);
    var range = document.createRange();
    range.selectNode(code);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
      document.execCommand("copy");
              var copyButton = document.getElementById("copyBtn");
        copyButton.textContent = "Copied!";

        setTimeout(function() {
          copyButton.textContent = "Copy";
        }, 300);
    } catch (err) {
      console.error("Unable to copy code", err);
    }

    window.getSelection().removeAllRanges();
  }
</script>