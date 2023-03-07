resource "aws_vpc" "teamE_vpc" {
  cidr_block = var.vpc_cidr
  tags = {
    Name = "${var.name}-${var.profile}-vpc"
  }
}

resource "aws_subnet" "public" {
  count             = length(var.pub_sub_cidr)
  vpc_id            = aws_vpc.teamE_vpc.id
  cidr_block        = var.pub_sub_cidr[count.index]
  availability_zone = var.availability_zones[count.index]

  tags = {
    Name = "${var.name}-${var.profile}-public"
  }
}

resource "aws_subnet" "private" {
  count             = length(var.pri_sub_cidr)
  vpc_id            = aws_vpc.teamE_vpc.id
  cidr_block        = var.pri_sub_cidr[count.index]
  availability_zone = var.availability_zones[count.index]

  tags = {
    Name = "${var.name}-${var.profile}-private"
  }
}