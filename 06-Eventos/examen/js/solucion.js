
class Palabra{
    //opcion de desarrollo 2
    constructor(ini){
        this.inicial=ini;  
    }
    getPalabra(){
        //me guardo las vocales y las consonantes en dos cadenas
        const vocales="aeiou";
        const consonantes="bcdfghjklmnñpqrstvwxyz";
        //calculo la extension de la palabra aleatoriamente
        let extension=Math.trunc((Math.random()*8)+3);
        let string="";
        let vocal;
        //si la extension es par empezaré por consonante
        extension%2==0 ? vocal=false : vocal=true;
        let letra;
        for(let i=0;i<extension;i++){
            //cada vez que genero una letra modifico el booleano para generar una letra de la otra cadena
            if(vocal){
                letra=vocales.charAt(Math.trunc(Math.random()*vocales.length));
                string+=letra;
                vocal=false;
            }
            else{
                letra=consonantes.charAt(Math.trunc(Math.random()*consonantes.length));
                string+=letra;
                vocal=true;
            }
        }
        //concateno la letra inicial de la palabra antes de devolverla
        return this.inicial+string; 
    }
}

let input=document.querySelector("input");

//para tener control de lo que introduzco en el formulario en el momento de pulsar una tecla, le añado el evento keyup cuando recibe el foco
input.addEventListener("focus",function(){
    input.addEventListener("keyup",validar);
});
//cuando pierde el foco le quito el evento para evitar errores y cálculos innecesarios
input.addEventListener("blur",function(){
    input.removeEventListener("keyup",validar);
});


function validar(e){
    //me guardo el valor actual del campo y la ultima letra introducida
    let valor=this.value;
    let ultimoCaracter=e.key;

    //vacío lo que hubiera en el campo select
    let select=document.querySelector("select");
    while(select.children.length>0){
        select.removeChild(select.children[0]);
    }
    
    //realizo las validaciones
    try{
        validarAsterisco(valor);
        validarExtension(valor,ultimoCaracter);
        validarCaracter(ultimoCaracter);
    }
    catch(error){
        //en caso de error, muestro un alert y borro la ultima letra introducida para que se quede la última cadena bien escrita
        this.value=this.value.substring(0,this.value.length-1);
        alert(error);
    }
    if(ultimoCaracter=="*"){
        //si el ultimo caracter introducido es un asterisco añado los campos necesarios al select
        let fragmento=document.createDocumentFragment();

        if(this.value.length>0){
            let nodo=document.createElement("option");
            let textNode=document.createTextNode("elige opción");
            nodo.setAttribute("value","none");
            nodo.setAttribute("selected","true");
            nodo.appendChild(textNode);
            fragmento.appendChild(nodo);
        
            for(let i=0;i<this.value.length-1;i++){
                nodo=document.createElement("option");
                nodo.setAttribute("value",this.value.charAt(i));
                textNode=document.createTextNode(this.value.charAt(i));
                nodo.appendChild(textNode);
                fragmento.appendChild(nodo);
            }
            select.appendChild(fragmento);

        }
    }
}
function validarAsterisco(valor){

    if(valor.charAt(valor.length-2)=="*"){
        
        throw new Error("La cadena ya se ha finalizado al escribir *");
    }
}
function validarCaracter(c){
    console.log(c);
    let regExp=/[a-zA-Zá-úÁ-Ú\*]/;
    if(!regExp.test(c)){
        throw new Error("El carácter no es válido");
    }
}
function validarExtension(s,last){
    if(last!="Backspace"){
        if(s.length>7||(s.length==7&&s.charAt(6)!="*")){
            throw new Error("La cadena mide más de 7 caracteres");
        }

    }
}

//cuando pulso la w con un campo seleccionado del select, añado una nueva palabra al ultimo div del body
document.querySelector("select").addEventListener("keyup",generarPalabra);

function generarPalabra(e){
    if(e.key=="w"){
        if(this.value!="none"){
            let letra=this.value;
            let ObjectPalabra= new Palabra(letra);
            let div=document.body.children[2];
            console.log(div);
            let nodo=document.createElement("p");
            let text=document.createTextNode(ObjectPalabra.getPalabra());
            nodo.appendChild(text);
            div.appendChild(nodo);
        }
    }
}