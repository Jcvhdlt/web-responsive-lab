//Nos aseguramos de que todos los elementos estén cargados en la página para javascript

document.addEventListener('DOMContentLoaded', function(){

    //Imprimimos por consola el ancho del navegador para las pruebas
    const anchoNavegador = window.innerWidth;
    console.log("Ancho del navegador:", anchoNavegador);


    //creamos un botón para ocultar y mostrar
    const botonShow = document.getElementById("button-show");
    const mainSection = document.getElementById("main-sec");
    botonShow.addEventListener('click', mostrar);


    function mostrar(){
        console.log("Hola!");
        //detectamos el bloque donde esté el botón y lo guardamos en una variable local
        //¿Por qué this? Porque parte del elemento que haya activado la función (el botón)
        let padre = this.parentElement;

        //seleccionamos solo el hijo que tenga la id mostrar
        let hijo = padre.querySelector('#mostrar');

        //Al haber seleccionado varios elementos, ahora estamos obligados a iterar en un for each
        if (hijo.style.display === "inline-block"){
            console.log("ocultando bloque");
            botonShow.style.backgroundImage = "url(img/icon/up-arrow.svg)";
            hijo.style.display = 'none';
            mainSection.style.width = '70%';
            padre.style.width = '20px';
        } else {
            console.log("Mostrando bloque");
            hijo.style.display = 'inline-block';
            botonShow.style.backgroundImage = "url(img/icon/down-arrow.svg)";
            mainSection.style.width = '60%';
            padre.style.width = 'auto';
        }

      
    }



})
