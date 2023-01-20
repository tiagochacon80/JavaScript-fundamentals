
//Selecionando os filhos imediatos, indentificando o que tem dentro 

function clicou() {
    const teste = document.querySelector("#teste");
    const ul = teste.querySelector("ul");

    //innerHTML mostra o conteudo dentro da tag, inclusive o texto
    console.log(ul.innerHTML);
    //Assim como podemos alterar o que vem dentro da tag
    ul.innerHTML = "<li>Item Alterado</li>";
    //Adicionando um outro item
    ul.innerHTML += "<li>Item Alterado</li>";
    //Alterando o primeiro elemento(item)
    ul.children[0].innerHTML = "Item alterado!"
}