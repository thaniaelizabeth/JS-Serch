/* 
El control flow (flujo de control) en JavaScript describe cómo 
 se ejecutan las instrucciones de un programa, desde el inicio 
 hasta el final. Se basa en estructuras como secuencias, 
 condiciones y bucles que determinan qué parte del código se ejecuta y cuándo.
*/

// ----------------- Condicional if-else --------------------
/*
 Ejecuta una sentencia si una condición específica es
 evaluada como verdadera.
 Sintaxis:
    if ( condición ) sentencia;

    if ( condición ) {
        sentencias;
    }

    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;

    if ( condición ) {
        sentencias;
    }
    else {
        sentencias;
    }

    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;

    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   
*/

// Ejemplo

const temperatura = 30;

/** 
 * Función que recibe la temperatura y devuelve un mensaje:
 * si la temperatura es = 22 grados: La temperatura de 22 es ideal.
 * Si la temperatura es de 15 a 21 grados: La temperatura es fresca.
 * Si la temperatura es menor a 15 grados: La temperatura de 8 grados es fría.
 * Si la temperatura es mayor a 22 grados: La temperatura de 30 grados es calurosa y le gustaría a Nan. 
 * @param {number} temperatura
 * @returns {string} mensaje 
 */ 
const evaluacionTemperatura = temperatura => {
  if(temperatura == 22){
    console.log(`La temperatura de 22 grados es ideal`)
  } else if(temperatura >= 15 && temperatura <=21){
    console.log(`La temperatura es fresca.`)
  } else if(temperatura < 15){
    console.log(`La temperatura de 8 grados es fría.`)
  } else {console.log(`La temperatura de 30 grados es calurosa y le gustaría a Nan. `)}
}

evaluacionTemperatura(30);
evaluacionTemperatura(22);
evaluacionTemperatura(21);
evaluacionTemperatura(15);
evaluacionTemperatura(14);
evaluacionTemperatura(-2);
evaluacionTemperatura(23);
evaluacionTemperatura(temperatura);

console.log("Separación");

const evaluacionTemperaturaDos = temperatura => {
  if(temperatura == 22){
    console.log(`La temperatura de 22 grados es ideal`)
  } else if(temperatura >= 15 && temperatura <=21){
    console.log(`La temperatura de ${temperatura} grados es fresca.`)
  } else if(temperatura < 15){
    console.log(`La temperatura de ${temperatura} grados es fría.`)
  } else {console.log(`La temperatura de ${temperatura} grados es calurosa y le gustaría a Nan.`)}
}
evaluacionTemperaturaDos(30);
evaluacionTemperaturaDos(22);
evaluacionTemperaturaDos(21);
evaluacionTemperaturaDos(15);
evaluacionTemperaturaDos(14);
evaluacionTemperaturaDos(-2);
evaluacionTemperaturaDos(23);
evaluacionTemperaturaDos(18);
evaluacionTemperaturaDos(temperatura);