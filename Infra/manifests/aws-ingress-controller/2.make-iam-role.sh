#!/usr/bin/env sh
eksctl create iamserviceaccount \
  --cluster=teame-eks-cluster \
  --namespace=kube-system \
  --name=aws-load-balancer-controller \
  --role-name AmazonEKSLoadBalancerControllerRole \
  --attach-policy-arn=arn:aws:iam::594311320189:policy/AWSLoadBalancerControllerIAMPolicy \
  --approve