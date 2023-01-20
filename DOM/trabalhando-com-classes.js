function clicou() {
    const button = document.querySelector('button');
    //Adicionando um classe
    button.classList.add('verde');
    //removendo uma classe
    button.classList.remove('azul');
    //Se existe essa classe nessa tag <button>
    button.classList.contains('azul');
    //nesse caso ele ira remover o nome que tiver ou adicionar se nao tiver
    button.classList.toggle("red"); 
}