var count = 0;
document.querySelectorAll('a').forEach(function(elm) {
  elm.addEventListener('click', function() {
     sendObjectToDevTools({content: "The count of clicking anchor tag: " + count});
     count++;
  });
});
function sendObjectToDevTools(message) {
    // The callback here can be used to execute something on receipt
    chrome.extension.sendMessage(message, function(message){});
}
