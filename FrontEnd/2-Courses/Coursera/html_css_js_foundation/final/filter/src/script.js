var canvas;
var image = null;

function uploadImage() {
  //Get the image input
  var imageInstance = document.getElementById("input");
  //Draw the image
  canvas = document.getElementById("canvas");
  image = new SimpleImage(imageInstance);
  image.drawTo(canvas);
}

function makeGray() {
  if (image == null || !image.complete()) {
    alert("image not loaded!")
  }
  
  for (var pxl of image.values()){
    var avgPxl = (pxl.getRed() + pxl.getGreen() + pxl.getBlue())/3;
    pxl.setRed(avgPxl);
    pxl.setGreen(avgPxl);
    pxl.setBlue(avgPxl);
  }
  
  canvas = document.getElementById("canvas");
  image.drawTo(canvas);
}

function makeRed() {
  var threshold = 128;
  if (image == null || !image.complete()) {
    alert("image not loaded!")
  }
  
  for (var pxl of image.values()){
    var avgPxl = (pxl.getRed() + pxl.getGreen() + pxl.getBlue())/3;
    if (avgPxl < threshold) {
      pxl.setRed(2*avgPxl);
      pxl.setGreen(0);
      pxl.setBlue(0);
    } else {
      pxl.setRed(255);
      pxl.setGreen(2*avgPxl - 255);
      pxl.setBlue(2*avgPxl - 255);
    }
  }
  
  canvas = document.getElementById("canvas");
  image.drawTo(canvas);
}

function makeBlue() {
   var threshold = 128;
  if (image == null || !image.complete()) {
    alert("image not loaded!")
  }
  
  for (var pxl of image.values()){
    var avgPxl = (pxl.getRed() + pxl.getGreen() + pxl.getBlue())/3;
    if (avgPxl < threshold) {
      pxl.setRed(0);
      pxl.setGreen(0);
      pxl.setBlue(2*avgPxl);
    } else {
      pxl.setRed(2*avgPxl - 255);
      pxl.setGreen(2*avgPxl - 255);
      pxl.setBlue(255);
    }
  }
  
  canvas = document.getElementById("canvas");
  image.drawTo(canvas);
}