/*
execute https://www.dukelearntoprogram.com//course1/example/index.php
The red stripe is made by changing the red component of all the pixels in the left vertical third to 255, while leaving the green and blue components as their values in the original image. 
The green and blue stripes are made similarly, but instead of modifying the red component of each pixel in the correct part of the image you will modify the green or blue component. 
*/
var image = new SimpleImage("hilton.jpg");
var width = image.getWidth()/3;
for(var pixel of image.values()){
    if(pixel.getX()<width){
        pixel.setRed(255);
    }else if(pixel.getX()>(width*2)){
        pixel.setBlue(255);
    }else{
        pixel.setGreen(255);
    }
    
}
print(image)