function doBlue() {
  var canvas = document.getElementById("div1");
  canvas.style.backgroundColor="blue";
  var context = canvas.getContext("2d");
  context.fillStyle = "yellow";
  context.fillRect(10, 10, 60, 60);
  context.fillRect(80, 10, 60, 60);
  
  context.fillStyle = "black";
  context.font = "20px Verdena"
  context.fillText("Hello", 15, 45);
}

function doRed() {
  var canvasTwo = document.getElementById("div2");
  canvasTwo.style.backgroundColor="red"
  
  var canvasOne = document.getElementById("div1");
  var context = canvasOne.getContext("2d");
  context.clearRect(10, 10, 60, 60);
  context.clearRect(80, 10, 60, 60);
}