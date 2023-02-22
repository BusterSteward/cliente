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
// en el objeto que se le pasa como referencia,
// usando una petición AJAX de forma ASINCRONA.
/////////////////////////////////////////////////////////
function cargarAsync(objeto, url){
if (miXHR){
//Si existe el objeto miXHR
alert("Comenzamos la petición AJAX");
miXHR.open('GET', url, true); //Abrimos la url, true=ASINCRONA
// Hacemos la petición al servidor.
miXHR.send();
//Escribimos la respuesta recibida de la petición AJAX en el objeto DIV
textoDIV(objeto, miXHR.responseText);
alert("Terminó la petición AJAX");
}
}