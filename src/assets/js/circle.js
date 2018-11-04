var x;
var y;
export function circle(position){
    x = position.clientX;
    y = position.clientY;
    console.log("X: ", x, " Y: ", y);
    moveCircle();
}

function moveCircle(){
    document.getElementById("circle1").style.left = x + "px";
}

