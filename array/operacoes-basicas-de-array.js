let ingredientes = ["ovo", "agua", "farinha", "leite", "corante"];

//Quantidade total do array
console.log(`Total de ingredientes: ${ingredientes.length}`);

//Adicionando um item
ingredientes[5] = 'Cebola';
console.log(ingredientes);

//O melhor jeito de adicionar uma posicao
ingredientes.push('cebola');

//removendo o ultimo item
ingredientes.pop();

//removendo o primeiro item
ingredientes.shift();

//