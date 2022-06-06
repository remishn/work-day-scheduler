// load page with current date
$(document).ready(function () {

    // display current time using moment js
    $("#currentDay").text(moment().format("MMMM DD YYYY, h:mm:ss a")); 
    $(".saveBtn").on("click", function () {

        var text = $(this).siblings(".description").val(); 
        var time = $(this).parent().attr("id");       
       
        localStorage.setItem(time, text);
    })})

    // pull stored data from local storage

$("#hour6 .description").val(localStorage.getItem("hour6"))
$("#hour7 .description").val(localStorage.getItem("hour7"))
$("#hour8 .description").val(localStorage.getItem("hour8"))
$("#hour9 .description").val(localStorage.getItem("hour9"))
$("#hour10 .description").val(localStorage.getItem("hour10"))
$("#hour11 .description").val(localStorage.getItem("hour11"))
$("#hour12 .description").val(localStorage.getItem("hour12"))
$("#hour13 .description").val(localStorage.getItem("hour13"))

// show schedule in different color

function schedule() {
    var currentTime = moment().hour()
    var blockTime = $(this).attr("id")

    console.log(blockTime, currentTime)

    if (blockTime < currentTime) {
        $(this).addClass("past")
    }

    else if (blockTime === currentTime) {
        $(this).addClass("present")
    }

    else {
        $(this).addClass("future")
    }
    schedule();
}


