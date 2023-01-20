let personagem = {
    nome: 'Tiago',
    idade: 42,
    pais: 'Canada',
    olhos: ['preto', 'azul'],
    caracteristicas: {
        cabelo: 'preto',
        forca: 15,
        magia: 5,
        stamina: 25
    }
}    

console.log(`${personagem.nome} tem ${personagem.idade} anos.`);
console.log(`${personagem.caracteristicas.stamina}`);
console.log(`A cor do olho eh ${personagem.olhos[1]}`);