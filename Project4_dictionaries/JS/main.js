var car = {
    Make:"Ford",
    Model:"Bronco",
    Year:"2022"
}

function carInfo() {
    delete car.Model;
    document.getElementById("Dictionary").innerHTML = car.Model;
}