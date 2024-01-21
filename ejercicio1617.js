// !Ejercicio 16
// *Usa un bucle forof para recorrer todos los destinos del array. Imprime en un console.log sus valores.

const placesToTravel = [
  'Japon',
  'Venecia',
  'Murcia',
  'Santander',
  'Filipinas',
  'Madagascar'
]

for (const element of placesToTravel) {
  console.log(element)
}

// !Ejercicio 17
// * Usa un for...in para imprimir por consola los datos del alienígena..

const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
}
for (element in alien) {
  console.log(alien[element])
}
