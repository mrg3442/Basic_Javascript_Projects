var str = "ok";

function intentional() {
   if(new Date().getHours() > 20 || new Date().getHours() < 5) {
    document.getElementById("pop").innerHTML = "Have a goodnight!";
   }
}

function ifStat() {
    if(new Date().getHours()  < 4) {
        document.write("<br> Why are you up so late?");
    }
}

function ifFunc(age) {
    var fg = parseInt(age);
    if(fg >= 18){
        document.getElementById("req").innerHTML = "You are an adult!";
    }else{
        document.getElementById("req").innerHTML = "You are still a minor.";
    }
}