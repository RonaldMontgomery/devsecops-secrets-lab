// Notification helper for build status.
function notifyBuildStatus(status) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;

  console.log(`Build status: ${status}`);
  // TODO: actually POST to webhookUrl.
}

module.exports = notifyBuildStatus;
