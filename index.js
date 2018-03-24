var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("body");
var gradient = document.querySelector("h3");
var button = document.querySelector("#suprise");


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function backgroundGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " 
	+ color2.value +")";
   gradient.textContent = body.style.background +";";

}
function changeColor(){
    color1.value = getRandomColor();
    color2.value = getRandomColor();
	body.style.background = "linear-gradient(to right," + color1.value + ", "
	+ color2.value + ")";
	gradient.textContent = body.style.background +";";
}


color1.addEventListener("input", backgroundGradient);
color2.addEventListener("input", backgroundGradient);
button.addEventListener("click", changeColor);