// Dit is een optioneel deel maar vergemakkelijkt later de code
// De variabelen verwijzen naar de verschillende elementen in de HTML code
let resultaat = document.getElementById("resultaat");
let code = document.getElementById("code");
let deresultaat = document.getElementById("deresultaat");
let decode = document.getElementById("decode");
let bruteResult = document.getElementById("brute");

// De sleutel van het bericht moet normaal geheim worden gehouden (wachtwoord)
let SLEUTEL = 3;

// Versleutelt het bericht dat wordt meegegeven via een transpositie
// abcd ->  a | b | c | -> a d b _ c _
//          d | _ | _ |
function encrypt(sleutel, bericht) {
	let result = "";

	result = bericht; // encryptie magie gebeurt hier

	return result;
}

// Functie die wordt aangeroepen vanuit de HTML en toont het resultaat op het 
// scherm
function encryptBericht() {
	let bericht = code.value;

	resultaat.innerHTML = encrypt(SLEUTEL, bericht);
}

// Decryptie is hetzelfde als encryptie maar met een andere sleutel:
// Nieuwe sleutel: lengte bericht / originele sleutel
// a d b _ c _ ->  a | d | -> a b c d _ _
//                 b | _ |
//                 c | _ |
function decrypt(sleutel, bericht) {
	// magie gebreurt hier

	return result;
}

// Functie die wordt aangeroepen vanuit de HTML en toont het resultaat op het 
// scherm
function decryptBericht() {
	let bericht = decode.value;

	deresultaat.innerHTML = decrypt(SLEUTEL, bericht);
}

// Breken van de code: Snel uitproberen van alle mogelijkheden en het resultaat
// zo vinden.
function brute() {
	// magie gebeurt hier
}
