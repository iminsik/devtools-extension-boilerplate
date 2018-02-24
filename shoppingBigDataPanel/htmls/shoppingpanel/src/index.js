import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const message = { };

ReactDOM.render(<App message={message} />, document.getElementById('root'));

var defaultContent = "Let's wait for ANY Shopping User Interaction...";
var port = window.chrome.extension.connect({ name: "Panel Channel" });
port.onMessage.addListener(function(message) {
    var element = document.querySelector('#messageFromInspectedWindow');
    if(message.action === 'init') {
        element.innerHTML = defaultContent;
    } else {
        ReactDOM.render(<App message={message} />, document.getElementById('root'));
    }
});
