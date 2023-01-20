/*Elementos - Selecionando o documento input */
const input = document.querySelector('input');
//Selecionando a lista para adicinar o item
const lista = document.querySelector('ul');

//Funçoes
function handleKeyUp(e) {
    if(e.key === 'Enter') {
        /* Uma formade fazer nao muito legal
        lista.innerHTML += '<li>' + input.value + '</li>'; */

        //Melhor forma de fazer adicionar elemento Li na lista
        const newLi = document.createElement('li');
        newLi.innerHTML = input.value;
        lista.appendChild(newLi);

        //Limpando o campo do input
        input.value = "";
    }
}

//Eventos
input.addEventListener('keyup', handleKeyUp);

