/* Ejecicio 2 */

const readlineSync = require('readline-sync'); 

const meses =["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

let numero = readlineSync.question("Ingrese un numero del 1 al 12");
    

if(numero>=1 && numero<=12){   

    const mes = meses[numero- 1];
    console.log(mes);


let cantidadDeDias = "";

switch(mes) { 

case "enero": 
    case  "marzo": 
        case  "mayo": 
            case "julio": 
                case "agosto": 
                    case "octubre": 
                        case "diciembre":    

                        cantidadDeDias = 31;

break;

case "febrero":  

                        cantidadDeDias = 28;

break;

case "abril":  
    case "junio": 
        case "septiembre":
            case "noviembre": 

                        cantidadDeDias=30; 

break;

}

console.log("La cantidad de días del mes de" + " " + mes + " " + "es" + " " + cantidadDeDias); 

} 

