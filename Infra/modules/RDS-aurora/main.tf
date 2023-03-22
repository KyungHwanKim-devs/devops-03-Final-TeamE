module "cluster" {
  source = "terraform-aws-modules/rds-aurora/aws"

  name   = "test-aurora-db"
  engine = "aurora-mysql"
  # engine_version = "8.0.mysql_aurora.3.02.0"
  instance_class = "db.t2.small"
  instances = {
    one   = {}
    two   = {}
    three = {}
    four  = {}
  }

  database_name          = "teame"
  master_username        = "admin"
  master_password        = "sigkgk1!"
  create_random_password = false
  publicly_accessible    = true

  vpc_id = "vpc-06ee9230e22315e1e"
  # subnets = ["subnet-0bbc0401d802169a0", "subnet-0bb2dc41645ee6673", "subnet-0653100123ff589d2", "subnet-0d93e4e664d2d829b"]
  subnets = ["subnet-04eb0fa435bad10a2", "subnet-0a19c2bb451059191", "subnet-0f04f07899724c99f", "subnet-0fbfeaa63535501ad"]

  allowed_security_groups = ["sg-085383aa347a22000", "sg-0f20ee75851c7d4be", "sg-03c8d555d9fdb9148"]

  storage_encrypted   = true
  apply_immediately   = true
  monitoring_interval = 10

  # db_parameter_group_name         = "default"
  # db_cluster_parameter_group_name = "default"

  enabled_cloudwatch_logs_exports = ["general"]

}
