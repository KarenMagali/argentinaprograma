
function obtenerJugadaComputadora(){ 

const opciones = ["piedra", "papel", "tijera"];

const sujuego = (Math.floor(Math.random() * opciones.length));

return opciones[sujuego];

}

function  obtenerJugadaUsuario(){

    const readlineSync = require('readline-sync'); 

    const misopciones =["piedra", "papel", "tijera"];
    
    let numero = readlineSync.question("Ingrese: 1 = piedra, 2 = papel, 3 = tijeras");
        
    
    if(numero>=1 && numero<=3){   
    
        let miopcion = misopciones[numero - 1];
        return miopcion;

    } else {

        return "Opción inválida";

    }    

}


function determinarGanador(computadora, usuario){ 

    if ((usuario == "piedra" && computadora == "papel")  || (usuario == "papel"  && computadora == "tijera") || (usuario == "tijera" && computadora == "piedra") 
    
    ){

return "Gana la computadora"; 
        

    } else if (usuario == computadora) { 

        return "Empate"; 

    } else if (usuario == "Opción inválida") {
        
        return "No es posible ejecutar esta partida";

    }else {
        
    return "Gana el usuario";

    }

}


const c = obtenerJugadaComputadora();
const u = obtenerJugadaUsuario();
const ganador = determinarGanador(c,u);

console.log("La computadora eligió: ", c);
console.log("El usuario eligió ", u);
console.log("El resultado fue ", ganador);

