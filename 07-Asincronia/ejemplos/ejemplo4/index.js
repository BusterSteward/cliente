////////////////////////////////////////////////////////////////////
// Cuando el documento esté cargado llamamos a la función iniciar().
////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
boton.addEventListener("click",iniciar);
function iniciar(){
    // Creamos un objeto XHR.
    miXHR = new XMLHttpRequest();
    // Cargamos de forma asíncrona el texto que nos devuelve la página
    // procesar.php con los parámetros indicados en la URL
    miXHR.onreadystatechange = estadoPeticion;
    console.log("dentro");
    if(miXHR){
        indicador.innerHTML="<img width='150px' src='loading.gif'>";
        //alert("Comenzamos la peticion AJAX");
        miXHR.open("POST","servidor.php",true);
        miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        parametros="nombre=Andres & apellidos=Hernandez Parra";
        

        miXHR.send(parametros);
        //alert("Envié la peticion AJAX");
    }
}

function estadoPeticion(){

    
    switch(this.readyState){
        case 0: estado.innerHTML += "0-Sin iniciar<br>";
            
        break;
        case 1: estado.innerHTML+= "1-Cargando<br>";break;
        case 2: estado.innerHTML+= "2-Cargado<br>";break;
        case 3: estado.innerHTML+= "3-Procesando<br>";break;
        case 4: estado.innerHTML+= "4-Completado<br><br>";
            if(this.status==200){
                while(resultados.firstChild){
                    resultados.removeChild(resultados.firstChild);
                }
                resultados.innerHTML=this.responseText;
            }
        indicador.innerHTML="";
        break;
    }
}