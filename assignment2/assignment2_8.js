// execute https://www.dukelearntoprogram.com//course1/example/index.php
/*OPTIONAL: ONE CHANGE
Modify the function changeRed so that numbers for blue and green can also be passed in. Then the call with blue set to 200 and green set to 100 results in the picture:
*/
function changeRed(width, height) {
    var picture = new SimpleImage(width, height);
    var green = 200;
    var blue = 100;
    var red =0;

    for(var pixel of picture.values() ){
        pixel.setRed(red++);
        pixel.setGreen(green);
        pixel.setBlue(blue);
        if(red>255){
           red = 0;
        }
       
    }

    return picture;
}