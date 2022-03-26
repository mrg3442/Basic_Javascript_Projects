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

function objFunction() {
    let house = {
        stories: "Two stories in height  ",
        bedrooms: "Three bedrooms ",
        bathrooms: "One bathroom",
        pool: " and has a backyard permanent pool.",
        description : function() {
            return "the house on miller st has " + this.stories + this.bedrooms + this.bathrooms + this.pool;
        }
    };
    document.getElementById("house").innerHTML = house.description();
}

function breaker() {
    for(i = 0; i < 10; i++) {
        if(i==3){//breaks for loop at 3
            document.getElementById("break").innerHTML = i;
            break;
        }
    }
}

function continuer() {
    let text="";
    for(i = 0; i < 10; i++) {
        if(i == 2 || i == 4){continue;}// skips over 2 and 4
        text+="The number is " + i + "<br>";
    }
    document.getElementById("continue").innerHTML = text;
}