//Function making the XHR call to the API to get the data related to an ICR id
function getICR(id) {
    console.log("got " + id);
    //TODO make sure you validate the formatting of id
    var xhr = new XMLHttpRequest();
    //prod: xhr.open("GET", "http://localhost:3000/rocthis/" + id, true);
    xhr.open("GET", "http://localhost:3000/data.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var resp = JSON.parse(xhr.responseText);
            //sending the ICR data to the current and active tab
            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, resp, function (response) {
                    //TODO which next step to take after the form data has been populated?
                    //add to the visual log in the context menu should be the first one
                    //start going through the rest of the subforms and modals that need data entered
                });
            });

        }
    };
    xhr.send();
}

//Listen for the ICR id submitted by the popup in the request and pass on the
//ICR id to the getICR method which makes the XHR call
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (sender.id == chrome.runtime.id) {
            sendResponse({message: "Got icr from " + request});
            chrome.storage.local.remove(["active", "data"]);
            //remove data from previous session in case of a previously interrupted session
            chrome.storage.local.set({"active": request.id}, function(){console.log("Created a new token in localstorage for " + request.id)});

            chrome.storage.local.set({"stamp": Date.now()}, function(){console.log("Created a new token in localstorage for " + request.id)});

            getICR(request.id);
        }
    }
);
