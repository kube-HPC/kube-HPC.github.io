---
title: Install HKube CLI
sidebarTitle: Install HKube CLI
layout: ../_core/DocsLayout
category: Learn
permalink: /learn/installCLI/
sublinks: Overview, Setup
next: /learn/algorithms/
---

## Overview
`hkubectl` is the HKube command-line tool used for managing and interacting with pipelines, algorithms, and configurations in your Kubernetes cluster.  
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
  && sudo mv hkubectl /usr/local/bin/<button id="copyBtn" onclick="copyToClipboard('bashCode')" class="copy-btn">Copy</button>
</pre>

<p>For <strong>Windows</strong>, download <code>hkubectl-win.exe</code> from   <a id="windowsLink" href="https://hkube-domain.com/hkubectl_files/hkubectl-win.exe">here</a>.</p>


---

### Step 2: Configure HKube
1. **Set the HKube API endpoint:**
```bash
hkubectl config set endpoint <domain>
```
> Replace <domain> with the domain in your URL when accessing HKube.
2. **Handle self-signed certificates (if applicable):**
```bash
hkubectl config set rejectUnauthorized false
```
3. **Login to your HKube user:**
```bash
hkubectl config set username <your_username>
hkubectl config set password <your_password>
```
4. **Verify hkubectl configuration:** Ensure hkubectl is correctly configured and connected to your cluster by running for example:
```bash
hkubectl algorithm list
```

---

> **Note:**  
> HKube requires certain pods to run with privileged security permissions.  
> Consult your Kubernetes installation documentation for guidance.

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var fullUrl = window.location.href;
    var learnIndex = fullUrl.indexOf('/learn');
    var serverUrl = learnIndex !== -1 ? fullUrl.substring(0, learnIndex) : window.location.origin;

    var bashCodeElement = document.getElementById('bashCode');
    if (bashCodeElement) {
      var updatedCode = bashCodeElement.innerHTML.replace(/hkube-domain\.com/g, serverUrl);
      bashCodeElement.innerHTML = updatedCode;
    }

    var windowsLink = document.getElementById('windowsLink');
    if (windowsLink) {
      windowsLink.href = windowsLink.href.replace(/^https?:\/\/hkube-domain\.com/, serverUrl);
    }
  });
</script>



<script>
  function copyToClipboard(elementId) {
    var code = document.getElementById(elementId);
    var copyButton = document.getElementById("copyBtn");

    copyButton.textContent = "";

    var range = document.createRange();
    range.selectNode(code);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
      document.execCommand("copy");
      copyButton.textContent = "Copied!";

      setTimeout(function() {
        copyButton.textContent = "Copy";
      }, 300);

    } catch (err) {
      copyButton.textContent = "Copy";
      console.error("Unable to copy code", err);
    }
    window.getSelection().removeAllRanges();
  }
</script>