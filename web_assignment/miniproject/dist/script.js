var file = null;
var image = null;
var grayImage = null;
var redImage = null;
var rainbowImage = null;
var blurImage = null;
var canvas = null;

function init() {
  image = null;
  grayImage = null;
  redImage = null;
  rainbowImage = null;
  blurImage = null;
  canvas = null;
}

function doUpload(callback) {
  init();
  canvas = document.getElementById("canvas");
  file = document.getElementById("finput");
  image = new SimpleImage(file);
  grayImage = new SimpleImage(file);
  redImage = new SimpleImage(file);
  rainbowImage = new SimpleImage(file);
  blurImage = new SimpleImage(file);
  image.drawTo(canvas);
  setTimeout(() => {
    if (callback) callback();
  }, 500);
}

function showSize() {
  if (image !== null) {
    var sizeOutput = document.getElementById("sizeOutput");
    var width = image.getWidth();
    var height = image.getHeight();
    sizeOutput.innerHTML = width + "x" + height;
  }
}

function imageIsLoaded() {
  if (image == null) {
    return false;
  }
  return image.complete();
}

function doReset() {
  if (image != null) {
    image.drawTo(canvas);
    grayImage = new SimpleImage(file);
    redImage = new SimpleImage(file);
    rainbowImage = new SimpleImage(file);
    blurImage = new SimpleImage(file);
  }
}

function doGray() {
  if (imageIsLoaded(grayImage)) {
    filterGray();
    grayImage.drawTo(canvas);
  }
}

function filterGray() {
  for (var pixel of grayImage.values()) {
    var avg = pixel.getRed() + pixel.getGreen() + pixel.getBlue() / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
}

function doRed() {
  if (imageIsLoaded(redImage)) {
    filterRed();
    redImage.drawTo(canvas);
  }
}

function filterRed() {
  for (var pixel of redImage.values()) {
    var avg = pixel.getRed() + pixel.getGreen() + pixel.getBlue() / 3;
    if (avg <= 128) {
      pixel.setRed(avg * 2);
      pixel.setGreen(0);
      pixel.setBlue(0);
    } else {
      pixel.setRed(255);
      pixel.setGreen(avg * 2 - 255);
      pixel.setBlue(avg * 2 - 255);
    }
  }
}
function doRainbow() {
  if (imageIsLoaded(rainbowImage)) {
    filterRainbow();
    rainbowImage.drawTo(canvas);
  }
}
function setPixelForRainbow(pixel, avg, r, g, b) {
  if (avg < 128) {
    pixel.setRed(r);
    pixel.setGreen(g);
    pixel.setBlue(b);
  } else {
    pixel.setRed(r);
    pixel.setGreen(g);
    pixel.setBlue(b);
  }
}

function filterRainbow() {
  var avg_h = rainbowImage.getHeight() / 7;

  for (var pixel of rainbowImage.values()) {
    var y = pixel.getY();
    var avg = pixel.getRed() + pixel.getGreen() + pixel.getBlue() / 3;
    if (y < avg_h) {
      if (avg < 128) {
        setPixelForRainbow(pixel, avg, 2 * avg, 0, 0);
      } else {
        setPixelForRainbow(pixel, avg, 255, 2 * avg - 255, 2 * avg - 255);
      }
    } else if (y < avg_h * 2) {
      if (avg < 128) {
        setPixelForRainbow(pixel, avg, 2 * avg, 0.8 * avg, 0);
      } else {
        setPixelForRainbow(pixel, avg, 255, 1.2 * avg - 51, 2 * avg - 255);
      }
    } else if (y < avg_h * 3) {
      if (avg < 128) {
        setPixelForRainbow(pixel, avg, 2 * avg, 2 * avg, 0);
      } else {
        setPixelForRainbow(pixel, avg, 255, 255, 2 * avg - 255);
      }
    } else if (y < avg_h * 4) {
      if (avg < 128) {
        setPixelForRainbow(pixel, avg, 0, 2 * avg, 0);
      } else {
        setPixelForRainbow(pixel, avg, 2 * avg - 255, 255, 2 * avg - 255);
      }
    } else if (y < avg_h * 5) {
      if (avg < 128) {
        setPixelForRainbow(pixel, avg, 0, 0, 2 * avg);
      } else {
        setPixelForRainbow(pixel, avg, 2 * avg - 255, 2 * avg - 255, 255);
      }
    } else if (y < avg_h * 6) {
      if (avg < 128) {
        setPixelForRainbow(pixel, avg, 0.8 * avg, 0, 2 * avg);
      } else {
        setPixelForRainbow(pixel, avg, 1.2 * avg - 51, 2 * avg - 255, 255);
      }
    } else {
      if (avg < 128) {
        setPixelForRainbow(pixel, avg, 1.6 * avg, 0, 1.6 * avg);
      } else {
        setPixelForRainbow(
          pixel,
          avg,
          0.4 * avg + 153,
          2 * avg - 255,
          0.4 * avg + 153
        );
      }
    }
  }
}

function doBlur() {
  if (imageIsLoaded(blurImage)) {
    filterBlur();
    blurImage.drawTo(canvas);
  }
}

function filterBlur() {
  for (var pixel of blurImage.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    var newPixel = getNearbyPixel(x, y);
    blurImage.setPixel(x, y, newPixel);
  }
}

function getNearbyPixel(x, y) {
  var radius = 10;
  var dx = Math.random() * 2 * radius - radius;
  var dy = Math.random() * 2 * radius - radius;
  var newX = ensureInImage(x + dx, blurImage.getWidth());
  var newY = ensureInImage(y + dy, blurImage.getHeight());
  return blurImage.getPixel(newX, newY);
}

function ensureInImage(coord, size) {
  if (coord < 0) {
    return 0;
  } else if (coord > size) {
    return size - 1;
  } else {
    return coord;
  }
}
function doAboutme(){
  var aboutme = document.getElementById("about_me");
  if(aboutme.innerHTML==''){
    aboutme.innerHTML='the author is Chris';
  }else{
    aboutme.innerHTML='';
  }
  
}