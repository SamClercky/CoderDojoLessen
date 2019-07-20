// De lijst met alle afbeeldingen en hun titels die we gaan gebruiken
const afbeeldingen = [
    {url: "https://www.androidplanet.nl/wp-content/uploads/2016/10/achtergronden-580x375.jpg", titel: "Mooie gletsjers", tag: null},
    {url: "https://www.decoratiehuren.be/wp-content/uploads/2019/03/achtergrond-Apres-ski-kerst-4.jpg", titel: "Winter", tag: null},
    {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRItc5OQeSWzHl5O6uQ-Tw7cLGghdZZAAVRBLF3eDJifPCEc4F7", titel: "Mooi strand", tag: null}
];

let fotoIndex = 0;
let beschrijving = null;

function maakIMG(afbeelding, ouder) { // 1 afbeelding vanuit de lijst afbeeldingen
    let img = document.createElement("img"); // maak een nieuwe img-tag (Opgelet: de tag is nog niet zichtbaar)
    img.src = afbeelding.url; // We plaatsen de src-attribuut
    img.setAttribute("title", afbeelding.titel); // We plaatsen de title-attribuut

    ouder.appendChild(img); // Nu plaatsen we het element op de webpagina (in de ouder)

    return img; // We returnen nu de net aangemaakte img-tag opdat we het later kunnen hergebruiken
}

function init() {
    const fotosElement = document.getElementById("fotos");
    // Maak alle img-tags aan en sla ze op in afbeeldingen
    afbeeldingen.map(function(afbeelding) {
        afbeelding.tag = maakIMG(afbeelding, fotosElement);
        return afbeelding;
    });

    beschrijving = document.getElementById("beschrijving");

    transition();

    setInterval(transition, 5000);
}

function transition() {
    fotoIndex = fotoIndex + 1;
    if (fotoIndex >= afbeeldingen.length) {
        fotoIndex = 0;
    }

    beschrijving.innerHTML = afbeeldingen[fotoIndex].titel;

    afbeeldingen.forEach(function(afbeelding, index) {
        if (index == fotoIndex) {
            afbeelding.tag.setAttribute("class", "");
        } else {
            afbeelding.tag.setAttribute("class", "transparant");
        }
    })
}

window.onload = init;