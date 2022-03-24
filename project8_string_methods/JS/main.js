function myFunction(){
    var1 = "This is ";
    var2 = "an example ";
    var3 = "of a ";
    var4 = "concat method."
    document.getElementById("con").innerHTML = var1.concat(var2, var3, var4);
}

function slice_Method() {
    var Sentence = "All work and no play makes johnny a dull boy";
    var Section = Sentence.slice(27,44);
    document.getElementById("slice").innerHTML = Section;
}

function upperMethod() {
    var sentence = "Rock the world";
    var upperrr = sentence.toUpperCase();
    document.getElementById("uper").innerHTML = upperrr;
}

function searchMethod() {
    var sentence = "Uptown Girl";
    var position = sentence.search("Girl");
    document.getElementById("search").innerHTML = position;
}

function stringMethod() {
    var num = 123;
    var strNum = num.toString();
    document.getElementById("toString").innerHTML = strNum;
}

function precisionMethod() {
    var x = 12938.234876345;
    document.getElementById("precision").innerHTML = x.toPrecision(10);
}

function fixedMethod() {
    var num = 298.123457891;
    document.getElementById("fixed").innerHTML = num.toFixed(5);
}

function valueMethod() {
    var str = "Sound of Silence";
    var cat = str.valueOf();
    document.getElementById("value").innerHTML = cat;
}