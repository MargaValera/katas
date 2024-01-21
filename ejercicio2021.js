//! Ejercicio 20

//* Usa un bucle for...of para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys. Imprimelo por consola..

const popularToys = []
const toys = [
  { id: 5, name: 'Buzz MyYear', sellCount: 10 },
  { id: 11, name: 'Action Woman', sellCount: 24 },
  { id: 23, name: 'Barbie Man', sellCount: 15 },
  { id: 40, name: 'El gato con Guantes', sellCount: 8 },
  { id: 40, name: 'El gato felix', sellCount: 35 }
]

for (toy of toys) {
  if (toy.sellCount > 15) {
    popularToys.push(toy)
  }
}
console.log(popularToys)

//! Ejercicio 21
//* Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto

const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]
underAgeUsers = ['Usuarios menores de edad']
legalAgeUsers = ['Usuarios mayores de edad']

for (key of users) {
  if (key.years < 18) {
    underAgeUsers.push(key)
  }
  if (key.years >= 18) {
    legalAgeUsers.push(key)
  }
}
console.log(underAgeUsers)
console.log(legalAgeUsers)
