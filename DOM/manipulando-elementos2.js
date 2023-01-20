function clicou() {
    const teste = document.querySelector("#teste");
    const ul = teste.querySelector("ul");

    //Adicionando um texto, o append() so adiciona texto no final    
    ul.children[0].append(" Alterado");
    //Para adicionar no começo é o prepend()
    ul.prepend();

    //Adicionando um elemento/tag no html no final
    //Criando o elemento
    let newLi = document.createElement("li");
    //Adicionando numa variavel
    newLi.innerText = "Item adicionado";
    ul.appendChild(newLi);    
}