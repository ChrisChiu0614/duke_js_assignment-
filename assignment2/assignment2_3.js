// execute https://www.dukelearntoprogram.com//course1/example/index.php
//Exercise 3 - Turn the eggs less red.
var image = new SimpleImage("eastereggs.jpg");
print(image);
for(var pixel of image.values()){
    var red = pixel.getRed();
    if(red>70){
        pixel.setRed(70);
    }
}
print(image);