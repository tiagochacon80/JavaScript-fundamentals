/*
Calcule a porcentagem entre 2 numeros.
Exemplo: 25% de 40 eh 10
formula da porcentagem (y / x) * 100

*/

function calcPct(x, y) {
    return (y / x) * 100;
}

let x = 50;
let y = 20;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} = ${y}`); 