var container = document.getElementById("container");
var layerOne = document.getElementById('layerOne');
var layerTwo = document.getElementById('layerTwo');
var layerThree = document.getElementById('layerThree');
var layerFour = document.getElementById('layerFour');
var layerFive = document.getElementById('layerFive');
var mouseX = 0;
var mouseY = 0;
var centerScreen = (900 / 2) - (1200/2);

window.addEventListener("mousemove", windowMouseMove)

function windowMouseMove(event){
    mouseX = event.pageX-container.offsetLeft;
    mouseY = event.pageY;
    layerOne.style.left = (-mouseX  * 0.1) + centerScreen + "px";
    layerTwo.style.left = (-mouseX  * 0.085) + centerScreen + "px";
    layerThree.style.left = (-mouseX  * 0.07) + centerScreen + "px";
    layerFour.style.left = (-mouseX  * 0.055) + centerScreen + "px";
    layerFive.style.left = (-mouseX  * 0.04) + centerScreen + "px";

}