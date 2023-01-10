$(document).ready(function() {
    console.log("Ready!");
});

let now = moment().format("dddd, MMMM Do YYYY");
let displayDate = document.getElementById("currentDay");
displayDate.innerHTML = now;
let currentHour = moment().format("HH");

$(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time,value);
});

