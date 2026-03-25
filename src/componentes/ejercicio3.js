let numeros = [];
for (let i = 1; i <= 10; i++) {
  let numero = Number(prompt("Ingresa el número " + i + ":"));
  numeros.push(numero);
}
let mayores = [];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 50) {
    mayores.push(numeros[i]);
  }
}
if (mayores.length > 0) {
  alert("Números mayores que 50: " + mayores);
} else {
  alert("Ningún número fue mayor que 50");
}