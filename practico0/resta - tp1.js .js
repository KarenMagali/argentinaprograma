let name = alert("Alumna: Karen Magali Sauce  -- Actividades 1, 2 y 3")

let minuendo =10;
let sustraendo=2;

let resultado = minuendo-sustraendo;

console.log(resultado);







/*
INFORMACIÓN CLASE 2 - AYUDITAS

camelCase =  "Myvariablenumerica" (todo junto)  snakeCase = "mi_variable_numerica"  (separada con guiones) 
Distinción de mayúsculas y minúsculas = Al iniciar la variable, ponemos minúscula, luego, la primera letra de 
cada palabra siguiente va con mayúscula (ejemplo: myAge - myNumeroUno) 


- integer= números enteros (1,2,-5,-6).
- number= números reales (1,2,3.5,3.8) 
- string= palabras. Texto. Siempre con comillas  ""  ´´ 
- booleanos= verdadero o falso. Dos valores posibles. true/false con minúscula.   ejemplo: let IAmAlive = true;  (si estoy vivo, sigo jugando).
- arreglos= lista ordenada de variables, elementos. let miArregloDeNombres = ["Mariano", "Emilia", "Valentina"]; 

    Acceso a arreglos (object):
    Orden: comienza en 0. 

    let scores = [10, 20, 30, 10, 40, 20];

    Acceder:     scores [0];   ----->  guarda el valor 10 ya que, es el primero. //  scores [4]; -----> guarda el valor 40.

                Si intento a acceder a scores [6]; me va a decir que no está definido ya que, en este caso, definí hasta el valor 5. 

    Para escribir sobre un elemento coloco: 

            scores [0] = 5;  Así se sobreescribe. 


- objetos= conjunto de variables, no ordenado.  let perro = {nombre: "Toby", raza: "Dalmata"} let persona = {nombre: "Agustin", edad: "27"}
    Acceso a objetos:

    let perro = {nombre: "Toby", raza: "Dalmata"} -----> 
    perro.nombre = aquí accedo al nombre del perro. Primero coloco la variable y luego coloco .nombre para acceder al nombre del perro que se encuentra
    en el objeto. 

    Si quiero agregar un nuevo dato coloco: 

    perro.apellido = "Sauce";  ----->  Se agrega el dato al objeto. 
    
    Quedaría:  let perro = {nombre: "Toby", raza: "Dalmata" apellido:"Sauce"}; 

    Al consultar por perro, nos mostrará los elementos del objeto en orden alfabético, no en el orden en que lo pusimos entre corchetes. 

    Si quiero reemplazar un dato coloco: 

CONSTANTES, no son variables, NO VARÍAN A LO LARGO DEL PROGRAMA:

Una vez que lo definí, no lo puedo cambiar. SE LE DA SU VALOR EN LA MISMA LÍNEA QUE SE DEFINE, NO LUEGO. 

const daysInWeek = 7;   ---- >  el valor de la cantidad de días de la semana, será siempre 7, no se puede modificar.
const hoursInDay = 24;  

Se utiliza con datos que no deben cambiar a lo largo del programa. Ejemplo: el día siempre tendrá 24 hs. No cambia ni debe cambiar. 







Para saber el tipo de variable, coloco: typeof. Ejemplo: let myString = "Hola mundo"   //  typeof myString (consulta) 
*/