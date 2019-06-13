//Just return the next index to be used instead of the length of the array + 1 because if one of the citations is
//deleted out of order the indexes of the array don't adjust and so the count is out of sync with the indexes being used

//TODO handle nulls in icrdata
function fillMain() {
    if (formExistsInPage()) {
        console.log("Filling in main form");
        getMainData(function(icrdata) {

            ELEMENTS.forEach(function (field) {
                console.log("populating " + field.id);

                switch (field.type) {
                    case "text" || "textarea":
                        fillText(field.id, icrdata[field.name]);
                        break;
                    case "select":
                        if (field.ref) {
                            select(field.id, icrdata[field.name]);
                            if (field.id == "requestExpirationDateLabel") {
                                document.getElementById("otherDateArea").style.display = "block";
                            }
                            document.getElementById(field.ref_id).value = icrdata[field.ref];
                        } else {
                            select(field.id, icrdata[field.name]);
                        }
                        break;
                    case "radio":
                        radio(field.id, icrdata[field.name], field.options);
                        break;
                    case "checkbox":
                        check(field.id, icrdata[field.name]);
                        break;
                    case "custom":
                        fillWithAssumption(field.id, icrdata[field.name]);
                        break;
                    case "complex":
                        fillComplex(field, icrdata[field.name]);
                        break;
                    case "modal":
                        fillModal(field, icrdata[field.name]);
                        break;
                }
                highlight(field);
            });
            hasICs(function(has_ics) {
                if(has_ics) {
                    console.log("it has ICs");
                    setNextAction(ACTIONS.ADD_IC);
                    clickLinkToICs();
                }
            });
        });
    }
}

const ACTIONS = {
    ADD_IC: 'ADD_IC',
    ADD_DOC: 'ADD_DOC'
};

const PAGES = {
    MAIN: 'Edit ICR',
    LIST_ICS: 'Add/Edit Information Collections',
    NEW_IC: 'Add New IC'
};

function letsRocthis() {
    console.log("FILLER is listening");

    chrome.runtime.onMessage.addListener(
        function (request, sender, sendResponse) {
            chrome.storage.local.set({"main": request.main}, function() {
                console.log("Created a new token in localstorage for the data related to ICRAS id " + request.main.id);
            });
            let ic_arr = [];
            request.ics.forEach(function(ic, idx) {
                chrome.storage.local.set({idx: ic}, function () {
                    console.log("Created a new token in localstorage for an IC related to ICRAS id " + request.main.id);
                });
                ic_arr.push(idx);
            });
            chrome.storage.local.set({"ic_array": ic_arr}, function () {
                console.log("Created a new token in localstorage for the array of ICs related to ICRAS id " + request.main.id);
            });
            process();
        });

    //not working on a current ICR so sit tight and wait for the user
    if(getActiveID() != null && isStampValid()) {
        process();
    }
}

function process() {
    switch ($('h1')[0].innerText) {
        case PAGES.MAIN:
            if (getNextAction() == ACTIONS.ADD_IC) {
                clickLinkToICs();
            } else {
                fillMain();
            }
            break;
        case PAGES.LIST_ICS:
            clickAddICbutton();
        case PAGES.NEW_IC:
            //fillIC();
            break;
    }
}

function fillModal(field, data) {
    //click the link field.link_name points to

    //$("input[value='Save']").trigger('click');

    //wait until field.action is available then click on field.action
    clickWhenAvailable(field.action);

    //executeWhenAvailable(field.action, data);
    //wait until the save button is available then fill out the data
    //$("button[name='Save']").ready(function() {

    //});

    //click on button[name="Save"]
    //$("button[name='Save']").trigger('click');
}



letsRocthis();