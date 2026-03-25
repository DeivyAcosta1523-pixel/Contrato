for (var corredor = 1; corredor <= 8; corredor++) {
  for (var vuelta = 1; vuelta <= 4; vuelta++) {
    var cansancio = prompt("Corredor " + corredor + " - Vuelta " + vuelta + ": ¿Se cansó? (si/no)");
    if (cansancio == "si") {
      alert("Corredor " + corredor + " se detuvo en la vuelta " + vuelta);
      break;
    }
    if (vuelta == 4) {
      alert("Corredor " + corredor + " completó las 4 vueltas!");
    }
  }
}
alert("Competencia terminada!");