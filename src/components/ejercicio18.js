for (var estudiante = 1; estudiante <= 5; estudiante++) {
  var nota1 = Number(prompt("Estudiante " + estudiante + " - Ingresa la nota 1:"));
  var nota2 = Number(prompt("Estudiante " + estudiante + " - Ingresa la nota 2:"));
  var nota3 = Number(prompt("Estudiante " + estudiante + " - Ingresa la nota 3:"));
  var promedio = (nota1 + nota2 + nota3) / 3;
  if (promedio >= 3.0) {
    alert("Estudiante " + estudiante + " - Promedio: " + promedio.toFixed(1) + " - APRUEBA ✅");
  } else {
    alert("Estudiante " + estudiante + " - Promedio: " + promedio.toFixed(1) + " - REPRUEBA ❌");
  }
}
alert("Programa terminado.");