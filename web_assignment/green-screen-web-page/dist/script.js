var fg_img = null;
var bg_img = null;
var output = null;

function fgUpload() {
  var can = document.getElementById("canvas_fg");
  var input = document.getElementById("fg_finput");
  fg_img = new SimpleImage(input);
  fg_img.drawTo(can);
}

function bgUpload() {
  var can = document.getElementById("canvas_bg");
  var input = document.getElementById("bg_finput");
  bg_img = new SimpleImage(input);
  bg_img.drawTo(can);
}

function doComposite(){
  if(fg_img==null || bg_img==null){
    alert("if do composite, you need to upload the foreground pic and the background pic.");
  }else{
   
    output = new SimpleImage(fg_img.getWidth(), fg_img.getHeight());
    var green_screen;
    for(var pixel of fg_img.values()){
       green_screen = pixel.getRed()+pixel.getBlue();
      var x = pixel.getX();
      var y = pixel.getY();
      if(pixel.getGreen()>green_screen){
        output.setPixel(x,y,bg_img.getPixel(x,y));
      }else{
        output.setPixel(x,y,pixel);
      }
    }
    clearCanvases();
    var can = document.getElementById("canvas_fg");
    output.drawTo(can);
  }
}

function clearCanvases(){
  var can_fg_ctx = document.getElementById("canvas_fg").getContext("2d");
  var can_bg_ctx = document.getElementById("canvas_bg").getContext("2d");
  can_fg_ctx.clearRect(0, 0, fg_img.width, fg_img.height);
  can_bg_ctx.clearRect(0, 0, bg_img.width, bg_img.height);
}

function doAboutme(){
  var aboutme = document.getElementById("about_me");
  if(aboutme.innerHTML==''){
    aboutme.innerHTML='the author is Chris';
  }else{
    aboutme.innerHTML='';
  }
  
}