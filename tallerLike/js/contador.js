window.addEventListener('keydown', (e) => {
    if (e.key === '+') {
        incremento();
    } else if (e.key === '-') {
        decremento();
    }
});

const incremento = () => {
    let contador = parseInt(document.getElementById('valor').innerHTML);
    contador++;
    document.getElementById('valor').innerHTML = contador;
};

const decremento = () => {
    let contador = parseInt(document.getElementById('valor').innerHTML);
    if (contador > 0) {
        contador--;
        document.getElementById('valor').innerHTML = contador;
    } else {
        contador = 0;
        document.getElementById('valor').innerHTML = contador;
    }
};

const resetear = () => {
    document.getElementById('valor').innerHTML = '0';
};