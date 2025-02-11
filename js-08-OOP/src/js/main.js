import { insertMainHeader } from "/src/modules/header/header.js";
import { insertMainFooter } from "/src/modules/footer/footer.js";
import { amdRadeonRx, mouseGamePixArt } from "../modules/class/amd-radeon-rx.js";
import { Product } from "../modules/class/Product.js";
import { Mouse } from "../modules/class/mouse.js";

insertMainHeader();
insertMainFooter();

console.log( amdRadeonRx );
// Podemos acceder a los atributos usando el operador objeto.nombreAtributo (access and call), n.precedence: 17
// Podemos acceder usando objeto[nombreAtributo]

console.log( amdRadeonRx.model );
console.log( amdRadeonRx["model"] );

let attribute = "model"
console.log( amdRadeonRx[attribute] );
attribute = "price";
console.log( amdRadeonRx[attribute] );

// Acceder al atributo title e imprimir en consola, usando los dos métodos para acceder.
attribute = "title";
console.log( amdRadeonRx.title ); 
console.log( amdRadeonRx["title"] );
console.log( amdRadeonRx[attribute] ); 

console.log( amdRadeonRx.dato1 ); // Descrip 1

console.log(mouseGamePixArt.dato1 ); // undefined
// obteniendo el numero de elementos
console.log( amdRadeonRx.compatibilidad.length ); // 2
//console.log( mouseGamePixArt.compatibilidad.length ); // Cannot read properties of undefined

// Operador de encadenamineto opcional (?.)
console.log( mouseGamePixArt.compatibilidad?.length );

console.log( amdRadeonRx.imprimirPrecioMxN() );
console.log( amdRadeonRx.imprimirPrecioDolares() );

console.log( mouseGamePixArt.imprimirPrecioMxN() );
console.log( mouseGamePixArt.imprimirPrecioDolares() );

// ============ Usando la clase Product ==============

const mouseLogi = new Product( "Mouse", 800, "Logitech" );
const tecladoGamer = new Product( "Teclado" );
const monitorHP = new Product( "Monitor" );
const bateria = new Product();

// mouseLogi.price = 1;
mouseLogi.productName="Mouse2";
console.table(mouseLogi);
console.log(mouseLogi.printPrice());

// Usar la clase Mouse

const mouseMac = new Mouse("Mouse Mac", 1400, "Mac", 3000);

console.log( mouseMac.printPrice() );
console.log( mouseMac.card() );




