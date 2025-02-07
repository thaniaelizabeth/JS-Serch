

const primerPaso = () => {
    console.log("**************01 - Inicio de mi programa ********");
  };
  
  const segundoPaso = () => {
    
    // const myPromise = new Promise((funcionCallbackResolve, funcionCallbackReject) => { });
    const myPromise = new Promise( ( funcionCallbackResolve, funcionCallbackReject ) => { 
        let i = 0
        for (; i < 1_000_000_000; i++) {
            i * 2;
        }
        if( i >= 1_000_000_000){
        funcionCallbackResolve("************02 - Fin de la promesa************");
        } else {
        funcionCallbackReject( {
            error: 100, 
            description: "Problemas en el cálculo de iteración",
        });
        }
    } );
    return myPromise;
  };

  const tercerPaso = () => {
    console.log("************03 - Fin de mi programa************");
  };
  

  primerPaso();

  segundoPaso()
    .then( (resolve) => console.log( resolve ) )
    .catch( (error) => console.log( error ) );
  
tercerPaso();