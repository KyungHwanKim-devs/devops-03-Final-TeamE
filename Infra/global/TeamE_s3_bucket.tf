terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "4.57.1"
    }
  }
  backend "s3" {
    bucket         = "teame-tf-backend-s3-bucket"
    key            = "teame-tf-backend-s3-bucket/terraform.tfstate"
    region         = "ap-northeast-2"
    dynamodb_table = "dynamodb-table"
    encrypt        = true
  }
}

provider "aws" {
  region = "ap-northeast-2"
}

resource "aws_s3_bucket" "teame-tf-backend-s3-bucket" {
  bucket = "teame-tf-backend-s3-bucket"
}

resource "aws_s3_bucket_acl" "bucket_acl" {
  bucket = aws_s3_bucket.teame-tf-backend-s3-bucket.id
  acl    = "private"
}

resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = aws_s3_bucket.teame-tf-backend-s3-bucket.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          AWS = [
            "arn:aws:iam::594311320189:user/kkh",
            "arn:aws:iam::625963311521:user/kwan2",
            "arn:aws:iam::069855716435:user/jjm"
          ]
        }
        Action = [
          "s3:GetObject",
          "s3:DeleteObject",
          "s3:PutObject"
        ]
        Resource = "${aws_s3_bucket.teame-tf-backend-s3-bucket.arn}/*"
      }
    ]
  })
}

#암호화
resource "aws_s3_bucket_server_side_encryption_configuration" "s3-enc" {
  bucket = aws_s3_bucket.teame-tf-backend-s3-bucket.id
  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

#버저닝
resource "aws_s3_bucket_versioning" "s3-version" {
  bucket = aws_s3_bucket.teame-tf-backend-s3-bucket.id
  versioning_configuration {
    status = "Enabled"
  }
}

#다이나모DB추가
resource "aws_dynamodb_table" "dynamodb-table" {
  name         = "teame-tf-backend-lock"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID"
  attribute {
    name = "LockID"
    type = "S"
  }
}
