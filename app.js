var userInput = document.getElementsById("input")[0].value;

var text = document.getElementsById("text")[0];

var response = text.value;

var locations = ["Oahu", "Hawaii", "Big Island", "Maui", "Lana'i"];

userInput.addEventListener("keyup", function(inputQuestion){
	if(response.includes(locations[i]).keyCode === 13){
		document.getElementById("text").innerHTML = ("Yes, you are correct.")
	}

		

}