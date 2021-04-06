var image;

function upload() {
  
  // Get the file input
  var inputImage = document.getElementById("inputImage");
  // Get the canvas element
  var canvas = document.getElementById("canvas")
  
  //Draw the image
  image = new SimpleImage(inputImage);
  image.drawTo(canvas);
  
}

function makeGray() {
  
  // Convert picture to Gray
  for (var pxl of image.values()) {
    var avgPxl = (pxl.getRed() + pxl.getGreen() + pxl.getBlue())/3;
    pxl.setRed(avgPxl);
    pxl.setGreen(avgPxl);
    pxl.setBlue(avgPxl);
  }
  
   // Get the canvas element
  var canvas = document.getElementById("canvas")
  
  //Draw the image
  image.drawTo(canvas);
}