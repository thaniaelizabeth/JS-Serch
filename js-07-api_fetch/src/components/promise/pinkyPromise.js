
const pinkyPromise = ( numero ) => {
    const myPromise = new Promise((resolve, reject) => {
        // Evaluar si el parámetro se resuelve o se rechaza
        if (numero > 10){
            resolve("El número es mayor a 10");
        } else {
            reject("El número es menor o igual a 10");
        }      
    });

    return myPromise;
};

const secuenciaPrincipal = () =>{
    console.log( "Comenzando frecuencia principal" );
    // Hacer el manejo de la promesa pinkypromise
    pinkyPromise(10) // Aquí va mi argumento
        .then( (resuelto) => console.log( resuelto ) )
        .catch( ( error ) => console.log( error ) ); 
    console.log( "Terminando mi secuencia principal" );
}

secuenciaPrincipal();



