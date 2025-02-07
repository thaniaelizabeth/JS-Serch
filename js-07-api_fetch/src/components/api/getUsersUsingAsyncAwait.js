

import { generateUsersCards } from "../../modules/cards/generateUsersCards.js";

const getUsersUsingAsyncAwait = async ( url ) => {
    const createCards = ( usersArray ) => {
        document.getElementById("cards").innerHTML = generateUsersCards( usersArray );
    }
   const resolve = await fetch ( url );
   const usuarios = await resolve.json();
   createCards( usuarios.data ) ;
};

console.log( "Antes de la llamada de la función" );
getUsersUsingAsyncAwait ( "https://reqres.in/api/users?page=2" ); // página 2
console.log( "Después de la llamada de la función" );


