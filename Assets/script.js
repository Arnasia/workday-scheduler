$(document).ready(function() {
    console.log("Ready!");
});

let now = moment().format("dddd, MMMM Do YYYY");
let displayDate = document.getElementById("currentDay");
displayDate.innerHTML = now;
let currentHour = moment().format("HH");

$(".time-div").each(function() {
    var timeDiv = $(this).attr("id").split("-")[1];

    if (currentHour == timeDiv) {
        $(this).addClass("present");
        $(this).children(".description").addClass("present");

    } else if (currentHour < timeDiv) {
        $(this).removeClass("present");
        $(this).addClass("future");

    } else if (currentHour > timeDiv) {
        $(this).removeClass("future");
        $(this).addClass("past");
    }
});


$(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time,value);
});

