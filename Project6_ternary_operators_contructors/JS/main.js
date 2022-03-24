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

function Job(title, salary, years) {
    this.Job_title = title;
    this.Job_salary = salary;
    this.Job_years = years;
}

var matthew = new Job("Student", 0, 0);
var melissa = new Job("CNA", 40000, 2);

function newFunction() {
    document.getElementById("New_and_This").innerHTML = "Matthew is a " + matthew.Job_title + " he makes " + matthew.Job_salary + " dollars per year he has been in his position for "
    + matthew.Job_years + " years.";
}

var starting_point = 9;

function nestedFunction() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count(){
        function plus_one() {starting_point +=1;}
        plus_one();
        return starting_point;
    }
}