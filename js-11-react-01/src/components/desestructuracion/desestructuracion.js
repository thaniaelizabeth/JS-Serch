
let x = 10;
let y = 20; 
console.log( x, y);

// Pasar el valor de "x" a "y" y visceversa

let variableTemporal = x;
x = y;
y = variableTemporal;

console.log( x, y);
[x, y] = [y, x];
console.log( x, y);

/**
 *  Desestructuración 
 * 
 *  La desestructuración en JavaScript es una característica 
 *  que te permite extraer datos de arrays y objetos 
 *  de manera más conveniente y legible, 
 *  asignándolos a variables individuales.  
 */

const numeros = [1, 2, 3, 4];
let a;
let b;
let c;

/* a = numeros[0];
b = numeros[1];
c = numeros[3];
 */

[a, b, ,c] = numeros
console.log(a ,b, c); // 1 2 4

// --------------------------------

const [valueA, valueB, ,valueC] = numeros;
console.log(valueA, valueB, valueC);

// Ejercicio
 // Del siguiente arreglo ["Isabel", "María", "Ana", "Luis", "Pedro"];
 // Extraer en variables independientes los valores de Isabel y Ana

 const nombres = [ "Isabel", "María", "Ana", "Luis", "Pedro" ];
 const [ primerNombre, , segundoNombre ] = nombres;
 console.log( primerNombre, segundoNombre );

 // Desestructuración de objetos
 const datosMiguel = {
    name: "Miguel",
    lastName: "González",
    age: 20
 }

 // forma tradicional
 /* const nombre = datosMiguel.name;
 const lastName = datosMiguel.lastName; */
 //console.log(nombre, lastName );

 const { age, name : nombre } = datosMiguel;
 //const nombre = name;
 console.log(nombre, age); 

 // Ejercicio
const product = {
    name: "Jabón Zote",
    precio: {
        frontera: 10,
        zonaCentro: 20,
        korea: 1000 
    },
    color: "blanco"
}

// obtener en variables independientes el valo de name y color
const { name : nombreJabon, color : colorJabon } = product;
console.log( nombreJabon, colorJabon );

// Desestructurando un objeto dentro de otro objeto
/* const { frontera : precioFrontera } = product.precio;
console.log(precioFrontera);
 */

const { precio:{ frontera : precioFrontera } } = product;
console.log( precioFrontera );

// Desestructurar el name y precio de corea, renombrar las variables name -> nombrePRoducto y precio.korea ->precioKorea

const { name : nombreProducto, precio : { korea : precioKorea } } = product;
console.log( nombreProducto, precioKorea );






