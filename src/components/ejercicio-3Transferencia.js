const saldoInicial = 500;
var saldoActual = saldoInicial;

while (saldoActual > 0) {
  var retiro = Number(prompt("Saldo actual: $" + saldoActual + " - ¿Cuánto quieres retirar?"));

  if (retiro > saldoActual) {
    alert("Error: no tienes suficiente saldo.");
  } else {
    saldoActual = saldoActual - retiro;
    alert("Retiro exitoso. Saldo restante: $" + saldoActual);
  }
}

alert("Saldo agotado. No puedes retirar más.");