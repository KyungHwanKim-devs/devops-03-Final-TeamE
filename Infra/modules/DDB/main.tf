resource "aws_dynamodb_table" "user-table" {
  name         = "user-table"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "UserId"

  attribute {
    name = "UserId"
    type = "S"
  }

}
