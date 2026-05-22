output "cloudfront_domain_name" {
  value       = aws_cloudfront_distribution.s3_distribution.domain_name
  description = "The domain name of the CloudFront distribution"
}

output "s3_bucket_name" {
  value       = aws_s3_bucket.static_site.bucket
  description = "The name of the S3 bucket"
}

output "cloudfront_distribution_id" {
  value       = aws_cloudfront_distribution.s3_distribution.id
  description = "The ID of the CloudFront distribution"
}

output "github_actions_role_arn" {
  value       = aws_iam_role.github_actions.arn
  description = "The ARN of the IAM role for GitHub Actions"
}

output "aws_region" {
  value       = var.aws_region
  description = "The AWS region where resources are deployed"
}
