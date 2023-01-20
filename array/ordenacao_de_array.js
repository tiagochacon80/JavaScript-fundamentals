/*let frutas = ['Maça', 'Banana', 'Laranja', 'Uva'];

Ordenando em ordem alfabetica
frutas.sort();
Invertendo a ordem
frutas.reverse();
console.log(frutas);*/

let cars = [
    {brand: 'Fiat',  year: 2022},
    {brand: 'Bmw', year: 2018},
    {brand: 'Ferrari', year: 2020}
]

//Ordenando com a funçao sort e uma arrow function por ano.
cars.sort((a, b) => a.year - b.year);

console.log(cars);