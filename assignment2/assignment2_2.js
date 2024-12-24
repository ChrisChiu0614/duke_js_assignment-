// execute https://www.dukelearntoprogram.com//course1/example/index.php
//Exercise 2 - Remove all the red.
var image = new SimpleImage("chapel.png");
print(image);
for(var pixel of image.values()){
    pixel.setRed(0);
}

print(image);