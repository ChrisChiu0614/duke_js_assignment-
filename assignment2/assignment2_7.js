// execute https://www.dukelearntoprogram.com//course1/example/index.php
//Exercise 7 - Changes in Red
function changeRed(width, height) {
    var picture = new SimpleImage(width, height);
    var red = 0;

    for(var pixel of picture.values() ){
        pixel.setRed(red++);
        if(red>255){
            red=0;
        }
       
    }

    return picture;
}

var result = changeRed(256,200);
print(result);
