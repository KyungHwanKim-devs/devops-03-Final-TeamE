variable "vpc_cidr" {
  description = "Set VPC CIDR"
  type        = string
}

variable "availability_zones" {
  description = "ap-northeast-2, Seoul"
  type        = string
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
  type        = string
}

variable "pri_sub_cidr" {
  description = "Set Private Subnet CIDR"
  type        = string
}

variable "myip" {
  description = "My IP Address"
  type                = string
}
