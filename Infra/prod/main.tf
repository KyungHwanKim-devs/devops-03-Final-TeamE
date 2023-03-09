terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "4.57.1"
    }
  }
}

provider "aws" {
  # Configuration options
  region = "ap-northeast-2"
}

module "vpc" {
  source = "../modules/VPC"

  myip               = "0.0.0.0/0"
  name               = "Team-E"
  profile            = "prod"
}