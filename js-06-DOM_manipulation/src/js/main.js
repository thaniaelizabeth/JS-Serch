/**
 *  Cambiar el contenido de un elemento HTML por medio de su ID
 */
const changeElementById = () =>{
    // document: representa cualquier página web carga en el navegador
    //         sirve como punto e entrada al contenido de la página.
    //         document es el objeto principal del DOM.
      const descripcionOperadores = document.getElementById("descripcion-operadores"); // Esta es la referencia, entrega el objeto
      console.log( descripcionOperadores );
      // descripcionOperadores.innerText = "document: representa cualquier página web carga en el navegador.";
      // descripcionOperadores.innerHTML = "<strong>document</strong>: representa cualquier página web carga en el navegador."
      descripcionOperadores.innerHTML = `<span class = "text-warning">document</span>: representa cualquier página web carga en el navegador.`
  }
  changeElementById();

  /**
   * Modificar elemntos por su tag(etiqueta HTML)
   */

  const changeElementsByTagName = () => {
    const listItems = document.getElementsByTagName("li"); // Esto entrega muchos objetos.
    console.log ( listItems );
    for( let item of listItems){ // Entramos a todos los objetos li items
        item.innerHTML = "Mi nuevo li"
    }
  }

  // changeElementsByTagName();

  /**
   * Acceder a un elemento usando el selector universal
   */

  const getElementByQuerySelector = () =>{
    const element = document.querySelector("#descripcion-operadores");
    console.log( "Query Selector", element );
    const elementParagraph = document.querySelector("p"); // Seleccionar el primer paragraph que se encuentre.
    console.log( elementParagraph );
    const classTextCenter = document.querySelector(".text-center"); // Seleccionar el primer elemento 
    console.log( classTextCenter );
    const anchorAndTextWarning = document.querySelector("a.text-warning"); // primer anchor que tenga la clase text-warning.
    console.log( anchorAndTextWarning );
  }

  getElementByQuerySelector();

/**
 * Acceder a varios elementos usando el selector universal
 */

const getListItemsByQuerySelector = () => {
    // const listItems = document.querySelectorAll("main li");
    const listItems = document.querySelectorAll(".text-start li");
    console.log( listItems );
}

getListItemsByQuerySelector();


// ----------------------- Ejercicio ----------------------------------
// Seleccionar la imagen de dinosaurio que se muestra.
// mostrar en consola el objeto
/* 
const getImageByQuerySelector = () => {
    const imageItem = document.querySelector("img.img-fluid.rounded");
    console.log( imageItem );
}

getImageByQuerySelector();

// Cambia la imagen de dinosaurio a la imagen web-developer

const changeImage = () => {
    const refImage = getImageByQuerySelector();
    refImage.src = "./public/images/web-developer.jpg";
    refImage.alt = "Chica ninja web developer";
}

changeImage(); */

const getImagenDinosaurio = ( ) => {
  const  imagenDinosaurio = document.querySelector ( "img" );
  console.log ( imagenDinosaurio );
}
getImagenDinosaurio( );

// Cambiar la imagen de dinosaurio a la imagen web-developer
const changeImage = () => {
  const refImage = getImagenDinosaurio();
  refImage.src = "\public\images\web-developer.jpg";
  refImage.alt = "Chica ninja como web developer";
}

const imagenPrincipal = getImagenDinosaurio();
imagenPrincipal.style.cursor = "pointer";
// imagenPrincipal.addEventListener( evento , callback );
// imagenPrincipal.addEventListener( "click" , changeImage );
imagenPrincipal.addEventListener( "click" , ()=>{
    // Hacer otras cosas
    changeImage();
} );



// ------------------ Propiedades de visualización ---------------
//                       Desaparecer el elemento
// display : none (quitar el elemento del DOM)
// visibility: hidden (ocultar el elemento)
// refBtnPrimary = document.quearySelector("#btn-primary")
refBtnPrimary = document.getElementById("btn-primary");
refBtnSecondary = document.getElementById("btn-secondary");
refBtnSuccess = document.getElementById("btn-success");

refBtnPrimary.addEventListener("click", ()=>{
  refBtnPrimary.style.display = "none";
} );


refBtnSecondary.addEventListener("click", () =>{ refBtnSecondary.style.display = "none";
});
// Aplicar visibility = "hidden" para el btn-secondary
