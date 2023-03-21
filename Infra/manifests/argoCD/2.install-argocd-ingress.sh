#!/usr/bin/env sh

kubectl apply -n argocd -f ./ingressForArgoCD.yaml
kubectl patch svc argocd-server -n argocd -p '{"spec": {"type": "LoadBalancer"}}'