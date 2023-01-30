/*
3. Dado el formulario UT7_ejercicios_V_Formulario_3.html, realiza las siguientes validaciones
(en un archivo js externo):
 Los campos de texto no pueden estar vacíos
 El número de teléfono será válido si está formado por 9 dígitos (puede contener
espacios en blanco para separar los dígitos)
 Se debe responder a la pregunta sobre la mayoría de edad.
Todos los elementos erróneos se "marcarán" con la clase error. El foco se sitúa en el primer
campo erróneo. Utiliza funciones para validar las situaciones de error.
*/
var primerCampoFallido;
var mensaje;
window.addEventListener("load",inicio);

function inicio(){
    formulario.addEventListener("submit",validar);
}
function validar(e){
    e.preventDefault();
    primerCampoFallido=null;
    let camposTexto=this.querySelectorAll('input[type="text"]');
    
    let mensajeNodo=document.getElementById("mensaje");
    mensaje="";
    mensajeNodo.innerHTML="";
    if(!(validarCamposTexto(camposTexto)&&validarTelefono(this.elements.tfno.value)&&validarEdad(this.elements.edad))){
        error(e);
    }
}
function validarCamposTexto(camposTexto){
    let res=true;
    let text;
    for(let i=0;i<camposTexto.length;i++){
        text=camposTexto.item(i).value;
        if(text==""){
            res=false;
            camposTexto.item(i).classList.add("error");
            mensaje+="El campo "+camposTexto.item(i).name+" está vacío<br>"
            if(primerCampoFallido==null){
                primerCampoFallido=camposTexto.item(i);
            }
        }
        else{
            camposTexto.item(i).classList.remove("error");
        }
    }
    return res;
}
function validarTelefono(telefono){
    let regExp=/\d\s*\d\s*\d\s*\d\s*\d\s*\d\s*\d\s*\d\s*\d/;
    regExp=new RegExp(regExp);
    let res=regExp.test(telefono);
    let nodoTelefono=document.getElementById("tfno");
    if(!res){
        mensaje+="El campo telefono no cumple con el formato necesario<br>";
        nodoTelefono.classList.add("error");
        if(primerCampoFallido==null){
            primerCampoFallido=nodoTelefono;  
        }
    }
    else{
        nodoTelefono.classList.remove("error");
    }
    return res;
}
function validarEdad(campos){
    let res=false;
    for(let i=0;i<campos.length;i++){
        if(campos[i].checked){
            res=true;
        }
    }
    if(res){
        for(let i=0;i<campos.length;i++){
            campos[i].classList.remove("error");
        }
    }
    else{
        mensaje+="No has respondido si eres mayor de edad<br>";
        for(let i=0;i<campos.length;i++){
            campos[i].classList.add("error");
        }
        if(primerCampoFallido==null){
            primerCampoFallido=campos[0];
        }
        
    }
    return res;
}
function error(e){
    
    let mensajeNodo=document.getElementById("mensaje");
    mensajeNodo.innerHTML=mensaje;
    e.preventDefault();
    primerCampoFallido.focus();
}