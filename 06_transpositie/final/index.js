const resultaat = document.getElementById("resultaat");
const code = document.getElementById("code");
const deresultaat = document.getElementById("deresultaat");
const decode = document.getElementById("decode");
const bruteResult = document.getElementById("brute");

const SLEUTEL = 3;

function encrypt(sleutel) {
	let result = "";

	const bericht = code.value;
	const aantalKolommen = sleutel;
	const aantalRijen = Math.ceil(bericht.length / aantalKolommen);

	for (let kolom = 0; kolom < aantalKolommen; kolom++) {
		for (let rij = 0; rij < aantalRijen; rij++) {
			const positie = kolom + rij*aantalKolommen;
			result += bericht[positie] || "";
		}
	}

	resultaat.innerHTML = result;
}

encrypt(SLEUTEL);

function decrypt(sleutel) {
	let result = "";

	// merk op dat rijen en kolommen verwisseld zijn
	const origineelBericht = decode.value;
	const aantalRijen = sleutel;
	const aantalKolommen = Math.ceil(origineelBericht.length / aantalRijen);

	// Soms hebben we te veel doosje ==> vervangen door '_'
	// We veranderen het bericht zodat deze altijd aantalRijen*aantalKolommen tekens heeft
	let bericht = "";
	let teVeelDoosjes = aantalRijen*aantalKolommen - origineelBericht.length;
	let origineelBerichtIndex = 0;
	for (let i = 0; i < aantalKolommen*aantalRijen; i++) {
		if ((i+1)%aantalKolommen == 0 && Math.floor(i/aantalKolommen) == aantalRijen-teVeelDoosjes) {
			bericht += "_";
			teVeelDoosjes--;
		} else {
			bericht += origineelBericht[origineelBerichtIndex];
			origineelBerichtIndex++;
		}
	}

	for (let kolom = 0; kolom < aantalKolommen; kolom++) {
		for (let rij = 0; rij < aantalRijen; rij++) {
			const positie = kolom + rij*aantalKolommen;
			result += bericht[positie] || "";
		}
	}


	deresultaat.innerHTML = result;

	return result;
}

decrypt(SLEUTEL);

function brute() {
	bruteResult.innerHTML = ""; // maak leeg

	const aantalMogelijkheden = decode.value.length;

	for (let sleutel = 1; sleutel < aantalMogelijkheden; sleutel++) {
		bruteResult.innerHTML += decrypt(sleutel) + "<br>";
	}
}
//brute();
