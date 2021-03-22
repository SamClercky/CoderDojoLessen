const resultaat = document.getElementById("resultaat");
const code = document.getElementById("code");
const deresultaat = document.getElementById("deresultaat");
const decode = document.getElementById("decode");
const bruteResult = document.getElementById("brute");
const bruteSlimResult = document.getElementById("bruteSlim");

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

// In taal zijn er bepaalde letters die vaker voorkomen dan andere.
// Als we bijvoorbeeld het aantal keer 'e' tellen in een bericht kunnen we
// al heel wat berichten schrappen (het bericht met de meeste keer 'e' heeft
// de meeste kans om de boodschap te zijn)
function bruteSlim() {
	bruteSlimResult.innerHTML = ""; // maak leeg
	for (let sleutel in letters) {
		let mogelijkBericht = decrypt(sleutel);

		let aantalE = 0;
		for (let letter of mogelijkBericht) {
			if (letter == 'e') { aantalE = aantalE + 1;}
		}

		// Als we geen e vinden ==> optie vergeten
		if (aantalE > 0) {
			bruteSlimResult.innerHTML += aantalE + " " + mogelijkBericht + "<br>";
		}
	}
}
