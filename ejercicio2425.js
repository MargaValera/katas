//! EJERCICIO 24
//* Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos.

const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]

let totalSales = 0

for (prod of products) {
  totalSales += prod.sellCount
}
console.log('El total de las ventas es: ', totalSales)

//! EJERCICIO 25
// * Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos y mostrar por consola la media de ventas.

const productos = [
  { name: 'Funko Dr. Strange', contVentas: 10 },
  { name: 'Mochila de protones: Ghostbusters', contVentas: 302 },
  { name: 'Sable laser FX', contVentas: 23 },
  { name: 'Varita de Voldemort', contVentas: 6 }
]
let totalVentas = 0

for (produ of productos) {
  totalVentas += produ.contVentas
}
const mediaVentas = totalVentas / produ.contVentas

console.log('El total de las ventas es: ', totalVentas)
console.log('La media de ventas es: ', mediaVentas)
