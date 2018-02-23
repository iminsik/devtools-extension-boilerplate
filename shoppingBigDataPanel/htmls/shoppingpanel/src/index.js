import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const message = {
    "shoppingData": true,
    "omnitureVisitorId": "817868104|MCIDTS|17585|MCMID|70510845707391115980601288106355687912|MCAAMLH-1519841697|9|MCAAMB-1519926549|RKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y|MCOPTOUT-1519328949s|NONE|MCAID|NONE",
    "searchType": "Revenue:RT",
    "numberOfAdults": "1",
    "numberOfChildren": "ZERO",
    "numberOfLapInfants": "Not available currently",
    "upgradeShopped": "NOUPGRADEPREFERENCE",
    "discountCode": "NODISCOUNTCODE",
    "includesNearbyAirportsRadius": "Dep: None | Arr: None",
    "departure": {
        "date": "2/28/2018",
        "preferredTime": "12:00 AM - 11:59 PM",
        "cityCode": "SFO"
    },
    "return": {
        "date": "2/28/2018",
        "preferredTime": "12:00 AM - 11:59 PM",
        "cityCode": "LAX"
    }
};

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
