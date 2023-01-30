
var mensaje;
window.onload=iniciar; 
//----------------------------------------------------------// 

function iniciar(){ 
// Al hacer click en el botón de enviar tendrá que llamar a la la función validar que 
// se encargará de validar el formulario. 
    document.getElementById("formulario").onsubmit=validar;
    
	
} 
//----------------------------------------------------------// 

function validar(evento) { 



//Si los datos no son válidos, se debe anular la acción del botón "enviar"
//En caso contrario, se pedirá confirmación para enviar el formulario
console.log(this.elements.edad.value);
mensaje="";
let resNombre=validarNombre(this.elements.nombre.value),resEdad=validarEdad(this.elements.edad.value),resProvincia=validarProvincia(this.elements.provincia.value);
if(!(resNombre&&resEdad&&resProvincia)){
    alert(mensaje)
    evento.preventDefault();
}
else{
    res=confirm("Los datos son correctos, ¿Desea enviar el formulario?");
    if(!res){
        evento.preventDefault();
    }
}
//Se diseñarán funciones para validar los datos del formulario: nombre, edad y provincia


} 
function validarNombre(nombre){
    const res=nombre!="";
    let nodo=document.getElementById("nombre");
    if(res){
        nodo.classList.remove("error");
    }
    else{
        mensaje+="El nombre no es válido\n";
        nodo.classList.add("error");
    }
    return res;
}
function validarProvincia(provincia){
    const res=provincia!="0";
    let nodo=document.getElementById("provincia");
    if(res){
        nodo.classList.remove("error");
    }
    else{
        mensaje+="La provincia no es válida\n"
        nodo.classList.add("error");
    }
    return res;
}
function validarEdad(edad){
    let res=true;
    edad=parseInt(edad);
    if(isNaN(edad)||edad<0||edad>110)
        res=false;

    let nodo=document.getElementById("edad");
    if(res){
        nodo.classList.remove("error");
    }
    else{
        mensaje+="La edad no es válida\n";
        nodo.classList.add("error");
    }
    return res;
}




