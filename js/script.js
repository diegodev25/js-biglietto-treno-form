// calcolo del prezzo del biglietto del treno con form


// km da percorrere
var km = parseInt("Quanti km vuoi percorrere?");
console.log("Numero km", km)

// età passeggero
var age = parseInt("Quanti anni hai?");
console.log("Numero anni", age)

//prezzo di base del biglietto definito in base ai km (0.21 € al km)
var priceDef = (0.21 * km);
console.log("Il prezzo base è", price);

// Condizioni di sconto per minorenni e over 65
if (age < 18) {
  priceDef = priceDef * 0.80
  console.log("Il prezzo di del biglietto per i minorenni è " priceDef);
} else if (age > 65) {
  priceDef = priceDef * 0.60
  console.log("Il prezzo di del biglietto per gli over 65 è " priceDef);
