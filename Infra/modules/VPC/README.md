# VPC

이 모듈은 아래 리소스들을 생성한다.

- aws_vpc
- aws_subnet (public/private)
- aws_internet_gateway
- aws_default_route_table (public)
- aws_route_table (private)

## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 0.15 |
| <a name="requirement_aws"></a> [aws](#requirement\_aws) | >= 4.23.0 |

## Providers

| Name | Version |
|------|---------|
| <a name="provider_aws"></a> [aws](#provider\_aws) | >= 4.23.0 |

## Modules

No modules.

## Resources

| Name | Type |
|------|------|
| [aws_default_route_table.public](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/default_route_table) | resource |
| [aws_internet_gateway.igw](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/internet_gateway) | resource |
| [aws_route_table.private](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route_table) | resource |
| [aws_route_table_association.private](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route_table_association) | resource |
| [aws_route_table_association.public](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route_table_association) | resource |
| [aws_subnet.private](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/subnet) | resource |
| [aws_subnet.public](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/subnet) | resource |
| [aws_vpc.teamE_vpc](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc) | resource |
| [aws_availability_zones.available](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/availability_zones) | data source |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_availability_zones"></a> [availability\_zones](#input\_availability\_zones) | ap-northeast-2, Seoul | `list` | <pre>[<br>  "ap-northeast-2a",<br>  "ap-northeast-2b",<br>  "ap-northeast-2c",<br>  "ap-northeast-2d"<br>]</pre> | no |
| <a name="input_myip"></a> [myip](#input\_myip) | My IP Address | `string` | n/a | yes |
| <a name="input_name"></a> [name](#input\_name) | TeamE | `string` | n/a | yes |
| <a name="input_pri_sub_cidr"></a> [pri\_sub\_cidr](#input\_pri\_sub\_cidr) | Set Private Subnet CIDR | `list` | <pre>[<br>  "10.10.20.0/24",<br>  "10.10.21.0/24",<br>  "10.10.22.0/24",<br>  "10.10.23.0/24"<br>]</pre> | no |
| <a name="input_profile"></a> [profile](#input\_profile) | Seperate dev, stg, prd | `string` | n/a | yes |
| <a name="input_pub_sub_cidr"></a> [pub\_sub\_cidr](#input\_pub\_sub\_cidr) | Set Public Subnet CIDR | `list` | <pre>[<br>  "10.10.10.0/24",<br>  "10.10.11.0/24",<br>  "10.10.12.0/24",<br>  "10.10.13.0/24"<br>]</pre> | no |
| <a name="input_vpc_cidr"></a> [vpc\_cidr](#input\_vpc\_cidr) | Set VPC CIDR | `string` | `"10.10.0.0/16"` | no |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_vpc_id"></a> [vpc\_id](#output\_vpc\_id) | n/a |
