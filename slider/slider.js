var images = ['slider_pic/a.png', 'slider_pic/b.png' , 'slider_pic/c.png', 'slider_pic/d.png', 'slider_pic/e.png'];
var num = 0

function next(){
    var slider = document.getElementById('#images');
    num++;
    if (num >= images.length){
        num = 0;
    }
    slider.src = images[num];
}

function prev(){
    var slider = document.getElementById('#images');
    num--;
    if (num < 0){
        num = images.length-1;
    }
    slider.src = images[num];
}
