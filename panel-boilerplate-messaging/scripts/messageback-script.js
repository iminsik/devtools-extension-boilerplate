var count = 0;
document.querySelectorAll('a').forEach(function(elm) {
  elm.addEventListener('click', function() {
     sendObjectToDevTools({content: "Changed by page: " + count});
     count++;
  });
});
function sendObjectToDevTools(message) {
    // The callback here can be used to execute something on receipt
    chrome.extension.sendMessage(message, function(message){});
}
