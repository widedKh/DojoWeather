function displayAlert(){
    alert("loading weather report..");
}
var  erase= document.querySelector(".cookies");
function accept() {
   erase.remove();
}
function cel_faren(tempInCel) {
    return (tempInCel * (9 / 5) + 32);
}

function faren_cel(tempInCel) {
    return (tempInCel * (9 / 5) + 32);
}
