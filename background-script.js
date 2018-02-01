/* generic error handler */
function onError(error) {
  console.log(error);
}


var downloading = browser.downloads.download({
  url : "https://www.w3schools.com/w3css/img_lights.jpg",
  filename : 'auto-image.jpg',
  conflictAction : 'uniquify'
});

downloading.then();
