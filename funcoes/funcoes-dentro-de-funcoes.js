/*Dica: Sempre que fizer uma function dentro de outra
Geralmente cria-la como arrow function */

function addSquares(a, b) {
    function square(x) {
        return x * x;
    }

    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}

function addSquaresArrow(a, b) {
    const squareArrow = (x) => {
        return x * x;
    }

    let sqra = squareArrow(a);
    let sqrb = squareArrow(b);
    return sqra + sqrb;
}

console.log(addSquares(2, 3));
console.log(addSquaresArrow(3, 3));