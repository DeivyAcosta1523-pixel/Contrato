// Transferencia/Ejercicio 1.js
export function numerosPrimos() {
  let resultado = "";
  let n = 2;
  while (n <= 50) {
    let esPrimo = true;
    let divisor = 2;
    while (divisor < n) {
      if (n % divisor === 0) {
        esPrimo = false;
        break;
      }
      divisor = divisor + 1;
    }
    if (esPrimo) {
      resultado += "Primo: " + n + "\n";
    }
    n = n + 1;
  }
  return resultado;
}
