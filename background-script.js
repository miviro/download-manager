// generic error handler
function onError(error) {
  console.log(error);
}

// Logs the url user is downloading from
function onDownloadStarted(downloadItem){
  console.log("Downloading from: " + downloadItem.url)
}

// event of the downloads API fires when a download begins
browser.downloads.onCreated.addListener(onDownloadStarted);
