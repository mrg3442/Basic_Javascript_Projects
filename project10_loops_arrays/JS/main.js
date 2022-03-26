function Call_Loop() {
    var i=0;
    var limit = "";
    while(i < 20) {
        i++;
        limit +="<br>" + i;
        document.getElementById("Loop").innerHTML = "Currently on number: " + limit;
    }
}

function forLoop() {
    var instruments = ["Saxophone", "Trumpet", "piano", "Flute", "Tenor Saxophone", "Baritone"];
    var content = "";
    var i;
    for(i = 0; i < instruments.length; i++) {
        content += instruments[i] + "<br>";
        document.getElementById("List_Of_Instruments").innerHTML = content;
    }
}

function constantFunction() {
    const car = {make:"ford", model:"F150", color:"Red"};
    car.cost = "47000";
    car.color = "Blue";
    document.getElementById("constant").innerHTML = "Cost of a " + car.model + " is " + car.cost + " dollars and the only color we have is " + car.color;
}

function letFunction() {
    var num = 22;
    document.write(num + "<br>");
    {
        let num = 33;
        document.write(num + "<br>");
    }
    document.write(num);
}