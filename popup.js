// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';

//Whatsapp
function processWhatsApp() {
    const type = "WhatsApp";
    const valueUrl = document.getElementById("urlWhatsApp").value
    const url = "https://wa.me/" + valueUrl;
    const value = valueUrl.replace(/[^\/\d]/g, '');
    console.log(value)
    if (value.length != 0 && value.length > 6) {
        setStorage(value, type);
        getStorage();
        chrome.tabs.create({ url: url }); //create a new tab
    }
}
// document.getElementById("checkWhatsApp").onclick = processWhatsApp;
document.getElementById('urlWhatsApp').onkeypress = function(e) {
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13') {
        processWhatsApp()
        return false;
    }
}


//Telegram
function processTelegram() {
    const type = "Telegram";
    const value = document.getElementById("urlTelegram").value
    const url = "https://t.me/" + value;
    if (value.length != 0 && value.length > 3) {
        setStorage(type, value);
        getStorage();
        chrome.tabs.create({ url: url }); //create a new tab
    }
}
// document.getElementById("checkTelegram").onclick = processTelegram;
document.getElementById('urlTelegram').onkeypress = function(e) {
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13') {
        processTelegram()
        return false;
    }
}

//Messenger
function processMessenger() {
    const type = "Messenger";
    const value = document.getElementById("urlMessenger").value
    const url = "https://m.me/" + value;
    if (value.length != 0 && value.length > 6) {
        setStorage(type, value);
        getStorage();
        chrome.tabs.create({ url: url }); //create a new tab
    }
}
// document.getElementById("checkMessenger").onclick = processMessenger;
document.getElementById('urlMessenger').onkeypress = function(e) {
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13') {
        processMessenger()
        return false;
    }
}

//Viber
function processViber() {
    const type = "Viber";
    const value = document.getElementById("urlViber").value
    const url = "viber://pa?chatURI=" + value;
    if (value.length != 0 && value.length > 6) {
        setStorage(value);
        getStorage();
        chrome.tabs.create({ url: url }); //create a new tab
    }
}
// document.getElementById("checkViber").onclick = processViber;
document.getElementById('urlViber').onkeypress = function(e) {
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13') {
        processViber()
        return false;
    }
}

//Wechat
// function processWechat() {
//     const type = "WeChat";
//     const number = document.getElementById("urlWechat").value
//     const url = "https://api.whatsapp.com/send?phone=" + number;
//     if (number.length != 0 && number.length > 6) {
//         setStorage(number);
//         getStorage();
//         chrome.tabs.create({ url: url }); //create a new tab
//     }
// }
// document.getElementById("checkWechat").onclick = processWechat;

function setStorage(value, type) {
    const setValue = {
            key: type,
            value: value
        }
        // for (var i = 0; i < setValue.length; i++) {
        //     console.log(setValue)
        // }
    chrome.storage.sync.set(setValue);

    // chrome.storage.sync.set({
    //     type: function() {
    //         for (var i = 0; i < type.length; i++){

    //         }
    //         console.log("Removed Data for Key: " + key[i]);
    //     }
};


// chrome.storage.local.set({ "WHFIND2": number }, function() {
//     console.warn("WHFIND" + number);
// });

// const curID = 0;
// // save data (you can use .local or .sync)
// chrome.storage.local.set({
//     Data: {
//         ["ID" + curID]: { Number: number }
//     }
// }, function() { console.log("Data Saved"); });
// curID = curID + 1;

// }

function getStorage() {
    chrome.storage.sync.get(null, function(data) {
        console.log(data);
        const allKeys = Object.keys(data.value);
        // const items = data.map(item, () => {
        //     return item.type
        // })
        document.getElementById("listOfData").innerText = allKeys;
    });
}

// chrome.storage.local.get('WHFIND2', function(result) {
//     // data = result.WHFIND2
//     console.log(result.WHFIND2)
//     document.getElementById("listOfData").innerText = result.WHFIND2
// });

// const loadedID = 0;
// chrome.storage.local.get(["Data"], function(results) {
//     while (loadedID < results.Data.length) {
//         loadedNumber = results.Data[loadedID].Number;
//         // loadedDate = results.Date[loadedID].Date;

//         document.getElementById("listOfData").innerText = loadedNumber;


//         // your code that handles the loaded data

//         loadedID = loadedID + 1;
//     }
//     curID = results.Data.length;
// });

// function getAllItems() {
//     chrome.storage.local.get(null, function(items) {
//         var allKeys = Object.keys(items);
//         document.getElementById("listOfData").innerText = allKeys;
//     });
// }