// This one acts in the context of the panel in the Dev Tools
//
// Can use
// chrome.devtools.*
// chrome.extension.*

document.querySelector('#insertmessagebutton').addEventListener('click', function() {
    sendObjectToInspectedPage({action: "code", content: "document.body.innerHTML='<button>Send message to DevTools</button>'"});
    sendObjectToInspectedPage({action: "script", content: "scripts/messageback-script.js"});
}, false);
