
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