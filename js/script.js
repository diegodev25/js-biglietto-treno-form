// Genera i risultai del biglietto tramite js
var generate = document.getElementById('check');
generate.addEventListener('click',
  function () {
    var nomePasseggero = document.getElementById("nome-passeggero").value;
    var km = document.getElementById("km").value;
    var age = document.getElementById("age").value;
    var price = 0.21 * km;
    var sconto = 0;
    if (age == "minorenne")
    {
      sconto = price * 0.2;
    }
    else if (age == "maggiorenne")
    {
      sconto = 0;
    }
    else
    {
      sconto = price * 0.4;
    }
    var priceDef = price - sconto;
    var coach = Math.floor(Math.random() * 10) + 1;
    var codiceCp = Math.floor(Math.random() * (100000 - 90000) ) + 90000; //num compreso tra 90000 a 100000 escluso
    document.getElementById("box-genera").style.display = "block";
    document.getElementById("ticket-result").style.display = "block";
    document.getElementById("ris-nom").innerHTML = nomePasseggero;
    document.getElementById("offerta").innerHTML = age;
    document.getElementById("carrozza").innerHTML = coach;
    document.getElementById("costo-biglietto").innerHTML = priceDef.toFixed(2);
    document.getElementById("codice-cp").innerHTML = codiceCp;
  }
  );
