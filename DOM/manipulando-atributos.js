function clicou() {
    const input = document.querySelector('input');
    //Se esta pegando o atributo do html
    console.log(input.getAttribute('text'));

    //Para saber se tem o atributo
    if (input.hasAttribute('placeholder')) {
        console.log('Tem um placeholder');
    } else {
        console.log("Nao tem placeholder!");
    }

    //Trocando o atributo por outro valor
    input.setAttribute('placeholder', 'Nao clique mais aqui');
    input.setAttribute('type', 'text');
}