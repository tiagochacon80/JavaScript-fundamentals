//temos duas formas para o evento de clique do mouse

/*Dessa forma a gente precisa colocar a funçao "onclick" no HTML
e dentro das " " colocar o nome da funçao, nesse caso 
onclick="clicou()" */
function clicou() {
    alert("Clicou no botao");
}

//dessa forma a gente chama a classe "botao" do html 
let botao = document.querySelector(".botao");
botao.addEventListener("click", clicou);