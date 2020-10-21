// calcolo del prezzo del biglietto del treno con form

// nome passeggero
// var name = document.getElementById('nome-passeggero');
// console.log("Il tuo nome è " name);
// // km da percorrere
// var km = document.getElementById('chilometri');
// console.log("I km che vuoi percorrere sono ", km)
//
// // fascie d'età
// var age = document.getElementById('eta');
// console.log("La tua fascia di età è ", age)
//
// //prezzo di base del biglietto definito in base ai km (0.21 € al km)
var priceDef = (0.21 * km);
// console.log("Il prezzo base è", price);

// Condizioni di sconto per minorenni e over 65
// if (age < 18) {
//   priceDef = priceDef * 0.80
//   console.log("Il prezzo di del biglietto per i minorenni è " priceDef);
// } else if (age > 65) {
//   priceDef = priceDef * 0.60
//   console.log("Il prezzo di del biglietto per gli over 65 è " priceDef);
var generate = document.getElementById('check');
generate.addEventListener('click',
  function () {
    alert(priceDef);
  }
  );
