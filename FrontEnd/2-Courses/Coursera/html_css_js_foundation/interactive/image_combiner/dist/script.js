var imageFor = null;
var imageBack = null;
var forCanvas;
var backCanvas;

function uploadFor() {
  // Get the file input
  var inputImage = document.getElementById("inputfor");
  // Get the canvas element
  forCanvas = document.getElementById("cvsimgfor")
  //Draw the image
  imageFor = new SimpleImage(inputImage);
  imageFor.drawTo(forCanvas);
  
}

function uploadBack() {
  // Get the file input
  var inputImage = document.getElementById("inputback");
  // Get the canvas element
  backCanvas = document.getElementById("cvsimgback")
  //Draw the image
  imageBack = new SimpleImage(inputImage);
  imageBack.drawTo(backCanvas);
  
}

function imageComposer() {
  var outImage = new SimpleImage(imageFor.getWidth(), imageFor.getHeight());
  var greenThreshold = 150;
  for (var pxl of imageFor.values()){
    var x = pxl.getX();
    var y = pxl.getY();
    if (pxl.getGreen() > greenThreshold) {
      var backpxl = imageBack.getPixel(x, y);
      outImage.setPixel(x, y, backpxl);
    } else {
      outImage.setPixel(x, y, pxl);
    }
  }
  return outImage;
}

function clean(canvas) {
  var cxt = canvas.getContext("2d");
  cxt.clearRect(0, 0, canvas.width, canvas.height);
}

function cleanCanvases() {
  clean(forCanvas);
  clean(backCanvas);
}

function greenImageMaker() {
  
  if (imageFor == null || !imageFor.complete()) {
    alert("foreground image not loaded!"); 
  }
  if (imageBack == null || !imageBack.complete()) {
    alert("background image not loaded!"); 
  }
  cleanCanvases();
  var fImage = imageComposer();
  fImage.drawTo(forCanvas);
}