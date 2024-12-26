/*
execute https://www.dukelearntoprogram.com//course1/example/index.php
Write a JavaScript function named swapRedGreen with one parameter pixel (representing a single pixel). 
This function should swap the red and green values of the pixel. For example, if you have a pixel with red = 255, green = 100, blue = 150, after calling swapRedGreen on that pixel its new RGB values would be red = 100, green = 255, blue = 150. 
*/

var image = new SimpleImage("hilton.jpg");
function swapRedGreen(pixel){
    var red = pixel.getRed();
    var green = pixel.getGreen();
    var temp = red;
    red = green;
    green = temp;
    
    pixel.setRed(red);
    pixel.setGreen(green);
    return pixel;
}

for(var pixel of image.values()){
    pixel = swapRedGreen(pixel);
    
}
print(image)