let lista = [45, 4, 9, 16, 25];
let lista2 = [];

lista2 = lista.every(function(item) {
    //return (item > 3)? true : false;
    if (item > 20) {
        return true;
    } else {
        return false;
    }

    
});

let res = lista2;

console.log(res);