$(document).ready(function () {

    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); 

    $(".saveBtn").on("click", function () {

        console.log(this);
        var text = $(this).siblings(".description").val(); 
        var time = $(this).parent().attr("id"); 

        //set items in local storage.
        localStorage.setItem(time, text);
    })


    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    function hourTracker() {
        //get current number of hours.
        var currentHour = moment().hour(); // use of moment.js

        // loop over time blocks
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log( blockHour, currentHour)

            //check if we've moved past this time, click into css/html given classes of past, present, or future
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker(); //re-run function

})    

// let now = moment().format('MMMM Do YYYY, h:mm:ss a');
// let displayDate = document.getElementById("currentDay");
// displayDate.innerHTML = now;
// let currentHour = moment().format("HH");

// $(".time-div").each(function() {
//     var timeDiv = $(this).attr("id").split("-")[1];

//     if (currentHour === timeDiv) {
//         $(this).addClass("present");
//         $(this).children(".description").addClass("present");

//     } else if (currentHour < timeDiv) {
//         $(this).removeClass("present");
//         $(this).addClass("future");

//     } else if (currentHour > timeDiv) {
//         $(this).removeClass("future");
//         $(this).addClass("past");
//     }
// });


// $(".saveBtn").click(function (event) {
//     event.preventDefault();
//     var value = $(this).siblings(".time-block").val();
//     var time = $(this).parent().attr("id").split("-")[1];
//     localStorage.setItem(time,value);
// });

    // $("#hour-09 .time-block").val(localStorage.getItem("09"));
    // $("#hour-10 .time-block").val(localStorage.getItem("10"));
    // $("#hour-11 .time-block").val(localStorage.getItem("11"));
    // $("#hour-12 .time-block").val(localStorage.getItem("12"));
    // $("#hour-13 .time-block").val(localStorage.getItem("13"));
    // $("#hour-14 .time-block").val(localStorage.getItem("14"));
    // $("#hour-15 .time-block").val(localStorage.getItem("15"));
    // $("#hour-16 .time-block").val(localStorage.getItem("16"));
    // $("#hour-17 .time-block").val(localStorage.getItem("17"));


