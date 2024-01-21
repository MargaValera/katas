//! Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Macariomedinavalera',
  'Spiderman',
  'Captain M.',
  'Maricamengarcia'
]
function findLongestWord(param) {
  let masLargo = ''

  for (i = 0; param.length > i; i++) {
    if (param[i].length > masLargo.length) {
      masLargo = param[i]
    }
  }
  return masLargo
}
let resultado = findLongestWord(avengers)
console.log(resultado)

//? MISMO RESULTADO UTILIZANDO EL MÉTODO REDUCE:
// function findLongestWord() {
//   return avengers.reduce(
//     (masLargo, avengers) =>
//       avengers.length > masLargo.length ? avengers : masLargo,
//     ''
//   )
// }
// let masLargo = findLongestWord(avengers)
// console.log(masLargo)
