/**
 *  Obtener los usuarios de la siguiente URL e imprimir en consola
 *  https://reqres.in/
 * 
 *  Lista de usuarios: https://reqres.in/api/users?page=2
 */

import { generateUsersCards } from "../../modules/cards/generateUsersCards.js";

const getUsers = ( url ) => {
    const createCards = ( usersArray ) => {
        document.getElementById("cards").innerHTML = generateUsersCards( usersArray );
    }
   fetch ( url )
    .then( ( resolve ) => resolve.json() ) 
    .then( ( usuarios ) => createCards( usuarios.data ) ) 
    .catch(( error ) => console.log( error ))
    .finally( () => console.log( "He terminado" ) )
};

// getUsers( "https://reqres.in/api/users?page=2&delay=6" ); // página 2 con retardo de 6 segundos
getUsers( "https://reqres.in/api/users?page=2" ); // página 2




