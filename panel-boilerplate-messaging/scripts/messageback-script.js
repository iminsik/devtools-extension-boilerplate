var count = 0;
document.querySelectorAll('a').forEach(function(elm) {
  elm.addEventListener('click', function(event) {
     var self = event.srcElement;
     console.error('TARGET:', self);
     sendObjectToDevTools({content: self.innerHTML});
     count++;
  });
});
function sendObjectToDevTools(message) {
    // The callback here can be used to execute something on receipt
    chrome.extension.sendMessage(message, function(message){});
}
