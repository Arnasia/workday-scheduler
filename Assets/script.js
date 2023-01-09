let todayDate = moment(). format (`dddd, MMM Do YYYY`);
$("#currentDay").html(todayDate);

$(document).ready(function () {

  $(".saveBtn").on("click",function () {

  let text = $(this).siblings("description").val();
  let time = $(this).parent().attr("id");

  localStorage.setItem(time, text);
})

