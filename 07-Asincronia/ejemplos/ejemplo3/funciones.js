/////////////////////////////////////////////////////////
// Función estadoPeticion: será llamada en cada cambio de estado de lapetición.
// Cuando el estado de la petición(readyState) ==4 quiere decir que lapetición ha terminado.
// Tendremos que comprobar cómo terminó(status): == 200 encontrado, == 404no encontrado, etc.
// A partir de ese momento podremos acceder al resultado en responseText oresponseXML
/////////////////////////////////////////////////////////
function estadoPeticion(){
switch(this.readyState){
// Evaluamos el estado de la petición AJAX
// Vamos mostrando el valor actual de readyState en cada llamada.
case 0: document.getElementById('estado').innerHTML += "0 - Sin iniciar.<br/>";
break;
case 1: document.getElementById('estado').innerHTML += "1 - Cargando.<br/>";
break;
case 2: document.getElementById('estado').innerHTML += "2 - Cargado.<br/>";
break;
case 3: document.getElementById('estado').innerHTML += "3 - Procesando.<br/>";
break;
case 4: document.getElementById('estado').innerHTML += "4 - Completado.";
if (this.status == 200){
// Si el servidor ha devuelto un OK
// Escribimos la respuesta recibida de la petición AJAX en el objeto DIV
textoDIV(document.getElementById("resultados"), this.responseText);
}
break;
}
}
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
    }}
    /////////////////////////////////////////////////////////
    // Función para modificar el contenido
    // de un DIV
    /////////////////////////////////////////////////////////
    function textoDIV(nodo, texto){
    while (nodo.firstChild)
    nodo.removeChild(nodo.firstChild); // Eliminamos todos los hijos de eseobjeto.
    // Cuando ya no tenga hijos, agregamos un hijo con el texto que recibe lafunción.
    nodo.appendChild(document.createTextNode(texto));
    }