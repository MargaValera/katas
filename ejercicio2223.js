//! EJERCICIO 22

//* Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas.

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]

for (food of foodSchedule) {
  if (food.isVegan === false) {
    food.name = fruits.shift()
    food.isVegan = true
  }
}
console.log(foodSchedule)

//! EJERCICIO 23

//* Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos.

const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]
shortMovie = []
medianMovie = []
longMovie = []

for (key of movies) {
  if (key.durationInMinutes < 100) {
    shortMovie.push(key)
  }
  if (key.durationInMinutes >= 100 && key.durationInMinutes < 200) {
    medianMovie.push(key)
  }
  if (key.durationInMinutes > 200) {
    longMovie.push(key)
  }
}
console.log(shortMovie)
console.log(medianMovie)
console.log(longMovie)
