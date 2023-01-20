let pessoa = {
    nome: 'Tiago',
    sobrenome: 'Celani',
    idade: 78,
    nomeCompleto: function ()  {
        return this.nome + ' ' + this.sobrenome;
    }
}

console.log(pessoa.nomeCompleto());

