// Apropiación/Ejercicio 1.js
export function multiplosDeTres() {
  let resultado = "";
  let n = 1;
  while (n <= 20) {
    if (n % 3 === 0) {
      resultado += "Múltiplo de 3: " + n + "\n";
    }
    n = n + 1;
  }
  return resultado;
}
