// Escucha el evento 'keydown' en la ventana y ejecuta la función correspondiente
window.addEventListener('keydown', (e) => {
    // Comprueba si la tecla presionada es '+'
    if (e.key === '+') {
        incremento(); // Llama a la función incremento
    } else if (e.key === '-') {
        decremento(); // Llama a la función decremento
    }
});

// Función para incrementar el contador
const incremento = () => {
    let contador = parseInt(document.getElementById('valor').innerHTML); // Obtiene el valor actual del contador
    contador++; // Incrementa el contador
    document.getElementById('valor').innerHTML = contador; // Actualiza el contenido HTML con el nuevo valor del contador
};

// Función para decrementar el contador
const decremento = () => {
    let contador = parseInt(document.getElementById('valor').innerHTML); // Obtiene el valor actual del contador
    if (contador > 0) {
        contador--; // Decrementa el contador si es mayor que cero
        document.getElementById('valor').innerHTML = contador; // Actualiza el contenido HTML con el nuevo valor del contador
    } else {
        contador = 0; // Establece el contador en cero si ya es cero
        document.getElementById('valor').innerHTML = contador; // Actualiza el contenido HTML con el nuevo valor del contador
    }
};

// Función para resetear el contador a cero
const resetear = () => {
    document.getElementById('valor').innerHTML = '0'; // Establece el contenido HTML del contador en cero
};
