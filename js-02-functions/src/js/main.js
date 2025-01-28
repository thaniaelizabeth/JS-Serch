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