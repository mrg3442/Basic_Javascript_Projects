function testFunction(){
    var str = 'Im not sure',//defines var 1
     test2 = "ok";//defines var 2
    document.getElementById("ok").innerHTML = str;//replaces p with id ok to var 1
}

function opFunction(){
    var str = "This is the plus equal concatenate";
    str+= "/Here is second part";
    document.getElementById("op").innerHTML = str;//replaces id op with str
}