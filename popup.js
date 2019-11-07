// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';

//Whatsapp
function processWhatsApp() {
    const number = document.getElementById("urlWhatsApp").value
    console.log(number);
    // const number = value.replace(/[^\/\d]/g, '');
    const url = "https://api.whatsapp.com/send?phone=" + number;
    console.log(url);
    // document.getElementById('country').value = 996;

    if (number.length != 0 && number.length > 6) {
        setStorage(number);
        getStorage();
        chrome.tabs.create({ url: url }); //create a new tab

    }
}

document.getElementById("checkWhatsApp").onclick = processWhatsApp;

//Telegram
function processTelegram() {
    const value = document.getElementById("urlTelegram").value
        // const number = value.replace(/[^\/\d]/g, '');
    const url = "https://t.me/" + value;

    // document.getElementById('country').value = 996;

    if (value.length != 0 && value.length > 6) {
        setStorage(value);
        getStorage();
        chrome.tabs.create({ url: url }); //create a new tab

    }
}

document.getElementById("checkTelegram").onclick = processTelegram;


//Messenger
function processMessenger() {
    const value = document.getElementById("urlMessenger").value
    console.log(value);
    // const number = value.replace(/[^\/\d]/g, '');
    const url = "https://www.facebook.com/mme_redirect/?username=" + value;
    console.log(url);
    // document.getElementById('country').value = 996;

    if (value.length != 0 && value.length > 6) {
        setStorage(value);
        getStorage();
        chrome.tabs.create({ url: url }); //create a new tab

    }
}

document.getElementById("checkMessenger").onclick = processMessenger;

//Viber
function processViber() {
    const number = document.getElementById("urlViber").value
    console.log(number);
    // const number = value.replace(/[^\/\d]/g, '');
    const url = "https://viber://chat?number=" + number;
    console.log(url);
    // document.getElementById('country').value = 996;

    if (number.length != 0 && number.length > 6) {
        setStorage(number);
        getStorage();
        chrome.tabs.create({ url: url }); //create a new tab

    }
}

document.getElementById("checkViber").onclick = processViber;

//Wechat
function processWechat() {
    const number = document.getElementById("urlWechat").value
    console.log(number);
    // const number = value.replace(/[^\/\d]/g, '');
    const url = "https://api.whatsapp.com/send?phone=" + number;
    console.log(url);
    // document.getElementById('country').value = 996;

    if (number.length != 0 && number.length > 6) {
        setStorage(number);
        getStorage();
        chrome.tabs.create({ url: url }); //create a new tab

    }
}

document.getElementById("checkWechat").onclick = processWechat;




function setStorage(item) {

    chrome.storage.sync.set({ 'value': item });


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

}

function getStorage() {

    chrome.storage.sync.get(null, function(data) {
        console.log(data);
    });

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
}

// function getAllItems() {
//     chrome.storage.local.get(null, function(items) {
//         var allKeys = Object.keys(items);
//         document.getElementById("listOfData").innerText = allKeys;
//     });
// }