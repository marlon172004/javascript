var SelecArea = prompt("(Ingresa opción: 1 para área del cuadrado, 2 para área del rectángulo, 3 para área del triángulo");
var area;

switch (SelecArea) {
    // en cuadrado toca calcular lado por lado
    case "cuadrado":
        var lado = parseFloat(prompt("Inserte la longitud del lado del cuadrado"));
        area = lado * lado;
        break;
    case "rectangulo":
        // en le rectangulo toca calcular base por altura
        var base = parseFloat(prompt("Inserte la base del rectangulo"));
        var altura = parseFloat(prompt("Inserte la altura del rectangulo"));
        area = base * altura;
        break;
    case "triangulo":
        // en el triangulo toca calcular base por altura
        var base = parseFloat(prompt("Inserte la base del triángulo"));
        var altura = parseFloat(prompt("Inserte la altura del triángulo"));
        area = (base * altura) / 2;
        break;
    default:
        alert("Figura no válida");
}

if (area) {
    alert("El área de la figura seleccionada es: " + area);
}