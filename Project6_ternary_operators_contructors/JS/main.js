function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are to short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}

function ageFunction() {
    var age, canVote;
    age = document.getElementById("age").value;
    canVote = (age >= 18) ? "You are":"You are not";
    document.getElementById("status").innerHTML = canVote + " old enough to vote.";
}