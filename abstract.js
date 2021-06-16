
// DECLARING COLORS
var lightblue ="#33C7F7";
var pink="#DFA0C8";
var darkblue= "#2C439B";
var violet= "#25255f";


// COLOR PALLETTE ARRAY
var colorPalette= [lightblue, pink, lightblue, violet];
var colorBG=[]
var randomColor = Math.floor(Math.random() *colorPalette.length); 

// CHANGE BG COLOR
// $("body").css("background-color",colorPalette[randomColor]);

// HIDE BOX
$("#circle-container").ready(function() {
  $("#circle-container div").click(function() {
    $(this).fadeOut();
  });
  $("button").click(function() {
    $("#circle-container div").fadeIn();
  });
});

  
  // // // DIV BOX SHOW/HIDE FUNCTION FRoM W3 SCHOOL
  // var x = document.getElementById("box-container");
  // // $("#box-container").append("<div></div>"); //ADD MORE BOXES
  // if (x.style.display === "none") {
  //   x.style.display = "block";
  // } else {
  //   x.style.display = "none";
  // }


//FOR LOOP
for(var step = 0; step < 100; step++) {
 $("#circle-container").append("<div></div>");
};

$("#circle-container div").each(function(){
  var randomColorBoxes = colorPalette[Math.floor(Math.random() *colorPalette.length)]; 
$(this).css("background-color", randomColorBoxes);
});

//Random w & h
$("#circle-container div").click(function(){
  var randomWidth = Math.random() * 200;
  var randomHeight = Math.random() * 150;
  $(this).css("width",randomWidth).css("height",randomHeight)
});



console.log("hello world")



// function myFunction() {
//   var x = document.getElementById("wholebox");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }