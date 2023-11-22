// Función para sumar dos números ingresados por el usuario
function sumar() {
    // Obtener los valores de los números desde elementos HTML
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);

    // Realizar la operación de suma
    let resultado = n1 + n2;

    // Mostrar el resultado en la página
    document.write("el valor de la suma sería " + resultado);
}

// Función para restar dos números ingresados por el usuario
function restar() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let resultado = n1 - n2;
    document.write("el valor de la resta sería " + resultado);
}

// Función para multiplicar dos números ingresados por el usuario
function multiplicar() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let resultado = n1 * n2;
    document.write("el valor de la multiplicación sería " + resultado);
}

// Función para dividir dos números ingresados por el usuario
function dividir() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    
    // Validar la división por cero
    if (n2 !== 0) {
        let resultado = n1 / n2;
        document.write("el valor de la división sería " + resultado);
    } else {
        document.write("No es posible dividir por cero.");
    }
}

// Función para calcular la potencia (cuadrado) de un número ingresado
function potencia() {
    let n1 = parseInt(document.getElementById("n1").value);
    let resultado = n1 * n1;
    document.write("el valor de la potencia sería " + resultado);
}

// Función principal que determina la operación a realizar según la opción seleccionada
function mostrar() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let opc = parseInt(document.getElementById("opc").value);

    // Utilizar un switch para determinar la operación a realizar
    switch (opc) {
        case 1:
            // Llamar a la función sumar con los valores n1 y n2
            sumar();
            break;
        case 2:
            // Llamar a la función restar
            restar();
            break;
        case 3:
            // Llamar a la función multiplicar
            multiplicar();
            break;
        case 4:
            // Llamar a la función dividir
            dividir();
            break;
        case 5:
            // Llamar a la función potencia
            potencia();
            break;
        default:
            // Mostrar una alerta si la opción no es válida
            alert("La opción no es válida");
    }
}