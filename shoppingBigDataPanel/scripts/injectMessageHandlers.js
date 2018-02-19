window.addEventListener("message", function(event) {
  if(event.data && event.data.shoppingData === true) {
    chrome.extension.sendMessage(event.data, function(response){ console.log(response); })
  }
});

