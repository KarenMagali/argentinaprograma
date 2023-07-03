/* Ejecicio 3 */

const readlineSync = require('readline-sync'); 

let numero = readlineSync.question("Ingrese un numero entero");

let esPar = numero %2 === 0;   
let positivo = numero>0;
let negativo = numero<0;

if(esPar && positivo){   

console.log("El número es positivo y par.");

} else if(!esPar && positivo) {
    console.log("El número es positivo e impar");

} else if(negativo) {

console.log("El número es negativo");

} else if(numero==0) {

console.log("El número es cero");

}
