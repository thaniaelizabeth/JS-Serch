/**
 *  Obtener los usuarios de la siguiente URL e imprimir en consola
 *  https://reqres.in/
 * 
 *  Lista de usuarios: https://reqres.in/api/users?page=2
 */

const getUsers = ( url ) => {
   fetch ( url )
    .then( ( resolve ) => resolve.json() ) 
    .then( ( usuarios ) => console.log( usuarios.data ) ) 
    .catch(( error ) => console.log( error ))
    .finally( () => console.log( "He terminado" ) )
};

getUsers( "https://reqres.in/api/users?page=2&delay=6" ); // página 2 con retardo de 6 segundos
getUsers( "https://reqres.in/api/users?page=2" ); // página 2




