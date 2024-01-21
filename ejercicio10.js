// ! Calcular un promedio
const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(param) {
  let promedio = 0
  for (i = 0; i < param.length; i++) {
    promedio += param[i]
  }
  return promedio / param.length
}
console.log(average(numbers))
