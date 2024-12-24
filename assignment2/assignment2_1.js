// execute https://www.dukelearntoprogram.com//course1/example/index.php
//Exercise 1 - Turn the chapel red.
var image = new SimpleImage("chapel.png");
print(image);
for(var pixel of image.values()){
    pixel.setRed(255);
}

print(image);