(function() {
  var port = chrome.extension.connect({ name: "Panel Channel" });
  port.onMessage.addListener(function(message) {
    document.querySelector('#messageFromInspectedWindow').innerHTML = JSON.stringify(message, null, 4);
  });
}())
