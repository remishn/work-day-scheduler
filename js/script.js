// load page with current date
$(document).ready(function () {

    $("#currentDay").text(moment().format("MMMM DD YYYY, h:mm:ss a")); 
    $(".saveBtn").on("click", function () {
    
        console.log(this);
        var text = $(this).children("description").val(); 
        var time = $(this).parent().attr("id"); 
        
        
        localStorage.setItem(time, text);
    })})

$("#hour6 .description").val(localStorage.getItem("hour6"))
$("#hour7 .description").val(localStorage.getItem("hour7"))
$("#hour8 .description").val(localStorage.getItem("hour8"))
$("#hour9 .description").val(localStorage.getItem("hour9"))
$("#hour10 .description").val(localStorage.getItem("hour10"))
$("#hour11 .description").val(localStorage.getItem("hour11"))
$("#hour12 .description").val(localStorage.getItem("hour12"))
$("#hour13 .description").val(localStorage.getItem("hour13"))
