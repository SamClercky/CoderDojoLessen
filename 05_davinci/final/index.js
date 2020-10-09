const resultaat = document.getElementById("resultaat");
const code = document.getElementById("code");
const deresultaat = document.getElementById("deresultaat");
const decode = document.getElementById("decode");
const bruteResult = document.getElementById("brute");

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ?.:!";
const SLEUTEL = 5;

function encrypt(sleutel) {
	let result = "";
	for (let letter of code.value) {
		const index = letters.indexOf(letter);
		const index2 = (index + sleutel) % letters.length;
		result += letters[index2];
	}

	resultaat.innerHTML = result; 
}

encrypt(SLEUTEL);

function decrypt(sleutel) {
	let result = "";
	for (let letter of decode.value) {
		const index = letters.indexOf(letter);
		let index2 = index - sleutel
		if (index2 < 0) { // zorg er voor dat index2 niet kleiner is dan 0
			index2 += letters.length;
		}
		result += letters[index2];
	}
	deresultaat.innerHTML = result;

	return result; // geef resultaat terug
}

decrypt(SLEUTEL);

function brute() {
	bruteResult.innerHTML = ""; // maak leeg
	for (let sleutel in letters) {
		bruteResult.innerHTML += decrypt(sleutel) + "<br>";
	}
}
brute();
