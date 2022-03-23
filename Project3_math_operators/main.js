function multiFunction(){
    var num = 3*3;
    document.getElementById("math").innerHTML = num + " This is multiply";
}

function subFunction(){
    var num=8-2;
    document.getElementById("sub").innerHTML = num + " This is subtraction";
}

function divFunction(){
    var num=8/2;
    document.getElementById("div").innerHTML = num + " This is division";
}

function addFunction(){
    var num=8+2;
    document.getElementById("add").innerHTML = num + " This is addition";
}

function multipleFunction() {
    var num = 18/2+3-3;
    document.getElementById("multiple").innerHTML = num + " This is all four math operations.";
}

function remFunction() {
    var num= 14%6;
    document.getElementById("rem").innerHTML = num + " This is the remainder of 14 divided by 6."
}

function negFunction() {
    var num = 8;
    document.getElementById("neg").innerHTML = -num + " This is the negation of 8";
}

function incFunction() {
    var num = 8;
    num++;
    document.getElementById("inc").innerHTML = num + " This is an increase of 1 from 8";
}

function decFunction() {
    var num = 8;
    num--;
    document.getElementById("dec").innerHTML = num + " This is a decrease of 1 from 8";
}

window.alert(Math.random() * 1000);

function roundFunction() {
    var num = Math.round(8.2);
    document.getElementById("round").innerHTML = num + " Round to nearest whole number.";
}