var total = 0;
var seguir = "si";
while (seguir == "si") {
  var precio = Number(prompt("¿Cuánto cuesta el producto?"));
  total = total + precio;
  seguir = prompt("¿Deseas agregar otro producto? (si/no)");
}
if (total > 100000) {
  var descuento = total * 0.10;
  var totalFinal = total - descuento;
  alert("Total: $" + total + "\nDescuento 10%: $" + descuento + "\nTotal con descuento: $" + totalFinal);
} else {
  alert("Total a pagar: $" + total);
}