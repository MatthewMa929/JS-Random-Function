let foodArr = ["Mango", "Potato", "Pizza", "Sushi", "Salad"];
let executeButton = document.getElementById("executeButton");
let outputStr = document.getElementById("output");
let inputStr = document.getElementById("input");

function generate(name) {
	var randInt = Math.floor(Math.random() * foodArr.length);
	var msg = name + ", you should eat a " + foodArr[randInt] + " today!";
	/*alert(msg);*/
	outputStr.innerHTML = msg;
}

function restyle() {
	var randColors = ["red", "orange", "yellow"];
	var randFonts = ["Arial", "sans-serif", "Times New Roman"];
	var randSizes = ["10px", "20px", "30px"];

	var randInt1 = Math.floor(Math.random() * randColors.length);
	var randInt2 = Math.floor(Math.random() * randFonts.length);
	var randInt3 = Math.floor(Math.random() * randSizes.length);
	outputStr.style.color = randColors[randInt1];
	outputStr.style.fontFamily = randFonts[randInt2];
	outputStr.style.fontSize = randSizes[randInt3];
}

executeButton.addEventListener("click", function() {
    var currentInputText = input.value;
    generate(currentInputText);
    restyle();
});