// !Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]

elemento = 'Marga'

function finderName(param, element) {
  let position = param.indexOf(element)
  if (position !== -1) {
    console.log(
      `El elemento ${element} se encuentra en la posicion ${position}`
    )
  } else console.log(`El elemento ${element} no se encuentra`)
}

finderName(nameFinder, elemento)
