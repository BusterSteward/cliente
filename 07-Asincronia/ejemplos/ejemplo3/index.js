////////////////////////////////////////////////////////////////////
// Cuando el documento esté cargado llamamos a la función iniciar().
////////////////////////////////////////////////////////////////////
crearEvento(window,"load",iniciar);
/////////////////////////////////////////////////////////
function iniciar(){
// Creamos un objeto XHR.
miXHR = new objetoXHR();
// Cargamos en el objeto con ID resultados el contenido
// del fichero datos.txt empleando una petición AJAX.
cargarAsync(document.getElementById("resultados"),"fecha.php");
}
/////////////////////////////////////////////////////////
// Función cargarAsync: carga el contenido de la url
// usando una petición AJAX de forma ASINCRONA.
/////////////////////////////////////////////////////////
function cargarAsync(url){
if (miXHR){
// Activamos el indicador Ajax antes de realizar la petición.
document.getElementById("indicador").innerHTML="<img src='ajaxloader.gif'/>";
miXHR.open('GET', url, true); //Abrimos la url, true=ASINCRONA
// En cada cambio de estado(readyState) se llamará a la funciónestadoPeticion
miXHR.onreadystatechange = estadoPeticion;
// Hacemos la petición al servidor
miXHR.send();
}
}
/////////////////////////////////////////////////////////
// Función estadoPeticion: será llamada en cada cambio de estado de la petición.
// Cuando el estado de la petición(readyState) ==4 quiere decir que la petición haterminado.
// Tendremos que comprobar cómo terminó(status): == 200 encontrado, == 404 noencontrado, etc.
// A partir de ese momento podremos acceder al resultado en responseText oresponseXML
/////////////////////////////////////////////////////////
function estadoPeticion(){
// Haremos la comprobación en este orden ya que primero tiene que llegar
readyState==4
// y por último se comprueba el status devuelto por el servidor==200.
if ( this.readyState==4 && this.status == 200 ) {
// Desactivamos el indicador AJAX.
document.getElementById("indicador").innerHTML="";
// Metemos en el contenedor resultados las respuestas de la petición AJAX.
textoDIV(document.getElementById("resultados"), this.responseText);
}
}