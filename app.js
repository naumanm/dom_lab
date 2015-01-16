// DOM Lab, January 15th 2015

// michael nauman


// Your code here
function main() {
	changeTitle();
	colorYellow();
}

// 1. change the greeting from "Hello, World!" to "Hello, Planet Earth!".
function changeTitle() {
  document.getElementById("greeting").innerHTML = "My hello";
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
	if ("LI" == event.target.tagName){
		event.target.className += "selected";
	}
}

document.addEventListener("click", changeClass);


// 4. change the image to be the last clicked food item.
function changeImage() {
	if ("LI" == event.target.tagName){
		var imageName = event.target.innerHTML;
		var pic = document.getElementsByTagName("img");
		var picPath = "images/" + imageName + ".jpeg";
		pic.src = picPath;

		console.log(pic);
		console.log(imageName);
		console.log(pic.src);
	}
}

document.addEventListener("click", changeImage);

// 5. clicking the reset button should remove the selected class from each 
//    <li> and change the image to panic.jpeg.


// when the DOM is loaded, call
window.onload = main;