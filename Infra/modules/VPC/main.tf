resource "aws_vpc" "teamE_vpc" {
  cidr_block = var.vpc_cidr
  tags = {
    Name = "${var.name}-${var.profile}-vpc"
  }
}

resource "aws_subnet" "public" {
  vpc_id            = aws_vpc.teamE_vpc.id
  cidr_block        = var.pub_sub_cidr
  availability_zone = var.availability_zones

  tags = {
    Name = "${var.name}-${var.profile}-public"
  }
}

resource "aws_subnet" "private" {
  vpc_id            = aws_vpc.teamE_vpc.id
  cidr_block        = var.pri_sub_cidr
  availability_zone = var.availability_zones

  tags = {
    Name = "${var.name}-${var.profile}-private"
  }
}

resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.teamE_vpc.id
  tags = {
    Name = "${var.name}-${var.profile}-igw"
  }
}

resource "aws_default_route_table" "public" {
  default_route_table_id = aws_vpc.teamE_vpc.default_route_table_id
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.igw.id
  }
  tags = {
    Name = "${var.name}-${var.profile}-rt-pub"
  }
}

resource "aws_route_table" "private" {
  vpc_id = aws_vpc.teamE_vpc.id
  tags = {
    Name = "${var.name}-${var.profile}-rt-pri"
  }
}

resource "aws_route_table_association" "public" {
  subnet_id = aws_subnet.public.id
  route_table_id = aws_default_route_table.public.id
}

resource "aws_route_table_association" "private" {
  subnet_id = aws_subnet.private.id
  route_table_id = aws_route_table.private.id
}