////////////////////////////////////////////////////////
// Función para crear objeto XMLHttpRequest
/////////////////////////////////////////////////////////
function objetoXHR(){
    return new XMLHttpRequest();
    }
    /////////////////////////////////////////////////////////
    // Función cross-browser para registrar manejadores de Eventos
    /////////////////////////////////////////////////////////
    function crearEvento (elemento, evento, funcion) {
        if (elemento.addEventListener){
            elemento.addEventListener(evento, funcion);
        }else if(elemento.attachEvent){
            elemento.attachEvent("on" + evento, funcion);
        }else{
            elemento["on"+evento]=funcion;
        }
    }
    /////////////////////////////////////////////////////////
    // Función para modificar el contenido
    // de un DIV
    /////////////////////////////////////////////////////////
    function textoDIV(nodo, texto){
    while (nodo.firstChild)
        nodo.removeChild(nodo.firstChild); // Eliminamos todos los hijos de ese objeto.

        // Cuando ya no tenga hijos, agregamos un hijo con el texto que recibe la función.
        nodo.appendChild(document.createTextNode(texto));
    }
    