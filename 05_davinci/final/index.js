const resultaat = document.getElementById("resultaat");
const code = document.getElementById("code");

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ?.:!";
const sleutel = 5;

let result = "";
for (let letter of code.value) {
	const index = letters.indexOf(letter);
	const index2 = (index + sleutel) % letters.length;
	result += letters[index2];
}

resultaat.innerHTML = result; 
