// execute https://www.dukelearntoprogram.com//course1/example/index.php
//Exercise 4 - Add Thick Black Line to Bottom of Owen
var image = new SimpleImage("astrachan.jpg");
print(image);
// pixel x = 0 y =0 the height need to reduce 1
var height = image.getHeight()-10-1;
for(var pixel of image.values()){
    
   if(pixel.getY()>=height){
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
   }
}
print(image);