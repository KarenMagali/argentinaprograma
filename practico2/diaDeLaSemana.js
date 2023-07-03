/* Ejecicio 4 */

const readlineSync = require('readline-sync'); 

const diaDeLaSemana =["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];

let numero = readlineSync.question("Ingrese un numero del 1 al 7");
    

if(numero>=1 && numero<=7){   

    const dia = diaDeLaSemana[numero- 1];
    console.log(dia);


    switch(dia) { 

        case "lunes": 
            case  "martes": 
                case  "miércoles": 
                    case "jueves": 
                        case "viernes": 
                            case "sábado": 
                                case "domigo":    
        
                                diaDeLaSemana;
        
        break;

    }

    console.log("Hoy es" + " " + dia);
    
} else {
    console.log("Número inválido"); 
}

