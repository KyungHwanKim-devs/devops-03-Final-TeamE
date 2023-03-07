resource "TeamE_s3_bucket" "bucket" {
  bucket = "TeamE-s3-bucket"
  acl    = "private"
}

resource "TeamE_s3_bucket_policy" "bucket_policy" {
  bucket = TeamE_s3_bucket.bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect    = "Allow"
        Principal = {
          AWS = "arn:aws:iam::123456789012:root" # 다른 AWS 계정의 root 사용자에게 권한 부여
        }
        Action    = ["s3:GetObject"]
        Resource  = "${TeamE_s3_bucket.bucket.arn}/*"
      }
    ]
  })
}
