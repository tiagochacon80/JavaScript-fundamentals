function soltou(event) {
    console.log(event.key);
}

const input = document.querySelector('input');
input.addEventListener('keyup', soltou);
