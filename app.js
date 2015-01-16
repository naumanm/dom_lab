// DOM Lab, January 15th 2015

// michael nauman

// wait for DOM to load then fire off main
window.onload = main;

function main() {
  changeTitle();
  colorYellow();

  // initialize all Event Listeners
  document.getElementById("essentials").addEventListener("click", changeClass);
  document.querySelector("img").addEventListener("click", changeImage);
  document.getElementById("reset").addEventListener("click", myReset);
}

// 1. change the greeting from "Hello, World!" to "Hello, Planet Earth!".
function changeTitle() {
  document.getElementById("greeting").innerHTML = "Hello, Planet Earth";
}

// 2. set the backgroundColor of each <li> to yellow.
function colorYellow () {
  var liS = document.getElementsByTagName("li");  
  for(var i = 0; i < liS.length; i++) {
    liS[i].style.background = "yellow";	
  }
}

// 3. add the class of selected to an <li> when it is clicked.
function changeClass(){
  event.target.setAttribute("class", "selected");
  document.querySelector("img").setAttribute("src", "images/" + event.target.innerHTML + ".jpeg");
}

// 4. change the image to be the last clicked food item.
function changeImage() {
  var imageName = event.target.innerHTML;
  var picPath = "./images/" + imageName + ".jpeg";
  document.querySelector("img").setAttribute("src", picPath);
}

// 5. clicking the reset button should remove the selected class from each 
//  <li> and change the image to panic.jpeg.
function myReset () {
  var reset = document.getElementById("reset");
  console.log("push buttons");
  document.querySelector("img").setAttribute("src", "./images/panic.jpeg");

// TODO: remove the strike through for all the LI's
}
