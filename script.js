$(document).ready(function(){


    $(".saveBtn").click(function(){
      var time = $(this).parent().attr('id');
      var text = $(this).siblings('.description').val()
      console.log(time,text)

      localStorage.setItem(time,text)
    });






//localStorage.getItem("hour-9")
console.log (localStorage.getItem("hour-9"))
$("#hour-9 .description").val(localStorage.getItem("hour-9")) 

console.log (localStorage.getItem("hour-10"))
$("#hour-10 .description").val(localStorage.getItem("hour-10")) 

console.log (localStorage.getItem("hour-11"))
$("#hour-11 .description").val(localStorage.getItem("hour-11")) 

console.log (localStorage.getItem("hour-12"))
$("#hour-12 .description").val(localStorage.getItem("hour-12")) 

console.log (localStorage.getItem("hour-1"))
$("#hour-1 .description").val(localStorage.getItem("hour-1")) 

console.log (localStorage.getItem("hour-2"))
$("#hour-2 .description").val(localStorage.getItem("hour-2")) 

console.log (localStorage.getItem("hour-3"))
$("#hour-3 .description").val(localStorage.getItem("hour-3")) 

console.log (localStorage.getItem("hour-4"))
$("#hour-4 .description").val(localStorage.getItem("hour-4")) 

console.log (localStorage.getItem("hour-5"))
$("#hour-5 .description").val(localStorage.getItem("hour-5")) 

  });