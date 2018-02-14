// document.querySelector('button').addEventListener('click', function() {
//  chrome.extension.sendMessage({action: 'message', content:"Changed by page"}, function(message){});
// });
var count = 0;
document.querySelector('button').addEventListener('click', function() {
    sendObjectToDevTools({content: "Changed by page: " + count});
    count++;
});
function sendObjectToDevTools(message) {
    // The callback here can be used to execute something on receipt
    chrome.extension.sendMessage(message, function(message){});
}
