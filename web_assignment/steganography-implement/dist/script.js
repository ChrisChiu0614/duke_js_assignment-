var pic = null;
var pic_hide = null;
var resize_pic_hide = null;
var canvas = null;
var canvas_hide = null;
var output = null;

function uploadOriginal() {
  canvas = document.getElementById("canvas");
  var input = document.getElementById("pic");
  pic = new SimpleImage(input);
  pic.drawTo(canvas);
}
function uploadHide() {
  if (pic == null) {
    alert("upload original picture first.");
    document.getElementById("hide_pic").value = "";
  } else {
    canvas_hide = document.getElementById("canvas_hide");
    var input = document.getElementById("hide_pic");
    pic_hide = new SimpleImage(input);
    pic_hide.drawTo(canvas_hide);
  }
}
function doEncoder() {
  if (pic == null || pic_hide == null) {
    alert("if do encoder, you need to upload picture.");
  } else {
    resize_pic_hide = crop(pic_hide, pic.getWidth(), pic.getHeight());
    output = new SimpleImage(pic.getWidth(), pic.getHeight());
    for (var pixel of output.values()) {
      var x = pixel.getX();
      var y = pixel.getY();
      changePix(x, y, pixel);
      output.setPixel(x, y, pixel);
    }
    output.drawTo(canvas);
    resize_pic_hide.drawTo(canvas_hide);
    //clearCanvas(pic_hide,canvas_hide);
  }
}
function shift(pic_pix_color, pic_hide_pix_color) {
  var h_color = pic_pix_color & 0xF0;
  var l_color = pic_hide_pix_color >>4;
  var color = h_color | l_color;
  if (color > 255 || color < 0) {
    console.log("convert color error:" + color);
    color = 0;
  }
  return color;
}
function changePix(x, y, pixel) {
  var pic_pix = pic.getPixel(x, y);
  var pic_hide_pix = resize_pic_hide.getPixel(x, y);
  var new_red = shift(pic_pix.getRed(), pic_hide_pix.getRed());
  var new_green = shift(pic_pix.getGreen(), pic_hide_pix.getGreen());
  var new_blue = shift(pic_pix.getBlue(), pic_hide_pix.getBlue());
  pixel.setRed(new_red);
  pixel.setGreen(new_green);
  pixel.setBlue(new_blue);
}

function crop(image, width, height) {
  var newImage = new SimpleImage(width, height);
  var originalWidth = image.getWidth();
  var originalHeight = image.getHeight();
  for (var pixel of newImage.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    if (x < originalWidth && y < originalHeight) {
      var originalPix = image.getPixel(x, y);
      newImage.setPixel(x, y, originalPix);
    }
  }

  return newImage;
}
function clearCanvas(image,canvas){
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0,0,image.getWidth(),image.getHeight());
}

function doTest(){
  if(output!=null){
    var pic_pix = pic.getPixel(0,0);
    var output_pix = output.getPixel(0,0);
    var resize_pic_hide_pix = resize_pic_hide.getPixel(0,0);
    alert("original picture RGB:"+pic_pix);
    alert("hide picture RGB:"+resize_pic_hide_pix);
    alert("steganography picture RGB:"+output_pix);
  }
}

function doDecoder(){
  if(output!=null){
    var decoder_pic = new SimpleImage(output.getWidth(),output.getHeight());
    for(var pixel of decoder_pic.values()){
      var x = pixel.getX();
      var y = pixel.getY();
      var output_pix = output.getPixel(x,y);
      // decoder rgb using & operator 0000 1111 be lock low 4 bit
      pixel.setRed(output_pix.getRed()&0x0F);
      pixel.setGreen(output_pix.getGreen()&0x0F);
      pixel.setBlue(output_pix.getBlue()&0x0F);
    }
    decoder_pic.drawTo(canvas);
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