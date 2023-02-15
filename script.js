$(document).ready(function(){


    $(".saveBtn").click(function(){
      var time = $(this).parent().attr('id');
      var text = $(this).siblings('.description').val()
      console.log(time,text)

      localStorage.setItem(time,text)
    });






//connected to local storage by hour starting at hour-9 till 5 by using get item
console.log (localStorage.getItem("morninghour-9"))
$("#morninghour-9 .description").val(localStorage.getItem("morninghour-9")) 

console.log (localStorage.getItem("morninghour-10"))
$("#morninghour-10 .description").val(localStorage.getItem("morninghour-10")) 

console.log (localStorage.getItem("morninghour-11"))
$("#morninghour-11 .description").val(localStorage.getItem("morninghour-11")) 

console.log (localStorage.getItem("afterhour-12"))
$("#afterhour-12 .description").val(localStorage.getItem("afterhour-12")) 

console.log (localStorage.getItem("afterhour-1"))
$("#afterhour-1 .description").val(localStorage.getItem("afterhour-1")) 

console.log (localStorage.getItem("afterhour-2"))
$("#afterhour-2 .description").val(localStorage.getItem("afterhour-2")) 

console.log (localStorage.getItem("afterhour-3"))
$("#afterhour-3 .description").val(localStorage.getItem("afterhour-3")) 

console.log (localStorage.getItem("afterhour-4"))
$("#afterhour-4 .description").val(localStorage.getItem("afterhour-4")) 

console.log (localStorage.getItem("afterhour-5"))
$("#afterhour-5 .description").val(localStorage.getItem("afterhour-5")) 

  





});
  const rows = document.getElementsByClassName("row");
var currentHour = dayjs().format("H");
console.log (currentHour)

Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
    console.log (rowHour)
  }
  if (rowHour) {
    // Compares  the row_id to the current hour whch then  sets the color accordingly to the right hour
    if (currentHour == rowHour) {
      setColor(row, "red");
    } else if (currentHour < rowHour) {
      setColor(row, "green");
    } else if (currentHour > rowHour) {
      setColor(row, "lightgrey");
    } 
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
} 