function setNextAction(action) {
    chrome.storage.local.set({'next_action': action}, function () {
        console.log("LOCALSTORAGE-> Set action to " + action);
    });
}

function getNextAction() {
    chrome.storage.local.get(['next_action'], function (action) {
        console.log("LOCALSTORAGE-> Got the next action");
        return action;
    });
    return null;
}

function getMainData(callback) {
    chrome.storage.local.get(['main'], function (data) {
        console.log("LOCALSTORAGE-> Got the main data");
        console.log(data.main);
        callback(data.main);
    });
    return null;
}

function getActiveID(callback) {
    chrome.storage.local.get(['active'], function (id) {
        console.log("LOCALSTORAGE-> Got the active ID");
        callback(id);
    });
    return null;
}

//fix this
function isActiveSession(callback) {
    chrome.storage.local.get(['active', 'stamp'], function (id) {
        console.log("LOCALSTORAGE-> Got the active ID");
        callback(id);
    });
}

function isStampValid() {
    let d = new Date(Date.now());
    d.setMinutes(d.getMinutes() - 30)
    chrome.storage.local.get(['stamp'], function (stamp) {
        console.log("LOCALSTORAGE-> Verifying the stamp");
        return (stamp > d.getMilliseconds());
    });
    return null;
}

function hasICs(callback) {
    chrome.storage.local.get(['ic_array'], function (arr) {
        console.log("LOCALSTORAGE-> Got the ic_array");
        console.log(arr);
        callback (arr.length > 0);
    });
}

//removes the passed ic index from the array we use to keep track which ics remain to be added
function removeIC(ic) {
    let ics = [];
    chrome.storage.local.get(['ic_array'], function (arr) {
        console.log("LOCALSTORAGE-> Got the ic_array");
        ics = arr;
    });

    let idx = ics.indexOf(ic);
    ics.splice(idx, 1);

    chrome.storage.local.set({'ic_array': ics}, function (arr) {
        console.log("LOCALSTORAGE-> Resetting the ic_array");
    });
}