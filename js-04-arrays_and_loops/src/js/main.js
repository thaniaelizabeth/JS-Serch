
const postres = [];

// Agregar un postre al final del arreglo

postres.push("Pastel de Guayaba");
postres.push("Flan", "Gelatina");

console.log( postres );
console.log( postres.length )

// Eliminar un postre del final del arreglo

console.log(`El elemento eliminado con pop() ${postres.pop()}`);
console.log( postres );

// Agregar un postre al inicio de mi arreglo
postres.unshift("Tiramisú");
console.log( postres );

// Eliminar un elemento al inicio de mi arreglo
console.log(`El elemento eliminado con shift() ${postres.shift()}`);
console.log( postres );

// Buscar un elemento dentro del arreglo usando indexOf().
console.log(`Índice de "Flan": ${postres.indexOf("Flan")}`); // 1

// Buscar el postres "Flan" 
// Si existe mostrar "El flan existe"
// Si no existe mostrar "El flan no existe"
// Para evaluar usar el operador ternario.     evaluación ? valor si verdadero : valor si falso


console.log( postres.indexOf("Flan") !== -1 ? "El flan existe" : "El flan no existe" );

// ============================


const pasteles = [ "Pastel de Chocolate", "Pastel de Zanahoria", "Pastel de Limón" ];

const eliminarPastel = ( array, indice ) => {
  const copyArray = array.slice();
  const pastelEliminado = copyArray.splice(indice, 1);
  console.log( copyArray ); // ['Pastel de Chocolate', 'Pastel de Limón']
  return pastelEliminado;
}

console.log( eliminarPastel(pasteles, 1)); 

console.log( pasteles ); 


// ============ Declarar un arreglo ======
const myArray = []; // []
const myArray2 = new Array(); // []

const myArray3 = [5]; // [5]
const myArray4 = new Array(5); // [undefined, undefined, undefined, undefinedm undefined]

console.log(myArray4);

const myArray5 = [5,6];
const myArray6 = new Array(5,6);

console.log(myArray5);
console.log(myArray6);

// ============ Iterar un arreglo con for loop ===========

/* 
Sintaxis:
Inicialización, condicion y expresión final 
*/

const nombres = ["Juan", "Pedro", "María", "Ana"];

for( let index = 0; index < nombres.length; index++ )
  console.log( nombres [index] );
console.log( "Me muestro en consola, muchas veces?" );

// ========= Iterar un arreglo y mostrar los elementos como una lista ===========

const gelatinas = ["Fresa", "Limón", "Naranja", "Uva"];
const gelatinasLista = [];

for ( let index = 0; index < gelatinas.length; index++ ){
  gelatinasLista.push(`<li> ${ gelatinas[index] } </li>`);
}

console.log(gelatinasLista); 
/*  [
'<li> Fresa </li>', 
'<li> Limón </li>', 
'<li> Naranja </li>', 
'<li> Uva </li>'
] 
*/
 // iterar un arreglo y hacer una lista
const refGelatinasLista = document.getElementById("gelatinas-lista");
console.log(refGelatinasLista);
refGelatinasLista.innerHTML = gelatinasLista.join(""); //con el join separa los elementos del array por lo que pongamos en las comillas, en este caso sería sin nada, que no ponga nada.

// Simplificación de la iteración de un arreglo 
// ----------------------- Uso de for... of ------------------
/* Ejecuta una sentencia por cada elemento de un objeto iterable(array, colección, string).
Sintaxis:
    for (const iterator of object) {
    
    }
*/

const colores = ["Rojo", "Azul", "Verde", "Amarillo"];

for ( let i = 0; i < colores.length; i++ ) {
  const element = colores[i];
  console.log( element )  
}

for ( const color of colores ) {
  console.log( color );
}

// ---------------------- Ejercicio con for of ---------------------
/**
 *  Del siguiente arreglo de cantantes, mostrar en el DOM, el listado como unorder list.
 *  const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
 *  - Usar for of
 *  - De preferencia usar una función 
 */

/* const cantantesArreglo = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];

const listarCantantes = cantantes => {
  const cantantesLista = [];
  for ( const cantante of cantantes ) {
    cantantesLista.push( `<li>${cantantes}</li>` );
  }
  return cantantesLista.join("");
}

const refCantantesLista = document.getElementById("cantantes-lista");
refCantantesLista.innerHTML = listarCantantes(); */

const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
const refListaCantantes = document.getElementById("cantantes-lista");
const generarListaCantantes = cantantesArray => {
    const cantantesLista = [];
    for (const cantante of cantantesArray) {
        cantantesLista.push(`<li>${cantante}</li>`);
    }
    return cantantesLista.join("");
}
const insertarListaDeCantantesAlDOM = (lista, refDom)=> refDom.innerHTML = lista;
const listItemsOfCantantes = generarListaCantantes(cantantes);
insertarListaDeCantantesAlDOM( listItemsOfCantantes, refListaCantantes);


// ---------------- Uso de break en ciclos -------------------
// break detiene la ejecución de la iteración en curso y termina el ciclo.

let iteracion = 0;

for ( ; ; ){
  console.log(`Núm de iteración: ${iteracion}`);
  iteracion++;
  if ( iteracion === 5){
    break;
  }
}

// ---------------------- Uso de break y label en ciclos anidades -----------------------

multiplicando:
for ( let i = 1; i <= 7; i++){
  multiplicador:
  for ( let j = 1; j <= 10; j++){
    console.log(`${i} x ${j} = ${i * j}`);
    if ( i >= 4) break multiplicando;
  }
}

// ============ Ejercicio mental =============================
let myIteration;

for (myIteration = 0; myIteration <= 5; myIteration++) {
    console.log("For loop", myIteration ); //  0...5
    if ( myIteration === 3 ) break;
}
console.log("Final", myIteration); // 6


// ============ El scope de las variables ==========

/*
  Variables declaradas con var, let y const tienen un alcance de función. 
  Esto significa que están limitadas al contexto de la función 
  en la que se declaran.
*/
function functionScope(){
    var myVar = 10;
    let myLet = 20;
    const myConst = 30;
    console.log(myVar);
    console.log(myLet);
    console.log(myConst);
    
}
functionScope();
// console.log(myVar);
// console.log(myLet);
// console.log(myConst);

// ================ Reassigment and Redeclaration========
/*
 Declarar una variable significa que se reserva el nombre 
 en memoria en el scope actual. 
 
 Inicializar una variable es establecer el valor de la variable
*/
// Pueden ser reasignadas y redeclaradas dentro del 
// mismo contexto de función.
var userName = 10;
userName = 20; // Reasignación válida
var userName = 30; // Redeclaración válida en el mismo contexto de función
// Pueden ser reasignadas dentro del mismo bloque y no pueden 
// ser redeclaradas en el mismo ámbito.
let age = 10;
age = 20; // Reasignación válida
// let age = 30; // Error: No se puede redeclarar en el mismo ámbito
// No pueden ser reasignadas después de su inicialización y tampoco 
// pueden ser redeclaradas en el mismo ámbito.
const address = 10;
// address = 20; // Error: No se puede reasignar
// const address = 30; // Error: No se puede redeclarar

// ================ Block Scope ====================
/*
  Variables declaradas con let y const tienen un alcance de bloque. 
  Esto significa que están limitadas al bloque en el que se declaran.
*/
{
  var a = "a";
  let b = "b";
  const c = "c"; 
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
// console.log(b);
// console.log(c);

// ================ Hoisting =======================
/*
  El "hoisting" en JavaScript es un comportamiento que ocurre durante 
  la fase de compilación antes de la ejecución del código. 
  Se refiere a la elevación (movimiento) de las declaraciones 
  de variables y funciones al inicio de su contexto de ejecución
*/

/*
  Las variables declaradas con var son elevadas al inicio de su contexto 
  de ejecución (ya sea el ámbito de función o el ámbito global).
  
  Sin embargo, solo la declaración de la variable es elevada, 
  no la asignación. Esto significa que la variable existe, 
  pero su valor es undefined hasta que llega a la línea de asignación.
*/
console.log(phone); // undefined
var phone = "55-65-123-123";
console.log(phone); // 55-65-123-123
/*
  Las variables declaradas con let y const también se elevan al 
  inicio de su contexto, pero a diferencia de var, no se inicializan 
  automáticamente con undefined. La fase de inicialización de estas 
  variables no ocurre hasta llegar a la línea de código donde se declaran.
*/

//console.log(email);
let email = 10;

// ------------ Uso de contune en ciclos -------------
console.log( NaN === NaN );
for ( let i = 0; i <= 5; i++ ){
  if ( i === 3 ) continue;
  console.log("Estoy dentro del ciclo for");
  console.log("Valor de i ", i);
}

// console.log(i);

for ( let i = 0; i <= 5; i++ ){
  if ( i !== 3 ){
  console.log("Estoy dentro del ciclo for");
  console.log("Valor de i ", i);
  }
}