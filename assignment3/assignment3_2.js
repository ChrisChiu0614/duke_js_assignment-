/*
execute https://www.dukelearntoprogram.com//course1/example/index.php
Part 3
Write a function named setBlack that has one parameter pixel (representing a single pixel) and returns pixel with its red, green, and blue components changed so that the pixel’s color is black.
Now you will write another function named addBorder. This function will add a black border to an image, such as in the following example:
  On the left, we have the original image, and on the right, we have modified the image by giving it a black border that is 10 pixels thick. Note that the image size of the image with the border is the same as the original image because the border is not added around the outside of the original image, instead it covers up some of the original image.
*/

var image = new SimpleImage("smallpanda.png");
var w = image.getWidth();
var h = image.getHeight();

function setBlack(pixel){
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
    return pixel;
}

for(var pixel of image.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    if(x<w){
        if(y<10 || y>h-10){
            setBlack(pixel);
        }
    }
    if(y<h){
        if(x<10 || x>w-10){
             setBlack(pixel);
        }
    }
}

print(image);