# Simpele AI

Dit project is bedoeld als oefening om de net aangeleerde concepten in javascript te verbeteren.

## Het algoritme
### Variabelen
Er zijn twee lijsten met stukken zinnen. `randomantwoorden` bevat allerlei willekeurige zinnen die willekeurig kunnen gebruikt worden. `chatwoordenboek` bevat allerlei zinnen die met een bepaald woord in verband gebracht kunnen worden.
### Verloop
Wanneer het algoritme een bericht krijgt van de gebruiker, zal hij eerst kijken of er een woord in het bericht voorkomt in `chatwoordenboek`. Van al deze zinnen die uit de tekstanalyse komen, wordt er één willekeurig via `Math.random()` gekozen.
Mocht er in `chatwoordenboek` niets gevonden worden, zal het algoritme willekeurige zin kiezen in `randomantwoorden`. Om hier dan van te leren, zal het willekeurige antwoord vervangen worden met het bericht van de gebruiker.

## Benodigde kennis:
+ Form
+ input[text] en input[submit]
+ object.hasOwnProperty
+ event.preventDefault
+ Eventueel nth-child(odd|even)
+ De info over het algoritme
+ Math.round
+ Math.random