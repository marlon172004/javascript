nacimiento=parseInt(prompt("Ingresa tu año de Nacimiento"));


const fecha = new Date();
const fechaActual=fecha.getFullYear();
let edad = fechaActual-nacimiento;


var nombres= prompt("Ingresa tu Nombre");
//var Edad= parseInt(prompt("Ingresa tu Edad"));//

if(edad<=8) {
document.write("Bienvenidos niño(a) "+nombres+" usted tiene "+edad+" años de edad")
}else if(edad<=30) {
    document.write("Bienvenidos joven(a) "+nombres+" usted tiene "+edad+" años de edad")
}else{document.write("Bienvenidos señor(a) "+nombres+" usted tiene "+edad+" años de edad")
}
