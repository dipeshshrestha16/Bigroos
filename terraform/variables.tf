variable "aws_region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "us-east-1"
}

variable "aws_profile" {
  description = "AWS profile to use"
  type        = string
  default     = "ripplebyte"
}

variable "project_name" {
  description = "Name of the project"
  type        = string
  default     = "bigroos-static-site"
}
