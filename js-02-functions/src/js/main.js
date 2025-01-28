console.log("JS-02 funciones");

/* 
 Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:
- Modularidad: Dividir un programa en piezas lógicas 
  más pequeñas y manejables.
- Reutilización de código: Reducir la duplicación de 
  código al reutilizar funciones.
- Legibilidad: Hacer que el código sea más claro y fácil de entender.
- Mantenimiento: Facilitar actualizaciones o modificaciones 
  al concentrar la lógica en un solo lugar.
- Abstracción: Ocultar detalles internos y expone 
  solo lo necesario para trabajar con ellas

  RECOMENDACIONES PARA EL USO DE FUNCIONES

- Nombre descriptivo: Debe indicar claramente lo que hace. Evitar el uso de siglas. Se recomienda comenzar con un verbo.
- Parámetros: debe tener cero o más parámetros, separados por coma. Se recomienda no tener más de 3 parámetros.
- Seguir el principio SOLID, sobre el principio de responsabilidad única (Single Responsability Principle).
- Evitar efectos secundarios: una función no debe modificar variables externas.
*/

// ============================================================

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
----------- Funciones declaradas --------------
(function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.
sintaxis:
function nombreFuncionCamelCase ( parámetros ){
    //cuerpo de la función
    instrucciones;
}
hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.
*/
console.log( saludar() );

function saludar(){
    return ("Hola, soy una función declarada");
}

// Agregar el parámetro nombre y mostrar "Hola Thania, soy una función declarada."

function saludo( nombre ){
    return (`Hola ${nombre}, soy una función declarada`);
}
console.log( saludo( "Thania" ) );
console.log( saludo( "Serch" ) );
console.log( saludo( "Arely" ) );

/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.
sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/

// Realizar una función declarada que sume dos numeros, retorna el resultado de la suma.

/* function sumaDosNumeros(a,b){
    let suma = a + b;
    return suma;
}

console.log(sumaDosNumeros(2,7)); */

const sumaDosNumeros = function (num1, num2){
    return num1 + num2
}

console.log( sumaDosNumeros (3,5) );

let hora = 10;
let saludarDependiendoHora;

if(hora <12){
    saludarDependiendoHora = function(){
        return "Buenos días";
    } 
}   else {
        saludarDependiendoHora = function(){
            return "Buenas tardes";
        }
    }

console.log(saludarDependiendoHora());

/*
 ------------ Funciones autoinvocadas -----------------------
             (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.
sintaxis:
   ( function (parámetros ){} )( argumentos );
*/

( function setUp( name ){
    console.log(`Hola ${name}, soy una función autoinvocada`);
})("Thania");



/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una solo instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return
sintaxis:
    const nombreVariable = (parametros) => instrucción;
    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/

// Realizar una función declarada que calcule el área de un rectángulo

/* function areaRectangulo(ladoA, ladoB){
    return ladoA*ladoB;
}

console.log(areaRectangulo(4,5));
 */

// Convertir la funcion anterior a una función expresada

const areaRectangulo = function ( ladoA, ladoB ){
    return ladoA * ladoB;
}


console.log( areaRectangulo (3,5) );

// Convertir la funcion anterior a una función flecha

const calcularAreaRectangulo = (base, altura) => base * altura; 
console.log(calcularAreaRectangulo(3,4));

console.log(`El área del rectángulo es: ${calcularAreaRectangulo(3,4)} cm2`);

/* 
------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca
*/

const saludarPersona = nombre => `Hola ${nombre}, bienvenida`;

console.log(saludarPersona());
console.log(saludarPersona( "Thania" ) );


const saludarPersonaConDefault = ( nombre = "Invitada" ) => `Hola ${nombre}, bienvenida`;

console.log(saludarPersonaConDefault( ) );
console.log(saludarPersonaConDefault( "Thania ") );

// Realizar una función que tenga de parámetros el nombre y cohorte
// Los valores por default de los parámetros son nombre=participante y cohorte = "Cohorte de Generation"
// Retornar el mensaje "Hola nombre, bienvenido a la cohorte de Generation"

const saludoGeneration = ( nombre = "participante", cohorte = "de Generation" ) => `Hola ${nombre}, bienvenido/a a la cohorte ${cohorte}.`;

console.log( saludoGeneration () );
console.log( saludoGeneration ("Thania", "ch50") );
console.log( saludoGeneration ("Dae", "ch-50") );


console.log( parseInt( "faba") ); // NaN
console.log( parseInt( "faba", 10) ); // NaN

// base hexadecimal (16 dígitos): 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, F

// base decimal (10 dígitos): 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

// base octal (8 dígitos): 0, 1, 2, 3, 4, 5, 6, 7

// base binaria (2 dígitos): 0, 1

console.log( parseInt( "faba", 16) ); // 64186 valor decimal