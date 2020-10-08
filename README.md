# learnk8s

学习 kuberbetes in action 笔记

# 在 windows 下使用 kubectl 十分简单

## 国内配置代理即可

在 docker setting 中配置 proxy

并勾选 Enable Kubernetes
Start a Kubernetes single-node cluster when starting Docker Desktop.

耐心等待即可，开启单节点，kubectl

查看 k8s 集群信息

```bash
PS C:\Users\lmk> kubectl cluster-info
Kubernetes master is running at https://kubernetes.docker.internal:6443
KubeDNS is running at https://kubernetes.docker.internal:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy

To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.

```

查看可用节点

```bash
PS C:\Users\lmk> kubectl get node
NAME             STATUS   ROLES    AGE     VERSION
docker-desktop   Ready    master   3m59s   v1.18.8
```

##
