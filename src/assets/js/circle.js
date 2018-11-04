//1483258500
//1514557800
//1304

var x;
var y;
var check = false;
export function circle(position){
    x = position.clientX;
    //if(check === true){
        moveCircle();
    //}
}

export function checkCircle(){
    check = true;
}

export function circleOut(){
    //check = false;
}

function moveCircle(){
    if(x > 1000){
        x = 1000;
    }
    console.log("X: ", x);
    document.getElementById("circle1").style.left = x + "px";
}

