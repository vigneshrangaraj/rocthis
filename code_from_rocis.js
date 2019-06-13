function makeElementsVisible(i) {
    var titleElm =	document.getElementById("title" +i);
    var sectionElm =	document.getElementById("section"+i);
    var textElm =	document.getElementById("text"+i);
    var publicLawNumberAElm =	document.getElementById("publicLawNumberA" +i);
    var publicLawNumberBElm =	document.getElementById("publicLawNumberB"+i);
    var statuteNumberAElm =	document.getElementById("statuteNumberA"+i);
    var statuteNumberBElm =	document.getElementById("statuteNumberB"+i);
    var eoNumberElm =	document.getElementById("eoNumber"+i);
    var uscElm =	document.getElementById("usc"+i);
    var lawNameElm =	document.getElementById("lawName"+i);
    var pubLawElm =	document.getElementById("pubLaw"+i);
    var seperatorElm =	document.getElementById("seperator"+i);
    var secElm =	document.getElementById("sec"+i);
    var statuteElm =	document.getElementById("statute"+i);
    var statuteNameElm =	document.getElementById("statuteName"+i);
    var eoElm =	document.getElementById("eo"+i);
    var eoNameElm =	document.getElementById("eoName"+i);

    titleElm.style.display = "none";
    sectionElm.style.display = "none";
    textElm.style.display = "none";
    publicLawNumberAElm.style.display = "none";
    publicLawNumberBElm.style.display = "none";
    statuteNumberAElm.style.display = "none";
    statuteNumberBElm.style.display = "none";
    eoNumberElm.style.display = "none";
    uscElm.style.display = "none";
    lawNameElm.style.display = "none";
    pubLawElm.style.display = "none";
    seperatorElm.style.display = "none";
    secElm.style.display = "none";
    statuteElm.style.display = "none";
    statuteNameElm.style.display = "none";
    eoElm.style.display = "none";
    eoNameElm.style.display = "none";

    var citationType = document.getElementById("citation" + i + ".type");

    if(citationType.options[1].selected) {
        titleElm.style.display = "inline";
        uscElm.style.display = "inline";
        sectionElm.style.display = "inline";
        lawNameElm.style.display = "inline";
        textElm.style.display = "inline";
    } else if(citationType.options[2].selected) {
        pubLawElm.style.display = "inline";
        document.getElementById("publicLawNumberA"+i).style.display = "inline";
        seperatorElm.style.display = "inline";
        publicLawNumberBElm.style.display = "inline";
        secElm.style.display = "inline";
        sectionElm.style.display = "inline";
        lawNameElm.style.display = "inline";
        textElm.style.display = "inline";
    } else if(citationType.options[3].selected) {
        statuteNumberAElm.style.display = "inline";
        statuteElm.style.display = "inline";
        statuteNumberBElm.style.display = "inline";
        statuteNameElm.style.display = "inline";
        textElm.style.display = "inline";
    } else if(citationType.options[4].selected) {
        eoElm.style.display = "inline";
        eoNumberElm.style.display = "inline";
        eoNameElm.style.display = "inline";
        textElm.style.display = "inline";
    }
}