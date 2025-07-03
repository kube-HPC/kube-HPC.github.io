---
title: Keycloak
sidebarTitle: Keycloak
layout: ../_core/DocsLayout
category: Learn
permalink: /learn/keycloak/
# sublinks: Introduction, NGINX Config for Keycloak, Default Configuration, Administration UI
next: /learn/installCLI/
---

## Introduction

### What is Keycloak?
Keycloak is an open-source identity and access management solution. It provides login, single sign-on (SSO), user management, and role-based access control (RBAC) for applications.  
HKube uses Keycloak to manage authentication and authorization across its components.  
Below is the login screen used in the HKube platform:  
[Insert screenshot of your HKube Keycloak login screen here]

---

## NGINX Config for Keycloak

### Patch Ingress Config

To allow large headers required by Keycloak, the NGINX ingress controller must be patched. Run the following commands:  

<pre class="bash" id="patchIngress">
kubectl patch configmap ingress-nginx-controller -n ingress-nginx \
  --type merge \
  -p '{"data": {
    "large-client-header-buffers": "4 128k",
    "proxy-buffer-size": "128k",
    "proxy-buffers": "4 128k",
    "proxy-busy-buffers-size": "128k"
  }}'
kubectl delete pod -n ingress-nginx -l app.kubernetes.io/component=controller <button class="copy-btn" onclick="copyToClipboard('patchIngress')">Copy</button>
</pre>

This configuration allows NGINX to handle larger authentication headers used by Keycloak.

---

## Default Configuration

### Default Users

HKube includes several default users that are created during setup:

- `guest / guestPassword` — member of `hkube-guests`
- `viewer / viewerPassword` — member of `hkube-viewers`
- `developer / developerPassword` — member of `hkube-developers`

These users are part of predefined Keycloak groups that control their access within the system.

### Groups

User permissions are assigned via groups:

- **hkube-developers** – Full access: delete, edit, view, and execute
- **hkube-viewers** – Can view and edit
- **hkube-guests** – View-only access

> Note: Group membership maps users to specific roles in the `api-server` client.

### Roles

Roles define the actual permissions enforced by HKube’s backend. These are client roles defined under the `api-server` Keycloak client:

- `hkube_api_delete` – Allows deletion of HKube objects
- `hkube_api_edit` – Allows editing of HKube objects
- `hkube_api_view` – Allows viewing of HKube objects
- `hkube_api_execute` – Allows execution of HKube objects

---

## Administration UI

### Keycloak Admin Console

To manage users, groups, clients, and roles, access the Keycloak Admin Console.

- **URL:** `https://<your_domain>/hkube/keycloak/` - for example with Minikube: `https://192.168.49.2/hkube/keycloak/`
- **Username:** `admin`
- **Password:** `admin`

> These are default credentials and should be changed in production environments to avoid security risks.

---

## Summary of Permissions in HKube

HKube uses Keycloak roles and groups to manage access:

| Group            | Permissions                                      |
|------------------|--------------------------------------------------|
| hkube-developers | view, edit, delete, execute                      |
| hkube-viewers    | view, edit                                       |
| hkube-guests     | view only                                        |

<p>&nbsp;</p>

| Role                | Description                          |
|---------------------|--------------------------------------|
| hkube_api_view      | Can view pipelines and algorithms    |
| hkube_api_edit      | Can modify pipelines and algorithms  |
| hkube_api_delete    | Can delete pipelines and algorithms  |
| hkube_api_execute   | Can run pipelines                    |

These roles are mapped to users through their group memberships in Keycloak.

<script>
  function copyToClipboard(elementId) {
    const codeBlock = document.getElementById(elementId);
    const button = codeBlock.querySelector('.copy-btn');

    const text = Array.from(codeBlock.childNodes)
      .filter(node => node.nodeType === Node.TEXT_NODE || node.tagName !== 'BUTTON')
      .map(node => node.textContent)
      .join('')
      .trim();

    navigator.clipboard.writeText(text).then(() => {
      const original = button.textContent;
      button.textContent = 'Copied!';
      setTimeout(() => { button.textContent = original; }, 500);
    }).catch((err) => {
      console.error('Copy failed', err);
    });
  }
</script>
