
//Exercise 1 - Make a Phrase From Three Words
function phrase3words(value1, value2, value3) {
    return  value1+" "+value2+" "+value3 ;
}

print("Exercise 1 - Make a Phrase From Three Words");
var result1 = phrase3words("smile","at","everyone");
print(result1);
var result2 = phrase3words("everyone","wave", "back");
print(result2);
var result3 = phrase3words("coding","is", "fun");
print(result3);
print("------------------------------------------");

//Exercise 2 - Format a name
print("Exercise 2 - Format a name");
function reformatName(first, last) {
    return last +", "+first;
}
var result = reformatName("Susan", "Rodger");
print(result);
result = reformatName("Robert", "Duvall");
print(result);
print("------------------------------------------");

//Exercise 3 - Number of pixels in an image
print("Exercise 3 - Number of pixels in an image");
function numberPixels(namefile) {
    var someImg = new SimpleImage(namefile);
    var height = someImg.getHeight();
    var width = someImg.getWidth();
    return height*width;
    
}
var result = numberPixels("chapel.png");
print(result);
result = numberPixels("dinos.png");
print(result);
print("------------------------------------------");

//Exercise 4 - Perimeter of an image
print("Exercise 4 - Perimeter of an image");
function perimeter(imageName) {
    var someImg = new SimpleImage(imageName);
    var height = someImg.getHeight();
    var width = someImg.getWidth();
    return (height*2) + (width*2);
}
print(perimeter("rodger.png"));
print("------------------------------------------");

//Exercise 5 - Print the RGB values of a pixel
print("Exercise 5 - Print the RGB values of a pixel");
function printPixel(nameImage, xpos, ypos) {
    var someImg = new SimpleImage(nameImage);
     
    var r = someImg.getRed(xpos,ypos);
    var g = someImg.getGreen(xpos,ypos);
    var b = someImg.getBlue(xpos,ypos);
    print("red is "+r);
    print("green is "+g);
    print("blue is "+b);

}
printPixel("drewgreen.png",10, 10);
printPixel("drewgreen.png",250, 500);

print("------------------------------------------");

//Exercise 6 - Sum of the RGB values for a Pixel
print("Exercise 6 - Sum of the RGB values for a Pixel");

function sumPixel(nameOfImage, xpos, ypos) {
    var someImg = new SimpleImage(nameOfImage);
     
    var r = someImg.getRed(xpos,ypos);
    var g = someImg.getGreen(xpos,ypos);
    var b = someImg.getBlue(xpos,ypos);
    return r+g+b;
}
var answer = sumPixel("drewgreen.png", 250, 500);
print(answer);
answer = sumPixel("drewgreen.png",10, 10);
print(answer);

