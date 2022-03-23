var car = {
    Make:"Ford",
    Model:"Bronco",
    Year:"2022"
} //dictionary about various car specs

function carInfo() {
    delete car.Model;//deletes model so that we get undefined when called
    document.getElementById("Dictionary").innerHTML = car.Model;//calls the model from car dictionary and updates the <p> with corresponding tag
}