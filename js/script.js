//Nos aseguramos de que todos los elementos estén cargados en la página para javascript

document.addEventListener('DOMContentLoaded', function(){

    //Imprimimos por consola el ancho del navegador para las pruebas
    const anchoNavegador = window.innerWidth;
    console.log("Ancho del navegador:", anchoNavegador);


    //creamos un botón para ocultar y mostrar
    const botonShow = document.getElementById("button-show");
    const mainSection = document.getElementById("section-1");
    botonShow.addEventListener('click', mostrar);


    function mostrar(){
       
        //detectamos el bloque donde esté el botón y lo guardamos en una variable local
        //¿Por qué this? Porque parte del elemento que haya activado la función (el botón)
        let padre = this.parentElement;

        //seleccionamos solo el hijo que tenga la id mostrar
        let hijo = padre.querySelector('#mostrar');
       
        //Al haber seleccionado varios elementos, ahora estamos obligados a iterar en un for each
        if (hijo.style.display === "inline-block"){
            padre.style.transition = "all 0.6s ease 0.1s";
            botonShow.style.transition = "transform 0.3s ease";

            console.log("ocultando bloque");
            hijo.style.display = 'none';
            mainSection.style.height = 'auto';
            mainSection.style.minHeight = '400px';
            padre.style.width = '0px';
            padre.style.height = '0px';
            botonShow.style.transform = "rotate(0deg)";
            
            
        } else {
            padre.style.transition = "all 0.3s ease 0.3s";
            botonShow.style.transition = "transform 0.6s ease ";

            console.log("Mostrando bloque");
            hijo.style.display = 'inline-block';
            mainSection.style.height = 'auto';
            mainSection.style.minHeight = '600px';
            padre.style.width = '350px';
            padre.style.height = '600px';
            botonShow.style.transform = "rotate(180deg)";
            
        }

      
    }



})
