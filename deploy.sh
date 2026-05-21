#!/bin/bash

# Configuration
PROFILE="ripplebyte"
REGION="us-east-1"
BUILD_DIR="out"

# Standard formatting
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Starting deployment for Bigroos...${NC}"

# Function to check command availability
check_command() {
    if ! command -v $1 &> /dev/null; then
        echo -e "${RED}❌ Error: $1 is not installed. Please install it to continue.${NC}"
        exit 1
    fi
}

check_command "npm"
check_command "terraform"
check_command "aws"

# Ensure AWS Profile exists
if ! aws configure list-profiles | grep -q "^$PROFILE$"; then
    echo -e "${RED}❌ Error: AWS profile '$PROFILE' not found.${NC}"
    echo "Please configure it using: aws configure --profile $PROFILE"
    exit 1
fi

# 1. Build the Next.js app
echo -e "${BLUE}📦 Building the application...${NC}"
npm install
npm run build

if [ ! -d "$BUILD_DIR" ]; then
    echo -e "${RED}❌ Error: Build directory '$BUILD_DIR' not found. Build may have failed.${NC}"
    exit 1
fi

# 2. Get Infrastructure info from Terraform
echo -e "${BLUE}🔍 Fetching infrastructure details from Terraform...${NC}"
if [ ! -d "terraform" ]; then
    echo -e "${RED}❌ Error: 'terraform' directory not found.${NC}"
    exit 1
fi

cd terraform || exit
# Suppress noise but keep errors
terraform init -reconfigure > /dev/null

BUCKET_NAME=$(terraform output -raw s3_bucket_name 2>/dev/null || echo "")
DISTRIBUTION_ID=$(terraform output -raw cloudfront_distribution_id 2>/dev/null || echo "")
DOMAIN_NAME=$(terraform output -raw cloudfront_domain_name 2>/dev/null || echo "")

if [ -z "$BUCKET_NAME" ] || [ -z "$DISTRIBUTION_ID" ]; then
    echo -e "${RED}❌ Error: Could not fetch Bucket Name or Distribution ID.${NC}"
    echo "Ensure you have run 'terraform apply' successfully."
    exit 1
fi
cd .. || exit

# 3. Sync to S3
echo -e "${BLUE}📤 Uploading files to S3 bucket: $BUCKET_NAME...${NC}"
aws s3 sync "$BUILD_DIR/" "s3://$BUCKET_NAME/" --delete --profile "$PROFILE" --region "$REGION"

# 4. Invalidate CloudFront Cache
echo -e "${BLUE}🧹 Invalidating CloudFront cache for distribution: $DISTRIBUTION_ID...${NC}"
aws cloudfront create-invalidation --distribution-id "$DISTRIBUTION_ID" --paths "/*" --profile "$PROFILE" --region "$REGION"

echo -e "${GREEN}✅ Deployment complete!${NC}"
echo -e "${GREEN}🌐 Your site is live at: https://$DOMAIN_NAME${NC}"
