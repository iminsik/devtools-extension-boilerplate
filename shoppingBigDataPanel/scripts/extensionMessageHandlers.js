chrome.extension.onConnect.addListener(function(port) {
      var extensionListener = function(request, sender, sendResponse) {
          port.postMessage(request);
          sendResponse({status: 'OK', request: request});
      };

      chrome.extension.onMessage.addListener(extensionListener);
      port.onDisconnect.addListener(function(port) {
        chrome.extension.onMessage.removeListener(extensionListener);
      });
    });
