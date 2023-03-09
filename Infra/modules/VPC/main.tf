resource "aws_vpc" "teamE_vpc" {
  cidr_block = var.vpc_cidr
  tags = {
    Name = "${var.name}-${var.profile}-vpc"
  }
}

data "aws_availability_zones" "available" {
  state = "available"
}

resource "aws_subnet" "public" {
  count = 4
  availability_zone = data.aws_availability_zones.available.names[count.index]
  vpc_id            = aws_vpc.teamE_vpc.id
  cidr_block        = var.pub_sub_cidr[count.index]

  tags = {
    Name = "${var.name}-${var.profile}-public-${count.index + 1}"
  }
}

resource "aws_subnet" "private" {
  count = 4
  availability_zone = data.aws_availability_zones.available.names[count.index]
  vpc_id            = aws_vpc.teamE_vpc.id
  cidr_block        = var.pri_sub_cidr[count.index]

  tags = {
    Name = "${var.name}-${var.profile}-private-${count.index + 1}"
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
  count = 4
  subnet_id = aws_subnet.public.*.id[count.index]
  route_table_id = aws_default_route_table.public.id
}

resource "aws_route_table_association" "private" {
  count = 4
  subnet_id = aws_subnet.private.*.id[count.index]
  route_table_id = aws_route_table.private.id
}