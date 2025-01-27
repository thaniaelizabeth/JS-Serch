console.log("Sesión JS-01, tipos de datos y variables");

/*
 Tipos de datos de JavaScript:
 - Objetos y primitivos
 - Los datos primitivos:
    * string
    * boolean
    * number
    * null
    * undefined
    * bigint
    * symbol
    > son inmutables, no tienen atributos ni métodos
- Objetos:
     tipo object
    {clave: valor, edad: 25, name: "pitufina"}
     tipo array
    [element_1 , element_2 , "Pitufinas", 38, {}, {}  ]
*/

/* 
string: tipo de dato que representa una secuencia de caracteres. Puede incluir textos, números, especios, símbolos. Siempre se define entre comillas.
 */

console.log("Kati sería unas pantuflas"); // Se puede usar comillas dobles
console.log('Alberti sería unas botas de trabajo'); // Se pueden usar comillas simples
console.log(`Verónica sería unos mocasines`) // usando backticks (apóstrofe grave) para Template Literal

/* 
- String template literals ` ` (backtick) 
  Es una forma más flexible y legible de trabajar con cadenas 
  de texto. Utilizan comillas invertidas (``) en lugar de 
  comillas simples o dobles y permiten incrustar expresiones
  dentro de la cadena utilizando la interpolación ${}.
 */

// Mostrar en consola " El resultado de 3*4 = 12 pesos"

let valor1 = 3;
let valor2 = 4;

console.log("El resultado de " + valor1 + " * " + valor2 + " = " + valor1 * valor2);

console.log(`El resultado de ${valor1} * ${valor2} = ${valor1*valor2} pesos.`);

/*
 Tipos de datos number.
 - números positivos: 100, 1, 0.258
 - números negativos: -1 , -50.35
 - valores que no pueden ser representados numéricamente: NaN
 - número infinitos: +Infinity, -Infinity
*/

console.log( typeof 3.141592 ); // 'number'
console.log( typeof (3*3) ); // 'number'
console.log( typeof "" ); // 'string' empty string
console.log( typeof " ");
console.log( typeof (3*"pitufo trbajador")); // number, esto nos da un NaN 
console.log( (3*"pitufo trbajador")); // number, esto nos da un NaN 
console.log( typeof +Infinity ); // 'number'
console.log(typeof (3 + "Viernes temático")); // 'string'
console.log( typeof (4/0));
console.log(4/0);

/*
 Cuando se realizan operaciones que exceden los límites
 de MAX_SAFE_INTEGER se produce una pérdida de precisión.
 Perdida precisión: No se pueden representar exactamente ciertos valores.
  típicamente en operaciones de números de punto flotate.
*/

console.log( `Pérdida de precisión: 0.1 + 0. 2 = ${ 0.1 + 0.2 }`); // 0.30000000000000004

console.log( `Valor entero seguro en JavaScript: ${Number.MAX_SAFE_INTEGER} `); // 9007199254740991

console.log( `MAX_SAFE_INTEGER + 1: ${Number.MAX_SAFE_INTEGER + 1 }`); 
console.log( `MAX_SAFE_INTEGER + 2: ${Number.MAX_SAFE_INTEGER + 2 }`); 
console.log( `MAX_SAFE_INTEGER + 3: ${Number.MAX_SAFE_INTEGER + 3 }`); 
console.log( `MAX_SAFE_INTEGER + 4: ${Number.MAX_SAFE_INTEGER + 4 }`); 
console.log( `MAX_SAFE_INTEGER + 5: ${Number.MAX_SAFE_INTEGER + 5 }`);

/*
 Tipos de datos BigInt
 Sirve para representar valores numéricos enteros, de los que el
 tipo number no pueda representar o no es seguro.
 Las operaciones con un bigInt se debe hacer con otro bigInt
*/
const myBigInt = 9007199254740991n;
console.log( typeof myBigInt ); // bigint

console.log( `Resultado de myBigInt + 1n: ${ myBigInt + 1n }  `);
console.log( `Resultado de myBigInt + 2n: ${ myBigInt + 2n }  `);
console.log( `Resultado de myBigInt + 3n: ${ myBigInt + 3n }  `);
console.log( `Resultado de myBigInt + 4n: ${ myBigInt + 4n }  `);
console.log( `Resultado de myBigInt + 5n: ${ myBigInt + 5n }  `);
console.log( `Resultado de myBigInt + 6n: ${ myBigInt + 6n }  `);

/* 
Tipo de dato undefined 
- Una variable que es declarada, pero el tipo de datos no es definido.*/

let myName;
console.log( typeof myName);

/* 
Tipo de dato null
Una variable que es intensionalmente se borra el tipo de dato */

let myAge;
console.log(`Tipo de dato en myAge: ${typeof myAge}`); // undefined

myAge = 20;
console.log(`Tipo de dato en myAge: ${typeof myAge}`); // number

myAge=null;
console.log(`Tipo de dato en myAge: ${typeof myAge}`); // object
console.log(`myAge es null?  ${ myAge === null } `);// true


/* 
Tipo de dato boolean
Tiene dos estados: true y false */

const isActive = true;
console.log( typeof isActive ); // boolean

console.log (typeof (3>5 || 5>3)); // 'boolean'

// --------------------------------------------------

/* 
Conversión explícita de datos (coerción de tipo)
En ocasiones en español le llaman encasillamiento y en inglés type casting

El type casting es el acto de convertir variables de un tipo de dato a otro. 
Esto puede ser implícito (automático) o  explícito (forzado por el desarrollador).

*/

// Conversión implícita
const resultado = "5" + 2; // 52 Número convertido a string|
console.log(resultado);
const multiplicacion = "5" * 3; // 15 El string convertido a number
console.log(multiplicacion)
const division = "two" * 6; // NaN
console.log(division)

// Conversión explícita a Strings
const edadMascota = 10;
const edadMascotaString = String(edadMascota);
console.log(`Mi mascota tiene ${edadMascotaString} años`);
console.log(`Mi mascota tiene ${edadMascota} años`);

console.log( String ( true ) ); // "true"
console.log( String ( null ) ); // "null"
console.log( String ( [] ) ); // empty Array
console.log( String ( undefined ) ); // "undefined"
console.log( String ( [2,3,4,5,null,3] ) ); // "2,3,4,5,,3"
console.log( String ( {} ) ); // [object Object]
console.log( String ( {name:"Thania", active: true} ) ); // [object Object]
// Para los objetos se recomienda usar el método JSON.stringyfy( object )
console.log( JSON.stringify( { name:"Thania", active: true } ) ); // {"name":"Thania","active":true}

// Conversión explícita a number
const costo = "100";
const costoConIVA = costo * 1.16; // 116.0 conversión implícita de string a number
console.log( costoConIVA );
const precioCroquetas = "2000";
const precioJabon = "300.50";
const precioVitaminas = "600.30";
const costoTotal = precioCroquetas + precioJabon + precioVitaminas;
console.log( costoTotal ); // 2000300.50600.30
/* 
Number() vs parseInt 
- Number convierte enteros y decimales. Y devuelve NaN si la cadena contiene algún caracter no numérico.
- parseInt convierte solo la parte entera
- parseFloat convierte la parte entera y decimales
- parseFloat y parseInt realizan la conversión hasta encontrar un caracter no numérico
*/

console.log( Number("68.58") ); // 68.58
console.log( parseInt("68.58") ); // 68
console.log( parseFloat("68.58") ); // 68.58

console.log( Number("68.58 dolares") ); // NaN
console.log( parseInt("68.58 dolares") ); // 68
console.log( parseFloat("68.58 dolares ") ); // 68.58

console.log( Number("$68.58 dolares") ); // NaN
console.log( parseInt("$68.58 dolares") ); // NaN
console.log( parseFloat("$68.58 dolares ") ); // NaN

console.log( Number("68-58") ); // NaN
console.log( parseInt("68-58") ); // 68
console.log( parseFloat("68-58") ); // 68

console.log( Number( true) ); // 1
console.log( Number( false) ); // 0

console.log( Number ( [] ) ); // 0
console.log( Number ( [30] ) ); // 30
console.log( Number ( [30,40] ) ); // NaN


/* 
Conversión a tipo boolean
Los sigientes valores son false: ""(empty string), 0, null, NaN, undefined */

console.log( Boolean(1) ); // true
console.log( Boolean(10000) ); // true
console.log( Boolean(-10000) ); // true
console.log( Boolean(0) ); // false
console.log( Boolean(null) ); // false
console.log( Boolean(NaN) ); // false

console.log( Boolean("") ); // false
console.log( Boolean(" ") ); // true
console.log( Boolean("1") ); // true
console.log( Boolean("0") ); // true


// Resumen:
// Number()
// [] (empty array) -> 0, [30]-> 30, [30,30]->NaN, false-> 0, true-> 1
// String()
// [] -> "", [12,2]->"12,2", function(){}-> "function(){}"
// {} ->"[object,object]", {clave:valor, age:17} ->"[object,object]"
// Para convertir un objeto a string, la forma correcta es usar
// el método JSON.stringyfy( objeto );
