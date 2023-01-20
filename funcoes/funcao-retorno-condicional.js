function maiorIdade(idade) {
    if(idade >= 18) {
        return true;
    } else {
        return false;
    }
}

let verificacao = maiorIdade(17);
console.log(verificacao);

if(verificacao) {
    console.log('E maior de idade');
} else {
    console.log('E menor de idade');
}