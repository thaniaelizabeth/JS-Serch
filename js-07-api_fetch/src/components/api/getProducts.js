/*
 API: Application Programming Interface
   Permite la comunicación entre dos aplicaciones de software
   a travéz de un conjunto de reglas.
 La API Fetch nos ayuda a acceder y manipular 
 peticiones HTTP (DELETE, GET, POST, PUT).
 
 Sintaxis:
    fetch(resource, options) // por default es la solicitud get
*/

/* 
Las promesa es un patrón asincrónico que se utiliza
 para manejer operaciones asíncronas.
 Las promesas permite realizar tareas asíncronas y
 manejar los resultados (éxito o error) en un momento posterior.
 Las promesas tiene 3 estados:
 1.- Pending: El estado inicial de una promesa antes de que se resulva o rechace
 2.- Resolved: La promesa se resuelve con un valor
 3.- Rejected: La promesa se rechaza con un razón 
 */

/*  Lo siguiente es una forma INCORRECTA de usar una promesa

 const getProducts = ( url ) => {
    const products = fetch( url );  
    console.log( products );
}

getProducts( "https://fakestoreapi.com/products" ); */


// La siguiente sintaxis es una forma CORRECTA de usar una promesa
const getProducts = ( url ) => {
    // Manejo de fetch con .then() y .catch()
    /* 
    fetch( resource )
    .then( callback )  // Se ejecuta el callback cuando la promesa sea resuelta
    .catch( callback ) // Se ejecuta el callback cuando la promesa sea rechazada. 
    .finally( callback ); // Se ejecuta el callback independiente de que se resuelva o se rechace la promesa. 
    */
   fetch ( url )
   .then( ( resolve ) => {
        console.log( resolve );
        resolve.json() // convierte de JSON a objeto de JS
            .then( ( productos ) => console.log( productos ) )
            .catch( ( error ) => console.log( error ) ); 
} )
   .catch( ( error ) => console.log( error ) )
   .finally( () => console.log( "He terminado" ) )
};

getProducts( "https://fakestoreapi.com/products" );

