// Your code here
function main() {
	changeTitle();
	colorYellow();

}

// 1. change the greeting from "Hello, World!" to "Hello, Planet Earth!".
function changeTitle() {
  var Title = document.getElementById("greeting");
  Title.innerHTML = "My hello";
}

// 2. set the backgroundColor of each <li> to yellow.
function colorYellow () {
  var liS = document.getElementsByTagName("li");  
  for(var i = 0; i < liS.length; i++) {
  	var liSItem = liS[i];
    liSItem.style.background = "yellow";	
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


// 5. clicking the reset button should remove the selected class from each 
//    <li> and change the image to panic.jpeg.


// when the DOM is loaded, call
window.onload = main;