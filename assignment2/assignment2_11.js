/*
execute https://www.dukelearntoprogram.com//course1/example/index.php 
Write code to change the Duke blue devil (the image below on the left) to be yellow (as in the image below on the right). 
 */

var image = new SimpleImage("duke_blue_devil.png");
var red = 0;
var green = 51;
var blue = 227;

function changeColor(pixel){
    var r = pixel.getRed();
    var g = pixel.getGreen();
    var b = pixel.getBlue();
    if(r!=255&&g!=255&&b!=255){
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(0);
    }
    return pixel;
}

for(var pixel of image.values()){
    pixel = changeColor(pixel);
    
    
}
print(image)