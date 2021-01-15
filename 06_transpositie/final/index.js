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
	const bericht = decode.value;
	const aantalRijen = sleutel;
	const aantalKolommen = Math.ceil(bericht.length / aantalRijen);

	// Soms hebben we te veel doosje ==> vervangen door '_'
	// We veranderen het bericht zodat deze altijd aantalRijen*aantalKolommen tekens heeft
	const teVeelDoosjes = aantalRijen*aantalKolommen - bericht.length;
	let nogTeVindenDoosjes = teVeelDoosjes;

	for (let kolom = 0; kolom < aantalKolommen; kolom++) {
		for (let rij = 0; rij < aantalRijen; rij++) {
			if (kolom >= aantalKolommen - 2 && rij >= aantalRijen-nogTeVindenDoosjes) {
				nogTeVindenDoosjes--;
				continue;
			} else {
				const positie = kolom + rij*aantalKolommen;
				const voorbijeDoosjes = rij-(aantalRijen-teVeelDoosjes);
				result += bericht[positie] || "";
			}
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
