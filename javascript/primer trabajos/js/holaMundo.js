// Solicita al usuario que ingrese su año de nacimiento y lo almacena en la variable 'nacimiento'
const nacimiento = parseInt(prompt("Ingresa tu año de Nacimiento"));

// Obtiene la fecha y hora actuales y almacena el año actual en la variable 'fechaActual'
const fecha = new Date();
const fechaActual = fecha.getFullYear();

// Calcula la edad restando el año de nacimiento al año actual
const edad = fechaActual - nacimiento;

// Solicita al usuario que ingrese su nombre y lo almacena en la variable 'nombres'
const nombres = prompt("Ingresa tu Nombre");

// Realiza comparaciones para determinar la categoría de edad del usuario y muestra un mensaje de bienvenida personalizado
if (edad <= 8) {
    console.log("Bienvenidos niño(a) " + nombres + ". Usted tiene " + edad + " años de edad.");
} else if (edad <= 30) {
    console.log("Bienvenidos joven(a) " + nombres + ". Usted tiene " + edad + " años de edad.");
} else {
    console.log("Bienvenidos señor(a) " + nombres + ". Usted tiene " + edad + " años de edad.");
}
