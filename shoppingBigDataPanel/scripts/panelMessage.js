(function() {
  var defaultContent = "Let's wait for ANY Shopping User Interaction...";
  var port = chrome.extension.connect({ name: "Panel Channel" });
  port.onMessage.addListener(function(message) {
    var element = document.querySelector('#messageFromInspectedWindow');
    if(message.action === 'init') {
      element.innerHTML = defaultContent;
    } else {
      element.innerHTML = JSON.stringify(message, null, 4);
    }
  });
}())
