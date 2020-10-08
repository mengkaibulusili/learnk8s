# 下载 之前 我配置的 Git 项目

git clone git@github.com:mengkaibulusili/k8sConfigFils.git

# 进入 dashboard 中 ,创建服务

## 进入目录

cd cd .\k8sConfigFils\dashbroad

## 下载 并 创建 服务

```bash
kubectl  apply -f  recommended.yaml
```

## 删除服务

```bash
kubectl  delete -f  recommended.yaml
```

## 创建用户

```bash
kubectl  apply -f  adduser.yaml
```

## 绑定 用户和服务

```bash
kubectl  apply -f  ClusterRoleBinding.yaml
```

## 查看 token

！！！！ 记住 token

```bash
kubectl -n kubernetes-dashboard describe secret $(kubectl -n kubernetes-dashboard get secret | sls admin-user | ForEach-Object { $_ -Split '\s+' } | Select -First 1)

output：
Name:         admin-user-token-h9lvx
Namespace:    kubernetes-dashboard
Labels:       <none>
Annotations:  kubernetes.io/service-account.name: admin-user
              kubernetes.io/service-account.uid: 61e3d84e-b871-469f-abb7-b50c8a325d76

Type:  kubernetes.io/service-account-token

Data
====
token:      eyJhbGciOiJ
ca.crt:     1025 bytes
namespace:  20 bytes

```

## 启动服务

```bash
kubectl  proxy
访问 web 服务即可
```

## 访问 web

http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/

输入上一步的 token

eyJhbGciOiJSUzI1NiIsImtpZCI6IlgzQ0ZCMHZYQUtiX3VRNVFaYU1oRHJhdmxjV3RVbTZWWHJxa3pDODlRWUEifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJhZG1pbi11c2VyLXRva2VuLXd0dmdxIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6ImFkbWluLXVzZXIiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC51aWQiOiI4NDU1OGNmMy0yMzNkLTQ0NzEtOGNkMi01YTI1YmFmOTZiMjgiLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6a3ViZXJuZXRlcy1kYXNoYm9hcmQ6YWRtaW4tdXNlciJ9.urV_zTDrcfDdj5Do9_GcnymWtCukyGEHLrlkNGtDxx7gFl0_35GYrQHWI2yWFf7nV_RoE0eCULBQixaUl_POmAEX1rgZx-Q51_YEtwe6SWfXDGaOOBsWs40gHwudf2yHhQFihu5be7wWtDPI11qk7srhjX3Z5OpuV4B4ym-VXjSUFV42DCTY_Hb225A44WNrNY2MnVY-2L6VHPmL8HF5rCryHL05_5KuRmD8XOrvaKwlv4BFdVBt8ruEJB1gRzZi9mdyXl79ohYcY6945IhmiWXCHRnh4AQraUBdgjcKycR5Fpbm2eAHeyM_o22KkWMqiqs0o-asU1u62SUkBTytjQ
