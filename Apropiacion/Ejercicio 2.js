// Apropiación/Ejercicio 2.js
export function registrarIngresoEstudiantes(prompt) {
  let resultado = "";
  let contador = 0;
  while (contador < 5) {
    let carne = prompt("Estudiante " + (contador + 1) + " - ¿Trae carné? (S/N): ");
    if (carne.toUpperCase() === "S") {
      resultado += "Estudiante " + (contador + 1) + " → INGRESA\n";
    } else {
      resultado += "Estudiante " + (contador + 1) + " → DENEGADO (sin carné)\n";
    }
    contador = contador + 1;
  }
  resultado += "Proceso completado.";
  return resultado;
}
