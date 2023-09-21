function mostrar() {
    opc=parseInt(prompt("ingresa opcion :1 suma ,2 Resta ,3 Multiplicar ,4 Divicion ,5 cual es mayor"));
    switch(opc) {
        case 1:
        
            n1 = parseFloat(prompt("Ingresa un numero :"));
            n2 = parseFloat(prompt("Ingresa el segundo numero :"))
// esta es la suma
            var resultado= n1 + n2;
                if (n1!=0 && n2!=0){
                    document.write("el resultado de la suma es : " + resultado);
                } else {
                    document.write("verifica tus datos");
                }
            
            
            break;
        case 2:
// esta es la resta
            n1 = parseFloat(prompt("Ingresa un numero :"));
            n2 = parseFloat(prompt("Ingresa el segundo numero :"))

            var resultado= n1 - n2;
                if (n1!=0 && n2!=0){
                    document.write("el resultado de la resta es : " + resultado);
                } else {
                    document.write("verifica tus datos");
                }
            
           
            break;
        case 3:
//  esta es la multiplicacion       
            n1 = parseFloat(prompt("Ingresa un numero :"));
            n2 = parseFloat(prompt("Ingresa el segundo numero :"))

            var resultado= n1 * n2;
                if (n1!=0 && n2!=0){
                    document.write("el resultado de la multiplicacion es : " + resultado);
                } else {
                    document.write("verifica tus datos");
                }
            
        
            break;
        case 4:
// esta es la divicion-MARLON ES MAS LINDO        
            n1 = parseFloat(prompt("Ingresa un numero :"));
            n2 = parseFloat(prompt("Ingresa el segundo numero :"))

            var resultado= n1 / n2;
                if (n1!=0 && n2!=0){
                    document.write("el resultado de la divicion es : " + resultado);
                } else {
                    document.write("verifica tus datos");
                }
            
           
                
                break;
                case 5:
// ESTA ES LA DE MAYOR QUE                
                    n1 = parseFloat(prompt("Ingresa un numero :"));
                    n2 = parseFloat(prompt("Ingresa el segundo numero :"))
        
                    if (n1 > n2) {
                        document.write("El número " + n1 + " es mayor que " + n2);
                    } else if (n2 > n1) {
                        document.write("El número " + n2 + " es mayor que " + n1);
        
                   
                    break;
                    }
                    }
                }
                mostrar();