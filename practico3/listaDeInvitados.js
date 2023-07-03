
let personas = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Soﬁa", "Leandro", "Emilia"];
let rechazados = [];
let admitidos = [];

let i = 0;

for (i = personas.length -1 ; i>=0; i--){

if(i===0 || i===5){

rechazados.push(personas[i]);

} else {

    admitidos.push(personas[i]);

}
}

console.log("Rechazados", rechazados);
console.log("Admitidos", admitidos);


console.log("La lista de invitados admitidos es") 
for (i = 0; i < admitidos.length; i++){ 
console.log(admitidos[i]);

}

console.log("La lista de invitados rechazados es") 
for (i = 0; i < rechazados.length; i++){ 
    console.log(rechazados[i]);
}



