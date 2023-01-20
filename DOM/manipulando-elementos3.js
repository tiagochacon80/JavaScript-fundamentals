function clicou() {
    const teste = document.querySelector("#teste");
    const ul = teste.querySelector("ul");

    //Criando um elemento para adicionar um botao
    const newButton = document.createElement('button');
    newButton.innerHTML = 'Botao';
    ul.before(newButton);

    //criando mais um <ul>
    let newUl = document.createElement('ul');
    //adicionando mais 5 <li>, dentro da tag <ul> que foi criada acima
    for(let i = 0; i < 5; i++) {
        let newLi = document.createElement('li');
        newLi.innerHTML = "Item add " + i;
        newUl.append(newLi);
    } 
    //nao tem diferença se for antes ou depois do loop, nesse caso esta apos
    ul.after(newUl);    
}
