
function fillText(id, data) {
    $("#" + id)[0].value = data;
}

function fillTextInArray(id, data) {
    $("input[name='" + id + "']")[0].value = data;
}

function formExistsInPage() {
    let found = false;

    $('form').each(function (i, elem) {
        console.log("checking for " + elem.id);
        if (jQuery.inArray(elem.id, FORMS) > -1) {
            console.log(elem.id + " is in the page");
            found = true;
            return false; //this just breaks out of the .each() iteration
        }
    });

    return found;
}


function clickAddICbutton() {
    $("input[name='addNewIC']")[0].click();
}

function clickLinkToICs() {
    $("a:contains('Edit Information Collection')")[0].click();
}

function select(selectId, value) {
    console.log("setting select#" + selectId + " to " + value);
    $('select#' + selectId).val(value);
}

function selectByName(selectId, value) {
    console.log("setting select#" + selectId + " to " + value);
    $("select[name='" + selectId + "']").val(value);
}

function radio(radioId, value, options) {
    console.log("radio value " + value + " options: " + options);
    let label;
    if (options) {
        label = 'input#' + options[value];
    } else if (isTrue(value)) {
        label = 'input#' + radioId + '1';
    } else {
        label = 'input#' + radioId + '2';
    }
    $(label).prop("checked", true);
    $(label).wrap(function () {
        return "<span style='border:3px solid green'></span>";
    });
}

function check(checkId, value) {
    var label = 'input#' + checkId;
    if (isTrue(value)) {
        $(label).prop("checked", true);
    }
    $(label).wrap(function () {
        return "<span style='border:3px solid green'></span>";
    })
}

function fillWithAssumption(id, value) {
    let select_id = id.split("_")[1];
    console.log("Looking at the values in " + select_id);
    $('select#' + select_id + ' option').each(function (i, elem) {
        if (elem.text.split(' - ')[0] == value) {
            document.getElementById(id).value = elem.text;
        }
    });
}


function isTrue(x) {
    return (x == 1 || (x != null && x.toString().toUpperCase() == 'Y'));
}

function highlight(field) {
    if (['radio', 'checkbox', 'complex'].indexOf(field.type) === -1) {
        $('#' + field.id).css({"border": "3px solid green"});
    }
    if (field.ref_id) {
        $('#' + field.ref_id).css({"border": "3px solid green"});
    }

}

function fillComplexElements(idx, fields, data) {
    for(var key in fields) {
        var fieldName = "citations[" + idx + "]." + key;
        fillTextInArray(fieldName, data[fields[key]]);
    }
}

function highlightWithSpan(field) {
    $(field).wrap(function () {
        return "<span style='border:3px solid green'></span>";
    })
}


function clickWhenAvailable(elemName) {
    console.log("waiting for the page");
    let observer = new MutationObserver(function(mutations) {

        mutations.forEach(function(mutation) {
            if (!mutation.addedNodes) return;

            for (let i = 0; i < mutation.addedNodes.length; i++) {
                mutation.addedNodes[i].forEach(function(node) {
                    if(node.getAttribute("name") == elemName) {
                        $('input[name=' + elemName + ']')[0].trigger('click');
                    }
                });
            }
        });
    });

    observer.observe(document.body, {
        childList: true
        , subtree: true
        , attributes: true});

    observer.disconnect();
}