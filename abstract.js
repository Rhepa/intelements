// DECLARING COLORS
var lightblue ="#33C7F7";
var pink="#ff6699";
var darkblue= "#2C439B";
var violet= "#25255f";
var yellow= "#ffcc99";

// COLOR PALLETTE ARRAY
var colorPalette= [lightblue, pink, lightblue, violet, yellow];
var opacity=[]
var randomColor = Math.floor(Math.random() *colorPalette.length); 

//FOR LOOP
for(var step = 10; step < 100; step++) {
 $("#circle-container").append("<div></div>");
};

// RANDOM COLOR ASSIGNED
$("#circle-container div").each(function(){
  var randomColorBoxes = colorPalette[Math.floor(Math.random() *colorPalette.length)]; 
  $(this).css("background-color", randomColorBoxes);
});

//RANDOM WIDTH/HEIGHT
$("#circle-container div").click(function(){
  var randomWidth = Math.random() * 200;
  var randomHeight = Math.random() * 200;
  $(this).css("width",randomWidth).css("height",randomHeight)
});

// HIDE/SHOW BUTTON
$("#circle-container").ready(function() {
  $("#circle-container div").click(function() {
    $(this).fadeOut();
  });
  $("button").click(function() {
    $("#circle-container div").fadeIn();
  });
});