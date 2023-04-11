# Codestates DOB 03 Final Project 
참여자 : 김경환, 이호진, 장정문, 정관희

기간 : 2023.3.7 ~ 2023.3.24


## 프로젝트 개요 - 글 목록, 작성, 회원가입 기능이 있는 3 tier 아키텍쳐 앱
- 글로벌 트래픽의 증가
- 트래픽 스파이크 발생
- 모니터링 시스템의 부재
- CI/CD 파이프라인의 부재

## 핵심 요구 사항
### 기능
- 회원가입을 할 수 있습니다.
- 로그인을 할 수 있습니다.
- 게시판에서 글을 읽고, 쓸 수 있습니다

### 인프라
- 모든 환경은 컨테이너 환경
- 서버 및 DB는 AZ 단위의 가용성 확보
- 모니터링 시스템 구축
- 글로벌 트래픽 및 CDN
- 네트워크 보안 및 Iac

## 전체 아키텍쳐
![team final (1)](https://user-images.githubusercontent.com/104489626/231295253-ed31de1c-3351-4f6e-9ad3-476a3994182f.jpg)

#### 1. 회원가입, 로그인, 인증
- AWS Cognito와 Amplify를 이용 프론트에서 처리

#### 2. 글을 읽고 쓸 수 있다.
- Spring, JPA를 이용 API 백언드 서버를 구축해서 글 조회, 작성 기능 구현

#### 3. 모든 환경은 컨테인너 환경
- 두 종류의 앱과(Front, Back), 모니터링, ArgoCD 등 여러 앱을 띄워야 하고 가용성과, 모니터링을 용이하게 하기위해 Kubernetes로 구현하기로 결정
- AWS의 여러 리소스를 사용 예정이라 k8s 또한 EKS를 이용

#### 4. 가용성
- 앱의 가용성을 확보하기 위해 k8s의 노드를 4개 띄워 두고, 컨트롤 플레인, 워커노드1(back, front), 워커노드2(back, front), 워커노드3(모니터링 시스템, ArgoCD)로 나눠서 배포
- 두개의 노드에 앱을 각각 배포하고, 레플리카와 HPA를 이용해서 앱의 고가용성을 확보
- DB는 AWS의 AuroraRDS MySql을 이용, 1개의 Write와 3개의 Read 인스턴스로 가용성 확보

#### 5. 글로벌 트래픽 및 CDN
- AWS CloudFront의 엣지 로케이션을 이용해 글로벌 트래픽 및 글로벌 캐싱으로 성능 향상 및 긍정적인 유저 경험 확보

#### 6. 모니터링 시스템
- prometheus-operator를 이용 k8s 환경에서 모니터링 시스템 구현

#### 7. CI/CD 구현
<img width="959" alt="스크린샷 2023-04-12 오전 6 58 09" src="https://user-images.githubusercontent.com/104489626/231297033-e27ba0a9-d15a-4ba2-b641-3e1870c2b87e.png">

### 개선할 점
- 글로벌 트래픽의 모니터링
- DB 성능(쿼리 레이턴시 등) 모니터링
- k8s의 AZ별로 노드 분배와 pod 분배의 미비
- Dev/Stage/Production 환경의 완벽한 분리
- Cognito 에서 회원가입 -> Backend에서 유저생성
- AWS Ingress Controller & ALB
- 부하 테스트의 부재
- 환경변수 노출 최소화
- 그라파나 얼럿매니져를 통한 알림
- 보안 관련 리소스 전무
- HTTPS 적용
