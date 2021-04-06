function upload() {
  
  // Get the file input
  var inputImage = document.getElementById("inputImage");
  
  // Get the canvas element
  var canvas = document.getElementById("canvas")
  
  //Draw the image
  var image = new SimpleImage(inputImage);
  image.drawTo(canvas);
  
}