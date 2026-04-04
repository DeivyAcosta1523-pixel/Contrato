// Transferencia/Ejercicio 2.js
export function tablaMultiplicar(prompt) {
  let numero = Number(prompt("Ingresa un número para ver su tabla de multiplicar: "));
  let resultado = "Tabla del " + numero + ":\n";
  let i = 1;
  while (i <= 12) {
    resultado += numero + " x " + i + " = " + (numero * i) + "\n";
    i = i + 1;
  }
  return resultado;
}
