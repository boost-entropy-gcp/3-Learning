function doRed() {
  //Gets the canvas element;
  var canvas = document.getElementById("cvs");
  //Sets the canvas background color as red;
  canvas.style.backgroundColor = "red";
}

function doColor() {
  //Gets the canvas element;
  var canvas = document.getElementById("cvs");
  //Gets the color input element;
  var color = document.getElementById("botton2");
  canvas.style.backgroundColor = color.value;
}

function doSquare() {
  //Get the slider element, then its value.
  var slider = document.getElementById("shaper");
  var value = slider.value;
  //Get the canvas element, then its context.
  var canvas = document.getElementById("cvs");
  var context = canvas.getContext("2d");
  //Use the context.fillStyle and context.fillRect methods.
  context.clearRect(0,0,canvas.width,canvas.height);
  context.fillStyle = "orange";
  context.fillRect(10,10,value,value);
  context.fillRect(parseInt(value)+20,10,value,value);
  context.fillRect(value*4,10,value,value);
}