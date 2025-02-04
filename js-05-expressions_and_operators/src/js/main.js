/*
 En JavaScript, una expresión es cualquier fragmento de código que 
 produce un valor. Puede ser tan simple como un número o una variable, 
 o más compleja, como una operación matemática o una llamada a función.
Ejemplos:
10          // Número (expresión literal)
x           // Variable (si x está definida)
5 + 3       // Expresión aritmética (devuelve 8)
true && false // Expresión lógica (devuelve false)
"Hola".length // Expresión con propiedad (devuelve 4)
*/

/* 
   Los operadores aritméticos toman valores numéricos 
   (ya sean literales o variables) como sus operandos 
   y devuelven un solo valor numérico.
   adición +
   multiplicación *
   substracción -
   división /
   resto %
   exponencial **  - Math.pow(2, 3)   2**3
*/
// ---- Precedencia de operadores -------------------------
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

console.log(3 * 2 / 2); // 3
console.log(3 / 2 * 2); // 3
console.log(2 * 4 / 2**3); // 1
console.log(3 ** 2 ** 3); // 6561

// ---------------- Opéradores relacionales ----------------
/*
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than
  
  Un operador de comparación compara sus operandos y devuelve un valor 
  Boolean basado en si la comparación es verdadera o no.
  <  menor que
  >  mayor que
  <= menor o igual que
  >= mayor o igual que
   - Valores booleanos true y false se convierten en 1 y 0 respectivamente.
   - null se convierte a 0.
   - undefined se convierte a NaN.
*/

console.log(null >= 0);
console.log(undefined <=0);
console.log("3" >= 3); // true

// ---------------- Operadores de igualdad ----------------
/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Equality
Un operador de igualdad compara dos valores y devuelve un valor Boolean
basado en si la comparación es verdadera o no.
==  igual que
!=  diferente que
=== igual que y mismo tipo de dato
!== diferente que y mismo tipo de dato

- null y undefined NO son convertidos a cero
*/

console.log(  3 == 3 );  // true
console.log(  3 == "3" ); // true
console.log(  3 === "3" ); // false
console.log(  3 !== "3" ); // true
console.log(  3 != "3" );  // false
// Si un operando es null y el otro undefined, devuelve verdadero(true).
console.log( null == undefined ); // true
// Si ambos son objetos, devuelve true solo si ambos operandos hacen 
// referencia al mismo objeto.
const obj1 = { name: "Juan" };
const obj2 = { name: "Juan" };
const obj3 = obj1;
console.log( obj1 == obj2 ); // false
console.log( obj1 == obj3 ); // true

//--- Si los operandos son de diferente tipos, intenta convertirlos al mismo tipo antes de comparar:-----
// Al comparar un número con una cadena, convierte la cadena en un valor numérico.
console.log(  3 == "3" ); // true

// Si uno de los operandos es booleano, convierte el operando booleano en 
// 1 si es verdadero y en 0 en el caso de falso.
console.log(  1 == true ); // true
console.log(  0 == false ); // true

//--- Si los operandos tienen el mismo tipo, se comparan de la siguiente manera:-----
// String: devuelve verdadero solo si ambos operandos tienen los mismos caracteres y en el mismo orden.
console.log( "hola" == "hola" ); // true
console.log( "hola" == "Hola" ); // false
console.log( 'Hola "hola" ' == 'Hola "hola" ' ); // true
console.log( "Hola \"hola\" " == "Hola \"hola\" " ); // true

console.log("Primer línea,\nsegunda línea,\n\ttercer línea");

// Se recomienda usar el método localCompare(): compara cadenas de texto de acuerdo con las reglas de un idioma específico
console.log("apple".localeCompare("banana")); // -1 (porque "apple" < "banana")
console.log("grape".localeCompare("grape"));  // 0 (son iguales)
console.log("pear".localeCompare("orange"));  // 1 (porque "pear" > "orange")
console.log("a".localeCompare("A", "en", { sensitivity: "base" })); // 0
console.log( "a".localeCompare("A") ); //

// Number: devuelve verdadero solo si ambos operandos tienen el mismo valor. 
// +0 y -0 se tratan como el mismo valor. 
// Si alguno de los operandos es NaN, devuelve falso.
console.log(  +0 == -0 ); // true
console.log(  NaN == NaN ); // false
console.log(  1 == 1 ); // true
console.log(  1 == 1.0 ); // true
console.log(  1 == 1.1 ); // false
console.log(  isNaN("hola" / 3 )  ); // true
console.log( "hola" / 3); //NaN
console.log( "hola" / 3 == NaN); // false


// ------- Operadores de asignación ----------------
/*
 Asigna un valor a su operador izquierdo basándose en el valor
 de su operando derecho:
 asignación =
 
 Operadores abreviados ( compuestos ):
  op1 += op2  -> op1 = op1 + op2
  op1 -= op2  -> op1 = op1 - op2
  op1 *= op2  -> op1 = op1 * op2
*/

let suma = 0;

// Agregar 2 al valor de suma
suma += 2;
console.log(suma);

let valorA = 15;
valorA *= 2;
console.log(valorA);

let mensaje = "Me voy de vacaciones";
mensaje += 2;

console.log(mensaje);

// -------------- Operandos unarios ---------------
// Solo actúan sobre un operando
// Negación unaria

let numero = 3;
let dinero = -numero;
console.log( numero, dinero); 

// suma unaria
let pago = +dinero;
console.log( pago);

let intereses = +"5.23";
console.log( 5 + intereses);

let pagoFinal = 0;
console.log( pagoFinal += 5 + + "3");
console.log( pagoFinal += 5 + parseInt("3"));

// Operador de incremento y decremento en unidad.
/*
  Operador de pre-incremento y pre-decremento
    ++ valor
    -- valor
  Operador de post-incremento y post-decremento
    valor ++
    valor --
*/

let number = 10;
++ number;
console.log(number);
number ++
console.log(number);

/* for (let i = 0; index < Array.length; index ++){
   const ()
}
 */

number = 20;
console.log(number);
console.log(number = number + 1);

number = 20;
console.log(number++);
console.log(number);

console.log(++number);
console.log(number);

number = 40;
console.log( number = number + 1); //41
console.log( number ); // 41
console.log( ++number ); // 42

number = 40;
console.log( ++number ); // 41
console.log( number ); // 41

number = 40;
console.log( -- number ); // 39
console.log( number ); // 39

number = 100;
let kati = 10;
console.log( kati + + number  ); // 110
console.log( kati + ++number  ); // 111

// ------------ Ejercicio Mental ---------------------
let x = 3;
let y = x++; // y:3   x:4
console.log(`x :${ x++ } y:${ ++y }`); // x:4    y:4
                                       // x:5
console.log(`x :${ x } y:${ y }`); // x:5     y:4


// --------- Ejercicio mental ------------

let a = 0, b = 0;
for (; a<3; b = a++){
   console.log(a,b);
   
}
console.log(a,b);

// ------------ Ejercicio Mental ---------------------
a = 0, b = 0; // 
for( ; a < 3 ; b = ++a){ // b=1 a=1, b=2 a=2, b=3 a=3
  console.log( a , b ); 
  // N.Iteración     a     b
  //   1             0     0
  //   2             1     1
  //   3             2     2

}
console.log( a , b ); // 3, 3

// ===========================================

const numeros = [2,4,5,67,8];
let indice = 0;
while( indice < numeros.length ){
   console.log("Numero:", numeros[indice++] );
}

/* OP1 && OP2 Si OP1 es verdadero, se retorna la expresión de OP2.
 OP1 && OP2 si OP1 es falso, se retorna la expresión de OP1.
 OP1 || OP2 Si OP1 es verdadero, se retorna la expresión de OP1.
  */
// Se consideran falsos: "", 0, null, undefined, NaN

console.log( true && false);
console.log( true && "Usando corto circuito");
console.log( "false" && "Mi mente");
console.log( 0 && "Mi mente");
console.log( false && "Mi mente");
console.log( "" && "Mi mente");
console.log( undefined && "Mi mente");
console.log( null && "Mi mente");
console.log( NaN && "Mi mente");

// console.log( true || "Usando corto circuito");
console.log( false || "Usando corto circuito");
console.log( true || "Usando corto circuito");
console.log( true || false);

// casos prácticos
// console.log( vx );

console.log(true || vx);

console.log("sep");
let loggedIn = false
loggedIn && console.log("b");


// ------------ ejercicio-------------------------------
// Mostrar en consola "Acceso permitido" solo si la variable esAdmin = true

let esAdmin = true;
esAdmin && console.log( "Acceso permitido" );

// ------------------------
let nombre = "";
let usuario = nombre || "Invitado";
// let usuario = nombre ?? "Invitado";
console.log( "Hola " + usuario );

// ------------------ Ejercicio --------------------------
/*
  Imprimir en consola "Acceso Denegado" si la variable esAutorizado = true
  En caso contrario imprimir "Acceso concedido".
*/

console.log("---------------")

let esAutorizado = false;
if (esAutorizado === true)
   console.log("Acceso denegado")
else console.log("Acceso concedido");

console.log( esAutorizado === true ? "Acceso denegado" : "Acceso concedido");

esAutorizado && console.log("Acceso denegado");
esAutorizado || console.log("Acceso concedido");

let acceso = esAutorizado && "Acceso concedido" || "Acceso denegado";

console.log( acceso );







