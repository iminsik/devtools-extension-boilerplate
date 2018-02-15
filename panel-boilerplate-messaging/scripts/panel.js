// This one acts in the context of the panel in the Dev Tools
//
// Can use
// chrome.devtools.*
// chrome.extension.*
sendObjectToInspectedPage({action: "script", content: "scripts/messageback-script.js"});
