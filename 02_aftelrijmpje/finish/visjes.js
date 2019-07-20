function init() {
    let liedje = "";

    let aantalVisjes = 10;
    while (aantalVisjes >= 0) {
        // optioneel bij if else
        if (aantalVisjes == 1) {
            liedje += aantalVisjes + " klein visje<br>";
        } else {
            liedje += aantalVisjes + " kleine visjes<br>";
        }
        liedje += "Die zwommen naar de zee<br>";
        liedje += "\"Goed\", zei de Moeder<br>";
        liedje += "Maar ik ga niet mee<br>";
        liedje += "Want in de zee zwemmen haaien<br>";
        liedje += "en die eten je op!<br>";
        liedje += "<br>";

        aantalVisjes = aantalVisjes - 1;
    }



    document.getElementById("visjes").innerHTML = liedje;
}

window.onload = init;