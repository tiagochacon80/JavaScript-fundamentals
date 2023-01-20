/*
Calcule o preco do imovel
m2 = 3.000
Se tiver 1 quarto, o m2 eh 1x
Se tiver 2 quartos, o m2 eh 1.2x
Se tiver 3 quartos, o m3 eh 1.5x
*/

function calcularImovel(metragem, quartos) {
    let m2 = 3000;
    if(quartos == 3) {
        return (metragem * m2) * 1.5;
    } 
    if(quartos == 2) {
        return (metragem * m2) *1.2;
    } else {
        return metragem * m2;
    }
}

let metragem = 123;
let quartos = 1;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);