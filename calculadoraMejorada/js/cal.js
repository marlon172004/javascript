function sumar(n1, n2) {
    var resultado = n1 + n2;
    var res = document.getElementById("resultado");
    if (!isNaN(resultado)) {
        document.getElementById("respuesta").style.display = "block";
        res.innerHTML = 'El resultado de la suma es: ${resultado}';
        res.style.color = "green";
    } else {
        document.getElementById("respuesta").style.display = "block";
        res.innerHTML = 'Verifique sus datos';
        res.style.color = "red";
    }
}

function restar() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let resultado = n1 - n2;
    if (!isNaN(resultado)) {
        document.getElementById("respuesta").style.display = "block";
        document.getElementById("resultado").innerHTML = 'El resultado de la resta es: ${resultado}';
    } else {
        document.getElementById("respuesta").style.display = "block";
        document.getElementById("resultado").innerHTML = 'Verifique sus datos';
        document.getElementById("resultado").style.color = "red";
    }
}

function multiplicacion() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let resultado = n1 * n2;
    if (!isNaN(resultado)) {
        document.getElementById("respuesta").style.display = "block";
        document.getElementById("resultado").innerHTML = 'El resultado de la multiplicación es: ${resultado}';
    } else {
        document.getElementById("respuesta").style.display = "block";
        document.getElementById("resultado").innerHTML = 'Verifique sus datos';
        document.getElementById("resultado").style.color = "red";
    }
}

function dividir() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    if (n2 === 0) {
        document.getElementById("respuesta").style.display = "block";
        document.getElementById("resultado").innerHTML = "No se puede dividir por cero";
        document.getElementById("resultado").style.color = "red";
    } else {
        let resultado = n1 / n2;
        if (!isNaN(resultado)) {
            document.getElementById("respuesta").style.display = "block";
            document.getElementById("resultado").innerHTML = 'El resultado de la división es: ${resultado}';
        } else {
            document.getElementById("respuesta").style.display = "block";
            document.getElementById("resultado").innerHTML = 'Verifique sus datos';
            document.getElementById("resultado").style.color = "red";
        }
    }
}

function potencia() {
    let n1 = parseInt(document.getElementById("n1").value);
    let resultado = Math.pow(n1, 2);
    if (!isNaN(resultado)) {
        document.getElementById("respuesta").style.display = "block";
        document.getElementById("resultado").innerHTML = 'El resultado de la potencia es: ${resultado}';
    } else {
        document.getElementById("respuesta").style.display = "block";
        document.getElementById("resultado").innerHTML = 'Verifique sus datos';
        document.getElementById("resultado").style.color = "red";
    }
}

function mostrar() {
    let opc = parseInt(document.getElementById("opc").value);
    switch (opc) {
        case 1:
            sumar(parseInt(document.getElementById("n1").value), parseInt(document.getElementById("n2").value));
            break;
        case 2:
            restar();
            break;
        case 3:
            multiplicacion();
            break;
        case 4:
            dividir();
            break;
        case 5:
            potencia();
            break;
        default:
            document.getElementById("respuesta").style.display = "block";
            document.getElementById("resultado").innerHTML = "La opción no es válida";
            document.getElementById("resultado").style.color ="black";
    }
}