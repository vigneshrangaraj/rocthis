function getLastCitationIndex() {
    let largestIndex = -1;
    $("select[name^='citations']").each(function (index, elem) {
        if (/^citation\d+\.type$/.test(elem.id)) {
            try {
                let newInt = parseInt(elem.id.match(/\d+/)[0]);
                largestIndex = (newInt > largestIndex) ? newInt : largestIndex;
            } catch (e) {
                //The previous conditional ensures that there will be a number
                //in here so this exception should never be thrown
                console.log("An error occured while populating the citations.");
            }
        }
    });
    return largestIndex;
}



//TODO-> add highlighting
function fillComplex(field, data) {
    if(data != null && data.length > 0) {
        for(let i in data) {

            //Determine which index we are working with
            let index = getLastCitationIndex();

            //Unless the last available citation field has not been used, create a new set of fields and increment the index
            //This situation usually occurs before any citations are created and the form is empty
            if ($("select[name='citations[" + index + "].type']")[0].options.selectedIndex > 0) {
                $('a[class=btn_style4]')[1].click(); //click the button to create a new group of input elements for a citation
                index+=1;
            }

            //Prime the field.id value with the correct
            let currentCitationSelect = field.id.replace("[]", "[" + index + "]");
            selectByName(currentCitationSelect, field.value);
            makeElementsVisible(index);
            fillComplexElements(index, field.fields, data[i]);
        }
    }

}