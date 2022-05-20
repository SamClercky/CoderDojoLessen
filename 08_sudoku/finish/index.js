let spelElement = document.getElementById("spel");
let sudokuVeld = [];

for (let rij = 0; rij < 3; rij++) {
    let kolomElement = document.createElement("div");
    kolomElement.className = "rij";
    let kolomLijst = [];
    for (let kolom = 0; kolom < 3; kolom++) {
        let vierkantElement = document.createElement("div");
        vierkantElement.className = "vierkant";
        let vierkantLijst = [];
        for (let item = 0; item < 9; item++) {
            let itemInput = document.createElement("input");
            itemInput.type = "number";
            itemInput.maxLength = 1;
            vierkantLijst.push(itemInput);
            vierkantElement.appendChild(itemInput);
        }
        kolomLijst.push(vierkantLijst);
        kolomElement.appendChild(vierkantElement);
    }

    sudokuVeld.push(kolomLijst);
    spelElement.appendChild(kolomElement);
}

function checkRij(rijNummer) {
    let sudokuRijIndex = Math.floor(rijNummer / 3);
    let sudokuSubRij = rijNummer % 3;

    let alGezien = {};
    for (let item = 0; item < 9; item++) {
        let sudokuKolomIndex = Math.floor(item / 3);
        let sudokuSubKolom = item % 3;

        let inputElement = sudokuVeld[sudokuRijIndex][sudokuKolomIndex][3*sudokuSubRij + sudokuSubKolom];
        let waarde = Number.parseInt(inputElement.value);
        if (Number.isNaN(waarde) || alGezien[waarde] == undefined) {
            alGezien[waarde] = 1;
        } else {
            return false;
        }
    }

    return true;
}

function checkKolom(kolomNummer) {
    let kolomIndex = Math.floor(kolomNummer / 3);
    let subKolom = kolomNummer % 3;

    let alGezien = {};
    for (let item = 0; item < 9; item++) {
        let rijIndex = Math.floor(item / 3);
        let subRij = item % 3;

        let inputElement = sudokuVeld[rijIndex][kolomIndex][3*subRij + subKolom];
        let waarde = Number.parseInt(inputElement.value);
        if (Number.isNaN(waarde) || alGezien[waarde] == undefined) {
            alGezien[waarde] = 1;
        } else {
            return false;
        }
    }

    return true;
}

function checkVierkant(vierkantNummer) {
    let rijIndex = vierkantNummer % 3;
    let kolomIndex = Math.floor(vierkantNummer / 3);

    let alGezien = {};
    for (let item = 0; item < 9; item++) {
        let inputElement = sudokuVeld[rijIndex][kolomIndex][item];
        let waarde = Number.parseInt(inputElement.value);
        if (Number.isNaN(waarde) || alGezien[waarde] == undefined) {
            alGezien[waarde] = 1;
        } else {
            return false;
        }
    }

    return true;
}

function losOp() {
    let agenda = [];

    let huidigeIndex = 0;
    while (indexNaarInput(huidigeIndex).value != "") {
        huidigeIndex++;
    }

    agenda.push({
        index: huidigeIndex,
        mogelijkeWaarden: [2,3,4,5,6,7,8,9],
        nuProberen: 1
    });
    indexNaarInput(huidigeIndex).value = 1;

    while (agenda.length > 0) {
        let rij = indexNaarRij(huidigeIndex);
        let kolom = indexNaarKolom(huidigeIndex);
        let vierkant = indexNaarVierkant(huidigeIndex);

        let isOk = checkRij(rij) && checkKolom(kolom) && checkVierkant(vierkant);
        if (isOk) {
            huidigeIndex++;
            if (huidigeIndex == 81) return; // gelukt

            let input = indexNaarInput(huidigeIndex);

            while (huidigeIndex <= 81 && indexNaarInput(huidigeIndex).value != "") {
                huidigeIndex++;
            }
            if (huidigeIndex == 81) return; // gelukt

            agenda.push({
                index: huidigeIndex,
                mogelijkeWaarden: [2,3,4,5,6,7,8,9],
                nuProberen: 1
            });
            indexNaarInput(huidigeIndex).value = 1;
        } else {
            indexNaarInput(huidigeIndex).value = "";
            let laatsteActie = agenda.pop();
            laatsteActie.nuProberen = laatsteActie.mogelijkeWaarden.pop();
            while (laatsteActie.nuProberen == undefined) {
                indexNaarInput(huidigeIndex).value = "";
                laatsteActie = agenda.pop();
                laatsteActie.nuProberen = laatsteActie.mogelijkeWaarden.pop();
            }
            huidigeIndex = laatsteActie.index;
            
            indexNaarInput(huidigeIndex).value = laatsteActie.nuProberen;
            agenda.push(laatsteActie);
        }
    }
}

function indexNaarRij(index) {
    return Math.floor(index / 9);
}

function indexNaarKolom(index) {
    return index % 9;
}

function indexNaarVierkant(index) {
    let rij = Math.floor(index / 9);
    let kolom = index % 9;

    let rijIndex = Math.floor(rij / 3);
    let kolomIndex = Math.floor(kolom / 3);

    return 3 * kolomIndex + rijIndex;
}

function indexNaarInput(index) {
    let rij = Math.floor(index / 9);
    let kolom = index % 9;

    let rijIndex = Math.floor(rij / 3);
    let subRij = rij % 3;
    let kolomIndex = Math.floor(kolom / 3);
    let subKolom = kolom % 3;

    return sudokuVeld[rijIndex][kolomIndex][subRij*3 + subKolom];
}