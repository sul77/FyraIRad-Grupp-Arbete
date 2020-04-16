API-specifikation: Fyra i rad
Detta är en API-specifikation att utgå ifrån för att skriva ett program (och tester för programmet).

Programmet är tänkt att skrivas i JavaScript och som låta två användare (vid samma dator) spela brädspelet Fyra i rad mot varandra.

Hjälpfunktioner
Det finns tre hjälpfunktioner som är globala, dvs går att anropa var som helst. Dessa är redan skrivna och finns i filen helpers.js.

await sleep(ms) - pausar en async funktion ett antal millisekunder.
$(‘css-selektor’) - tar tag i det första element i DOM:en som matchar en css-selektor. Returnerar elementet. Gör samma sak som/är ett alias för document.querySelector.
$$(‘css-selektor’) - tar tag i alla element i DOM:en som matchar en css-selektor. Returnerar en array av element. Gör samma sak som/är ett alias för document.querySelectorAll.
Klassen Game
Klassen Game ska innehålla följande metoder. (Vilka egenskaper som ska finnas anges i de metoder som sätter dessa.).

constructor()
Metoden ska anropa metoderna addEventListener och start (i denna ordning).

start()
Metoden ska skapa ett ny instans av Board och skicka nuvarande instans av Game till dess konstruktor. Instansen ska lagras i egenskapen board.

tellTurn(player)
Metoden ska ta emot inargumentet player som ska vara ett heltal (1 eller 2). Om så inte är fallet ska felet “player must be 1 or 2” kastas.

Metoden ska ta tag i DOM-elementet med css-klassen message och byta dess innehåll till texten “Röds tur…” om player har värdet 1 och till texten “Guls tur…” om player har värdet 2.

over(won)
Metoden ska ta emot inargumentet won som ska ha värdet “draw”, 1 eller 2 . Om så inte är fallet ska felet ‘won must be “draw”, 1 or 2’ kastas.

Metoden ska ta tag i DOM-elementet med css-klassen message och byta dess innehåll till texten

“Det blev oavgjort!” om won är “draw”.
“Röd vann!” om won är 1.
“Gul vann!” om won är 2.
Dessutom ska en knapp (button-element) läggas till i DOM-elementet med css-klassen message. Knappen ska ha css-klassen again och texten “Spela igen”.

addEventListener()
Metoden ska addera en händelselyssnare/funktion för click-händelser till elementet med css-klassen message i DOM:en.

Händelselyssnaren ska detektera om man har klickat på knappen med css-klassen again och i så fall anropa metoden start.

Klassen Board
Klassen Board ska innehålla följande metoder. (Vilka egenskaper som ska finnas anges i de metoder som sätter dessa.).

Obs! Egenskapen matrix, se nedan, ska representera ett spelbräde där alla positioner från början har värdet 0 och en position får värdet 1 om spelare 1 har en bricka där, samt värdet 2 om spelare 2 har en bricka där.

constructor(game)
Metoden ska ta emot inargumentet game som ska vara en instans av klassen Game. Om så inte är fallet ska felmeddelandet “game must be an instance of Game” kastas.

Metoden ska sätta följande egenskaper till följande värden:

game till värdet från inargumentet game.
matrix till en array med 6 element. Varje element ska i sin tur vara en array med 7 element, där varje element har värdet 0.
currentPlayer till värdet 1.
playInProgress till värdet false.
Metoden ska anropa metoderna addEventListener och render (i denna ordning). Därefter ska den anropa egenskapen game:s metod tellTurn med currentPlayer-egenskapen som inargument.

async makeMove(column)
Metoden ska vara async.

Metoden ska ta emot inargumentet column som ska vara ett heltal mellan 0 och 6. Om detta inte är fallet ska felmeddelandet “column must be an integer between 0 and 6” kastas.

Metoden ska returnera null om egenskapen playInProgress är true.

Metoden ska returnera false om draget inte går att göra p.g.a. att vald kolumn är full.

Om draget går att göra ska metoden genomföra dessa steg i ordning:

Sätta egenskapen playInProgress till true.
Sätta ut brickan tillfälligt högst upp i kolumnen.
Anropa metoden render
Ta bort brickan om den kan falla längre ner.
Anropa den asynkrona hjälpmetoden sleep för att pausa i 50 ms.
Om det går: flytta brickan ett steg ner i kolumnen och upprepa från steg 3.
Anropa metoden winCheck och om den returnerar något som är truthy:
a) Anropa metoden removeEventListener
b) Om winCheck har returnerat ett objekt med egenskapen combo så ska metoden markWin med combo-egenskapen från winCheck som inargument.
c) Anropa egenskapen game:s metod over med egenskapen winner från winChecks returvärde som inargument.
d) Returnera true
Sätta egenskapen currentPlayer till 2 om den är 1 och till 1 om den är 2.
Anropa egenskapen game:s metod tellTurn med currentPlayer-egenskapen som inargument.
Sätta egenskapen playInProgress till false.
Returnera true.
winCheck()
Ska titta på hela brädet och kontrollera om någon har vunnit eller om det har blivit oavgjort.

Om någon har vunnit ska metoden returnera ett objekt. Objektet ska ha egenskaperna winner satt till vinnaren (1 eller 2), samt combo - en array av 4 arrayer, där varje inre array är en position på brädet [radnummer, kolumnnummer].

Om det har blivit oavgjort ska metoden returnera ett objekt med egenskapen winner satt till strängen “draw”.

Om ingen har vunnit och det inte har blivit oavgjort ska metoden returnera värdet false.

render()
Metoden ska hitta elementet med css-klassen board i DOM:en och byta innehållet i detta element till en html-struktur med 42 stycken div-element i rad. Dessa motsvarar de olika positionerna på brädet från det övre vänstra hörnet till det nedre högre hörnet.

Om spelare 1 har en bricka på en position ska det div-element som motsvarar positionen få css-klassen red. Om spelare 2 har en bricka på en position ska det div-element som motsvarar positionen få css-klassen yellow.

Vart och ett av de 42 div-element som beskrivs ovan ska i sin tur innehålla ett div-element. Detta ska vara tomt.

Metoden ska använda hjälpmetoden $ för att ta tag i rätt element i DOM:en.

markWin(combo)
Metoden ska ta emot inargumentet combo - en array skapad enligt specifikationerna som finns angivna för metoden winCheck.

Metoden ska hitta de fyra div-element som motsvarar positionerna angivna i combo och lägga till css-klassen win till vart och ett av dessa div-element.

Metoden ska använda hjälpmetoden $ för att ta tag i rätt element i DOM:en.

addEventListener()
Metoden ska addera en händelselyssnare/funktion för click-händelser till elementet med css-klassen board i DOM:en.

Händelselyssnare ska detektera vilken kolumn användaren har klickat på och anropa metoden makeMove med denna kolumn som inargument.

Händelselyssnaren ska sparas som en egenskap med namnet listener, så att den kan tas bort vid ett senare tillfälle.

Metoden ska använda hjälpmetoden $ för att ta tag i rätt element i DOM:en.

removeEventListener()
Metoden ska ta bort händelselyssnaren lagrad i egenskapen listener från elementet med css-klassen board i DOM:en.

Metoden ska använda hjälpmetoden $ för att ta tag i rätt element i DOM:en.