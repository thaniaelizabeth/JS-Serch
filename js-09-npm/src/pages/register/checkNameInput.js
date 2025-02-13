/**
 * Validar si el nombre ingresado es válido
 * @param {string} name
 * @return {boolean} valor true de un nombre válido 
 */

const checkNameInput = ( name ) => {
   /*  let respuesta = true; 
    if ( name.length <= 1 || typeof(name) !== 'string'){
        respuesta = false;
        else if ()
    } else {respuesta};
    return respuesta; */
    let check = true;
    if(name === undefined || name === null){
        check = false;
    } else if(name.length < 2) {
        check = false;
    }else if(name[0] === " "){
        check = false;
    }else if(!isNaN(Number(name))){
        check = false;
    } else {
        check = true;
    };
        return check;
};

export { checkNameInput };
