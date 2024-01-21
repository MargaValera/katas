// !Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
function repeatCounter(param) {
  let repeticiones = {}
  for (let element of param) {
    if (repeticiones[element]) {
      repeticiones[element]++
    } else {
      repeticiones[element] = 1
    }
  }
  for (let element in repeticiones) {
    console.log(
      `el elemento ${element} se repite ${repeticiones[element]} veces`
    )
  }
}
repeatCounter(counterWords)
