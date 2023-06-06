/* 06-06-2023

/* console.log ( "Mi perro es: %s Su edad es: %i Su raza es: %s", name, edad, raza)

%s == indica que va un string - cadena.
%d o %i == indica que va un entero.
%f	== indica que va un decimal
%o	== indica que va un DOM
%O	== indica que va un Objeto js
%c	== indica que va un CSS

Se colocan los valores de los "%s - %i", en el orden en el que iría.

-- Math.random(); --    

* Math.floor () ---> devuelve el entero más bajo, más cercano a ese decimal.  

Ejemplo: Math floor (3.44);

DARÁ = 3

* Math.ceil()---> devuelve el entero más alto, más cercano a ese decimal.  

Math.ceil(3.44) = 4

* Math.round()---> redondea en entero. 

De .5 para abajo, es el entero más bajo. De .5 para arriba, en el entero más alto. 

Ejemplo: 

Math.round(3.44) = 3 
Math.round(3.58) = 4

 */ 


/* Clase 3 

MÉTODOS 

* pop ----->  quita el último elemento del array.

let popArray=[1, 2, 3];
popArray.pop();

Sacaría el 3 y mostraría 3. 

Además, devuelve la longitud del nuevo array. Es decir, 2, porque tiene 2 elementos.

* push -----> agrega un elemento al final del array.

let pushArray[1, 2, 3];

pushArray.push(4);

Agrega el 4.

Además, devuelve la longitud del nuevo array. Es decir, 4, porque tiene 4 elementos.

* splice ------> reemplaza valores.

array.splice(desde, cuantos, elementos a reemplazar)

Ejemplo:

let spliceArray = [1, 2, 3]

spliceArray.splice(1, 1, "x", "y")     ----> elimina, desde el elemento 1 (inclusive), un elemento y lo reemplaza por "x" e "y". Es decir que reemplaza
2 (que es el elemento 1), por "x" e "y". Quedaría:

elemento 0=1
elemento 1=2
elemento 2=3 


let spliceArray = [1, "x", "y", 3]


spliceArray.splice (3, 2, "javascript" "hola mundo");

En 1 y 2, coloca el texto que le indicamos. 

Desde la posición 1, hasta la 2, va a escribir "javascript" "hola mundo"

reverse -----> da vuelta un arreglo.

Si tenemos  [1, 2, 3].reverse();    lo da vuelta y queda: [3, 2, 1]

*shift ------> quita el primer elemento del array.

let shiftArray[1, 2, 3];

shitArray.shift();

* unshift ------> agrega un elemento al comienzo del array.

let unShiftArray[1, 2, 3];

unShitArray.unShift(0);

* join -------> agarra todos los elementos de un arreglo y los une de acuerdo al valor que le pasamos.

["hello", "world"].join(",");

*forEach --------> toma todos los elementos y los imprime en la consola, de a uno, en orden. Aplica una función, pero busca que haga algo, no que
calcule algo y me de un resultado, porque ese resultado se pierde, no guarda. Ejemplo, imprime en pantalla. 
[1, 2, 3].forEach(elemento=> console.log(elemento))

* map -------> por cada elemento del arreglo, realiza una operacion. Aplica una función, busca que calcule algo y guarda el resultado. 
Ejemplo: multiplica.  

[1, 2, 3].map(elemento=>elemento*2);

Me devuelve los elementos multiplicados por dos. 

Puedo cambiar, colocar una variable (myVar) en lugar de un array o seguir con el array y, por ejemplo, sumar.

myVar.myVar.map(elemento=>elemento+5);


[1, 2, 3].map(elemento=>elemento+4);

La palabra "elemento" la asignamos nosotros. Podemos colocar la que querramos, no necesariamente "elemento".

* filter -----> devuelve un valor booleano = v o f.

[1, 2, 3, 4].filter(elemento=>elemento%2 === 0); 

Se está fijando si el módulo del elemento %2, es 0. Es decir, pregunta si es divisible, es lo mismo que preguntar si su resto es cero. 
Si el valor es true, lo va a dejar. Si es false, lo va a sacar. 

Puedo pedir que me devuelva los elementos mayores o menos a un numero. 

[1, 2, 3, 4].filter(e => e >= 3);

Me da a devolver 3 y 4 ya que, son los numeros mayores a 3. 

reduce ------> acumulador solo existe dentro del reduce. Es una función que reduce el contenido de una array a un único resultado, 
suma todos los array al acumulador, de a uno. 
A cada elemento le suma el acumulador y luego suma todo. 

[1, 2, 3, 4].reduce((acumulador, elemento)=>acumulador + elemento,0); 

[1, 2, 3, 4].reduce((a, e) => a + e, 5); 

a= 5 + 1 = 6
a= 6 + 2 = 8 
a= 8 + 3 = 11 
a= 8 + 4 = 15

Resultado = 15

Al acumulador le doy un valor. Ese valor se lo damos luego de la coma.


STRINGS Y ARREGLOS

*length ---> nos dice la longitud del texto. 

"Hola".length; 

Nos va a dar: 4 

[1, 2, 3].length;

Nos va a dar 3.

*concat ---- > une dos arreglos o dos conjuntos de arreglos. 

"Hola".concat("Mundo")     o        "Hola" + "Mundo"

Me va a dar, en ambos casos, "HolaMundo". 

["a", "b"] + ["c", "d"];

Me dará:   a,bc,d

*indexOf ----->  devuelve  un elemento, de acuerdo a la posición indicada.

"Hola Mundo".indexOf("Mundo")


[1, 2, 3].indexOf(2);

Me devuelve 1 ya que, 2 se encuentra en la posición 1, es el elemento 1.

*slice ----->  devuelve  un pedazo de arreglo o una subpalabra, de acuerdo a las posiciones indicadas.

"Hola Mundo".slice(5,10); 

Busca desde 5 hasta 10, es decir que me devolverá "MUNDO", porque esas letras ocupan los lugares del 5 al 10. 

Busca y muestra los elementos que se encuentran en las posiciones indicadas. 

*includes -----> pregunta si el elemento contiene cierta letra o número. 

Ejemplo: consulta si javascript incluye la "a" y responde true, ya que es verdadero. 

"javascript".includes("a");

Ejemplo con array: 

[1, 2, 3].includes(3);     Pregunta si el array contiene el número 3.

[1, 2, 3].includes(2, 3);  Pregunta si el array contiene el número 3, a partir del elemento 2, es decir si está el tres entre los elementos
que le siguen al elemento dos. No toma al elemento 1 ni al elemento 0.


*/