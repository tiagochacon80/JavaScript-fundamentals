let count = 0;

function add() {  
    let count = 0;  
    count++;
    console.log(count);
}

add();
add();

//Esse count se refere a variavel global na linha 1
console.log(count);
