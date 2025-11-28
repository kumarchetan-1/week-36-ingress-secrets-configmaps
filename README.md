```bash
kubectl logs -f <podName>
kubectl describe pod <podName>
```

[NGINX ingress controller consolidated file](https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.12.1/deploy/static/provider/cloud/deploy.yaml)

```bash
sudo vi /etc/hosts 
```
map your ip to custom domains such as google.com

# Kubernetes — Secrets, ConfigMaps & Ingress  
This repository contains examples and manifests for **Kubernetes Secrets**, **ConfigMaps**, and **Ingress** setup. Use the commands below for debugging, applying manifests, and validating configurations.

---

## 🗂️ Applying Manifests  
Apply all YAML files:
```bash
kubectl apply -f .
```

Apply specific files:
```bash
kubectl apply -f manifest1.yaml
kubectl apply -f manifest2.yaml
kubectl apply -f ingress.yaml
```

---

## 🔍 Useful Debugging Commands

### View Logs of a Pod  
```bash
kubectl logs -f <podName>
```

### Describe a Pod  
```bash
kubectl describe pod <podName>
```

### Get Resources  
```bash
kubectl get pods
kubectl get secret
kubectl get configmap
kubectl get ingress
kubectl get svc
```

### Delete Specific Resource  
```bash
kubectl delete -f manifest1.yaml
kubectl delete -f manifest2.yaml
kubectl delete -f ingress.yaml
```

---

## 🔐 Working With Secrets

### Create Secret from Literal  
```bash
kubectl create secret generic my-secret \
  --from-literal=username=admin \
  --from-literal=password=pass123
```

### Create Secret from File  
```bash
kubectl create secret generic my-secret --from-file=./creds.txt
```

### Decode Secret  
```bash
kubectl get secret my-secret -o jsonpath='{.data.password}' | base64 --decode
```

---

## ⚙️ Working With ConfigMaps

### Create ConfigMap from Literal  
```bash
kubectl create configmap app-config \
  --from-literal=APP_ENV=dev \
  --from-literal=APP_VERSION=1.0
```

### Create ConfigMap from File  
```bash
kubectl create configmap app-config --from-file=app.properties
```

### Describe ConfigMap  
```bash
kubectl describe configmap app-config
```

---

## 🌐 Ingress Setup

### Apply NGINX Ingress Controller  
Official consolidated deploy file:  
https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.12.1/deploy/static/provider/cloud/deploy.yaml

Apply it:
```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.12.1/deploy/static/provider/cloud/deploy.yaml
```

### Check Ingress Controller  
```bash
kubectl get pods -n ingress-nginx
kubectl get svc -n ingress-nginx
```

### Apply Your Ingress File  
```bash
kubectl apply -f ingress.yaml
```

---

## 🖥️ Host Mapping (Local Development)

Edit your `/etc/hosts` file to map custom domains to your minikube / kind cluster IP:
```bash
sudo vi /etc/hosts
```

Example:
```
127.0.0.1   example.local
127.0.0.1   api.example.local
```

---

## 🧹 Cleanup  
```bash
kubectl delete -f .
```

---"

## ✔️ Notes  
- Ensure Ingress controller is installed before applying ingress rules.  
- For kind clusters, ensure Ingress ports are mapped in your kind config file.  
- ConfigMaps store **non-sensitive** key-value data; Secrets store **sensitive** data in base64-encoded format.  

---

Happy Kubernetes-ing! 🚀