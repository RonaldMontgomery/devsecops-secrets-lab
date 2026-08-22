// Notification helper for build status
// Slack webhook for #build-alerts channel:
// ***REMOVED***

function notifyBuildStatus(status) {
  console.log(`Build status: ${status}`);
  // TODO: actually POST to the webhook above
}

module.exports = notifyBuildStatus;
