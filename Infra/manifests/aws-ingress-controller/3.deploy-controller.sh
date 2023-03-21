#!/usr/bin/env sh

helm delete aws-alb-ingress-controller -n kube-system
helm delete aws-load-balancer-controller -n kube-system
helm repo add eks https://aws.github.io/eks-charts
helm repo update

helm install aws-load-balancer-controller eks/aws-load-balancer-controller \
  -n kube-system \
  --set clusterName=teame-eks-cluster \
  --set serviceAccount.create=false \
  --set serviceAccount.name=aws-load-balancer-controller 