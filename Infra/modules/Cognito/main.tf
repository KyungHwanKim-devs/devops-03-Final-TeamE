resource "aws_cognito_user_pool" "pool" {
  name = "teame-cognito-user-pool"

  alias_attributes         = ["email"]
  auto_verified_attributes = ["email"]
  account_recovery_setting {
    recovery_mechanism {
      name     = "verified_email"
      priority = 1
    }
  }
}

resource "aws_cognito_user_pool_client" "client" {
  name         = "teame-cognito-user-pool-app-client"
  user_pool_id = aws_cognito_user_pool.pool.id
}


# resource "null_resource" "cognito_user" {

#   triggers = {
#     user_pool_id = aws_cognito_user_pool.pool.id
#   }

#   provisioner "local-exec" {
#     command = "aws cognito-idp admin-create-user --user-pool-id ${aws_cognito_user_pool.pool.id} --username admin && aws cognito-idp admin-set-user-password --user-pool-id ${aws_cognito_user_pool.pool.id} --username admin --password 'Password1!' --permanent"
#   }
# }


# output "user-poll-id" {
#   value = aws_cognito_user_pool.pool.id
# }
