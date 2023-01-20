let carros = ["BMW", "FERRARI", "MERCEDES"];
let x = 1;
console.log('1. ' + carros[x]);

//Troque a Ferrari por Audi
console.log('2. Lista com Audi:');
carros[1] = 'Audi';
console.log(carros);

//Adicione Volvo a lista
console.log('3. Lista com Volvo:')
carros.push('Volvo');
console.log(carros);

//Exibir quantidade de itens no array
console.log('4. Quantidade de itens no array:')
console.log(carros.length);