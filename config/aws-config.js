// AWS configuration for the backup service.
const awsConfig = {
  region: "us-east-1",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  bucket: "devsecops-fall2026-backups",
};

module.exports = awsConfig;
