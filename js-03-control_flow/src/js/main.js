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

let temperatura = 30;

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

//--------------- Condicional Switch --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.
 Para comparar la condicional switch usa el operador estricto ===
 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }
*/

temperatura = 19;
switch (temperatura) {
    case 22:
        console.log(`La temperatura de ${temperatura}🌡️ es ideal 😊👌.`);
        break;
    case 15:
        console.log("estoy en 15 grados");
    case 16:
        console.log("estoy en 16 grados");
    case 17:
        console.log("estoy en 17 grados");
    case 18:
        console.log("estoy en 18 grados");
    case 19:
        console.log("estoy en 19 grados");
    case 20:
        console.log("estoy en 20 grados");
    case 21:
        console.log(`La temperatura de ${temperatura}° es fresca.`);
        break;
    case 13:
    case 14:
        console.log(`La temperatura de ${temperatura}° es fria 🥶.`);
        break;
    default:
        console.log(`La temperatura de ${temperatura}° es calurosa y le gustaría a Nan.`);
        break;
}

/**
 * Funcion que reciba la velocidad de un ventilador y devuelva el mensaje de la velocidad del ventilador en:
 * Velocidad 0: Apagado
 * Velocidad 1: Baja
 * Velocidad 2: Media
 * Velocidad 3: Alta
 * Cualquier otro valor: velocidad desconocida
 * @param {number} velocidad
 * @returns {string} mensaje
 */

const velocidadVentilador = number => {
  if ( number == 0 )
    return "Apagado";
  else if ( number == 1 )
    return "Velocidad Baja";
  else if ( number == 2 )
    return "Velocidad Media";
  else if ( number == 3 )
    return "Velocidad Alta" ;
  else return "Velocidad desconocida";
}

console.log(velocidadVentilador(0));
console.log(velocidadVentilador(1));
console.log(velocidadVentilador(2));
console.log(velocidadVentilador(3));
console.log(velocidadVentilador(5));
console.log(velocidadVentilador(-1));


console.log("Separación --------------")

const velocidadVentiladorSwitch = number => {
  switch (number) {
    case 0:
      return "Apagado";
    case 1:
      return "Velocidad Baja";
    case 2:
      return "Velocidad Media";
    case 3:
      return "Velocidad Alta";
    default:
      return "Velocidad desconocida";
  }
} 

console.log(velocidadVentiladorSwitch(0));
console.log(velocidadVentiladorSwitch(1));
console.log(velocidadVentiladorSwitch(2));
console.log(velocidadVentiladorSwitch(3));
console.log(velocidadVentiladorSwitch(5));


// ------------------------ Operador ternario --------------------------
/*
 Es el único operador de JavaScript que tiene 3 operandos.
 Generalmente se utiliza como opción a la sentencia if-else.
 Sintaxis:
  condición ? expresiónSiCondiciónEsVerdadera : expresionSiCondiciónEsFalsa; 
*/

const pagoTarjetaCredito = true;
let msj;
if ( pagoTarjetaCredito ){
    msj = "A realizado el pago de su TC";
}else {
    msj = "No ha realizado el pago de su TC";
}

// Operador ternario
msj = pagoTarjetaCredito === true ? "A realizado el pago de su TC" : "No ha realizado el pago de su TC"

console.log( msj );

console.log( pagoTarjetaCredito ? "Pagado" : "No pagado" );

// Ejemplo
/**
 * Función que reciba la edad de una persona y devuelva el mensaje: 
 * Si la edad es mayor o igual: Eres mayor de edad
 * En caso contrario: Eres menor de edad
 * @param {number}
 * @returns {string} mensaje
 */

const evaluarEdad = number => number >= 18 ? "Eres mayor de edad" : "Eres menor de edad";

console.log( evaluarEdad(18) );
console.log( evaluarEdad(14) );
console.log( evaluarEdad(22) );


const evalurEdadConIfElse = (edad) => {
  if ( edad >= 18 ){
      return "Eres mayor de edad";
  } else {
      return "Eres menor de edad";
  }
}
console.log( evalurEdadConIfElse(20) ); // Eres mayor de edad



// ------------------- Ejercicio Estaciones del año --------------------------
/*
 Preguntar por el número de mes (prompt o DOM), del 1 al 12
 Desplegar de acuerdo al mes un Alert (mostrarlo en el DOM) la estación del año.
 mes 12,  1,  2 = invierno.
 mes  3,  4,  5 = primavera
 mes  6,  7,  8 = verano
 mes  9, 10, 11 = otoño 
 Realizar una versión con if-else-elseif y otra con switch.
*/

let mes2 = Number(prompt("Escribe el número del mes, porfavor:"));
let mensaje;
const estacion = mes2 =>{
switch ( mes2 ){
    case 12:
    case 1:
    case 2:
        mensaje = `Invierno`;
        break;
    case 3:
    case 4:
    case 5:
        estacion = `Primavera`;
        break;
    case 6:
    case 7:
    case 8:
        estacion = `Verano`;
        break;
    case 9:
    case 10:
    case 11:
        estacion = `Otoño`;
        break;
    default:
        estacion = `Mes incorrecto`;
        break;
}
}
// document.getElementById("title").innerText = estacion;
//alert(estacion(mes2));

let mes = Number(prompt("Escribe el número del mes"));
const preguntarMes = mes => {
  if (mes == 12 || mes == 1 || mes == 2){
    return "Invierno";
  } else if (mes == 3 || mes == 4 || mes == 5){
    return "Primavera";
  } else if (mes == 6 || mes == 7 || mes == 8){
    return "Verano";
  } else if (mes == 9 || mes == 10 || mes == 11){
    return "Otoño";
  } else {
    return "Error";
  }
}

alert(preguntarMes(mes));
