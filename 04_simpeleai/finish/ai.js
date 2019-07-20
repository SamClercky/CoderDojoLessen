const randomantwoorden = [
    "Echt waar?",
    "Weet je dat zeker?",
    "Wie weet...",
    "Interessant...",
    "Ik weet het niet of ik er mee eens ben...",
    "Zeker weten!",
    "Misschien",
    "Wat bedoel je daarmee?",
    "Wat wil je daarmee zeggen?",
    "Je hebt waarschijnlijk gelijk.",
    "Onzin! Klopt niets van.",
    "Trouwens, wat was je morgen van plan te doen?",
    "Dat is precies wat ik dacht.",
    "Dat is tegenwoordig een populaire mening.",
    "Dat hoor ik tegenwoordig wel vaker.",
    "Prachtig!",
    "Daar kon je weleens spijt van krijgen.",
    "Denk je dat echt?",
    "Inderdaad...",
    "Dat bedoel ik!",
    "Wie weet..."
];

const chatwoordenboek = {
    "blij": "Ik ben vandaag ook blij.",
    "verdrietig": "Je geraakt er wel uit.",
    "computer": "Computers veroveren de wereld! Je praat er zelfs met één!",
    "muziek": "Heb je het nieuwe album van Lana Del Ray gehoord?",
    "kunst": "Maar wat is kunst nu eigenlijk?",
    "grap": "Ik ken maar één grap: wat doet een plastische chirurg? Patiënten een oor aannaaien",
    "javascript": "Ik hou van programeren!!!",
    "dom": "Ik ben niet dom! Mijn grap(pen) zijn beter dan die van Siri...",
    "weer": "Ik vraag me af of het morgen zonnig zal zijn.",
    "jij": "Houd mij erbuiten!",
    "zeker": "Hoe kun je nu zo zelfverzekerd zijn?",
    "praten": "Praatjes vullen geen gaatjes! Doe iets!",
    "denk": "Maar je kunt ook teveel nadenken",
    "hallo": "Hoe gaat het ermee?",
    "dragen": "Ik draag geen kleren. Ik heb niet eens een verpakking."
};

let berichtenElement = null; // p-tag waar uiteindelijk de conversatie te voorschijn komt
let berichtElement = null; // het bericht dat de gebruiker net heeft ingetikt

let berichten = ""; // de uiteindelijke inhoud van berichtenElement

// Als er een slim antwoord is, returnt de functie dit antwoord anders ""
function woordenboekControle(bericht) {
    bericht = bericht.toLowerCase();
    woorden = bericht.split(" ");

    slimmeAntwoorden = [];

    for (woord of woorden) {
        if (chatwoordenboek.hasOwnProperty(woord)) {
            const antwoord = chatwoordenboek[woord];
            slimmeAntwoorden.push(antwoord);
        }
    }

    if (slimmeAntwoorden.length > 0) {
        const gekozenAntwoord = Math.random() * (slimmeAntwoorden.length - 1);

        return slimmeAntwoorden[Math.round(gekozenAntwoord)];
    } else {
        return "";
    }
}

function onclick(e) {
    e.preventDefault();

    // Zolang de pagina nog niet volledig geladen is, stop met werken
    if (berichtElement == null && berichtenElement == null) return;

    const nieuwBericht = berichtElement.value;
    // Als er geen nieuw bericht is, verwerk het dan niet
    if (nieuwBericht == "") return;

    berichten += "<p>" + nieuwBericht + "</p>"; // Voeg de net verzonden tekst toe aan berichtenElement

    const slimmeReactie = woordenboekControle(nieuwBericht);
    if (slimmeReactie != "") { // als er een slimme reactie is
        berichten += "<p>" + slimmeReactie + "</p>";
    } else {
        const gekozenAntwoord = Math.random() * (randomantwoorden.length - 1);
        berichten += "<p>" + randomantwoorden[Math.round(gekozenAntwoord)] + "</p   >";

        randomantwoorden[Math.round(gekozenAntwoord)] = nieuwBericht; // leer van de gebruiker
    }

    // berichtenElement updaten
    berichtenElement.innerHTML = berichten;

    // berichtElement resetten voor het volgende bericht
    berichtElement.value = "";
}

// Zorg ervoor dat we de elementen kunnen gebruiken
window.onload = function() {
    berichtElement = document.getElementById("bericht");
    berichtenElement = document.getElementById("berichten");
    document.getElementById("knop").onclick = onclick;
}