variable "vpc_cidr" {
  description = "Set VPC CIDR"
  type        = string
  default = "10.10.0.0/16"
}

variable "availability_zones" {
  description = "ap-northeast-2, Seoul"
  type        = list
  default = ["ap-northeast-2a", "ap-northeast-2b", "ap-northeast-2c", "ap-northeast-2d"]
}

variable "name" {
  description = "TeamE"
  type        = string
}

variable "profile" {
  description = "Seperate dev, stg, prd"
  type        = string
}

variable "pub_sub_cidr" {
  description = "Set Public Subnet CIDR"
  type        = list
  default = ["10.10.10.0/24", "10.10.11.0/24", "10.10.12.0/24", "10.10.13.0/24"]
}

variable "pri_sub_cidr" {
  description = "Set Private Subnet CIDR"
  type        = list
  default = ["10.10.20.0/24", "10.10.21.0/24", "10.10.22.0/24", "10.10.23.0/24"]
}

variable "myip" {
  description = "My IP Address"
  type                = string
}
