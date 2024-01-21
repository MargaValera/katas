// ! Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 24, 'hub']
function averageWord(param) {
  let suma = 0
  for (let i = 0; i < param.length; i++) {
    if (typeof param[i] === 'number') {
      suma += param[i]
    } else if (typeof param[i] === 'string') {
      suma += param[i].length
    }
  }
  return suma
}
console.log(averageWord(mixedElements))
