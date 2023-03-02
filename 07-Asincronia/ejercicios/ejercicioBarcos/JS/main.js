//Imports
import{Juego} from "./juego.js";

//Declaramos variables globales
let juego=null,barcoSeleccionado=null,barcosColocados=null;

prepararBotones();

function prepararBotones(){
    document.getElementById("iniciar").addEventListener("click",iniciarJuego);
    document.getElementById("reset").addEventListener("click",reset);
}
function reset(){
    juego=null;
    barcoSeleccionado=null;
    barcosColocados=null;

    tablero1.innerHTML=`<tr>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                        </tr>
                        <tr>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                        </tr>
                        <tr>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                        </tr>
                        <tr>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                        </tr>
                        <tr>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                        </tr>`;
    tablero2.innerHTML=`<tr>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                        </tr>
                        <tr>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                        </tr>
                        <tr>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                        </tr>
                        <tr>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                        </tr>
                        <tr>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                            <td><span class="marcador oculto">X</span></td>
                        </tr>`;
}
function iniciarJuego(){
    juego=new Juego();
    barcoSeleccionado=null;
    barcosColocados=0;
    tablero=document.getElementById("tablero1");
    
    for(let i=0;i<tablero.children.length;i++){
        for(let j=0;j<5;j++){
            tablero.children[i].children[j].addEventListener("click",function(){
                if(barcoSeleccionado!=null){
                    if(juego.colocarBarco(i,j,barcoSeleccionado)){
                        barcosColocados++;
                    }
                    
                }
            });
        }
    }
    zonaMensajes.innerHTML="<p>Coloca los barcos en tu tablero</p>";
    botones.children[0].disabled=true;
    botones.children[1].disabled=false;
    mostrarBarcos();
}
function seleccionarBarco(img){
    barcoSeleccionado=img;
    let tipoBarco;
    switch(img.id){
        case "imagen0":
            tipoBarco="barco estrella";
            break;
        case "imagen1":
            tipoBarco="barco largo";
            break;
        case "imagen2":
            tipoBarco="barco corto";
            break;
    }
    zonaMensajes.innerHTML="<p>Barco seleccionado: "+tipoBarco+"</p>";
}
function mostrarBarcos(){
    let fragmento = document.createDocumentFragment();
    let section=document.createElement("section");
    let div = document.createElement("div");
    div.classList.add("contenedor-imagenes");
    let imagen;
    for(let i=0;i<3;i++){
        imagen=document.createElement("img");
        imagen.setAttribute("id","imagen"+i);
        imagen.addEventListener("click",function(){
            seleccionarBarco(this);
        })
        div.appendChild(imagen);
    }
    section.appendChild(div);
    fragmento.appendChild(section);
    


}

