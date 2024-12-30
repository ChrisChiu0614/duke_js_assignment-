var img;
function upload() {
  var can = document.getElementById("canvas");
  var input = document.getElementById("finput");
  img = new SimpleImage(input);
  img.drawTo(can);
}

function makeGray() {
  if (img != undefined) {
    var can = document.getElementById("canvas_gray");
    for (var pixel of img.values()) {
      var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
    }
    img.drawTo(can);
  } else {
    alert("upload one picture, first.");
  }
}