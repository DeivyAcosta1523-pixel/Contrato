var saldo = 500;
while (saldo > 0) {
  var retiro = Number(prompt("Saldo actual: $" + saldo + "\n¿Cuánto quieres retirar?"));
  if (retiro > saldo) {
    alert("Saldo insuficiente!");
  } else {
    saldo = saldo - retiro;
    alert("Retiro exitoso. Tu nuevo saldo es: $" + saldo);
  }
}
alert("Tu saldo llegó a $0. No puedes retirar más.");