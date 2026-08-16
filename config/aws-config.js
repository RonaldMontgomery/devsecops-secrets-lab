// AWS configuration for the backup service
// TODO: move this to environment variables before we ship this

const awsConfig = {
  region: "us-east-1",
  accessKeyId: "***REMOVED***",
  secretAccessKey: "***REMOVED***",
  bucket: "devsecops-fall2026-backups",
};

module.exports = awsConfig;
