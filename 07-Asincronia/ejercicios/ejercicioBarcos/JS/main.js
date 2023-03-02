//Imports
import{Juego} from "./juego.js";

//Declaramos variables globales
let juego=null,barcoSeleccionado=null,ataquesRival;

prepararBotones();

function prepararBotones(){
    document.getElementById("iniciar").addEventListener("click",iniciarJuego);
    document.getElementById("reset").addEventListener("click",reset);
}
function reset(){
    juego=null;
    barcoSeleccionado=null;
    document.getElementById("iniciar").disabled=false;
    document.getElementById("reset").disabled=true;
    document.getElementById("contenedorFlex").removeChild(document.getElementById("barcos"));
    if(document.getElementById("comienzo")!=undefined){
        ocultarBotonEmpezar();
    }


    let tablero1=document.getElementById("tablero1");
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
    
    let tablero1=document.getElementById("tablero1").children[0];
    
    for(let i=0;i<tablero1.children.length;i++){
        for(let j=0;j<5;j++){
            tablero1.children[i].children[j].addEventListener("click",function(){
                console.log(i,j);
                if(barcoSeleccionado!=null){
                    if(juego.colocarBarco(i,j,barcoSeleccionado.id)){
                        juego.pintarTablero1();
                        let barcosColocados=juego.getBarcosColocados();
                        if(barcosColocados==3){
                            if(document.getElementById("comienzo")==undefined)
                                mostrarBotonEmpezar();
                        }
                        
                    }
                    
                }
                else{
                    console.log("selecciona un barco, tonto");
                }
            });
        }
    }
    mostrarBarcos();
    zonaMensajes.innerHTML="<p>Coloca los barcos en tu tablero</p>";
    botones.children[0].disabled=true;
    botones.children[1].disabled=false;
}
function ocultarBotonEmpezar(){
    let boton=document.getElementById("comienzo");
    boton.parentNode.removeChild(boton);
}
function mostrarBotonEmpezar(){
    let boton=document.createElement("button");
    boton.appendChild(document.createTextNode("Comenzar partida"));
    boton.setAttribute("id","comienzo");
    boton.addEventListener("click",comenzarPartida);
    botones.appendChild(boton);
}
function comenzarPartida(){
    //transformo la matrices a json y la subo
    juego.colocarBarcosRival();
    
    juego.enviarJSON();

    //juego.pintarTablero2();

    rellenarListaDeAtaques();
    removerEventosZonaAliada();
    anyadirEventosZonaRival();

    document.getElementById("zonaMensajes").innerHTML="<p>Comienza la partida</p>";
    let contenedor=document.getElementById("contenedor-imagenes");
    contenedor.parentNode.removeChild(contenedor);
    let h3=document.getElementById("titulo");
    h3.parentNode.removeChild(h3);
    let boton=document.getElementById("comienzo");
    boton.parentNode.removeChild(boton);

}
function rellenarListaDeAtaques(){
    ataquesRival=[];
    for(let i=0;i<5;i++){
        for(let j=0;j<5;j++){
            ataquesRival.push({
                "x":i,
                "y":j
            })
        }
    }
    ataquesRival.sort(()=>Math.random()-0.5);
}
function anyadirEventosZonaRival(){
    let tabla = document.getElementById("tablero2").children[0];
    for(let i=0;i<5;i++){
        for(let j=0;j<5;j++){
            let handleClick = function() {
                let hundidos=juego.atacar(2,i,j);
                console.log("barcos enemigos hundidos: "+hundidos);
                if(hundidos==3){
                    victoria();
                }
                else{
                    let ataque=ataquesRival.shift();
                    hundidos=juego.atacar(1,ataque.x,ataque.y);
                    console.log("barcos aliados hundidos: "+hundidos);
                    if(hundidos==3){
                        derrota();
                    }
                }
                this.removeEventListener("click", handleClick);
            }
            tabla.children[i].children[j].addEventListener("click", handleClick);
        
        }
    }
}
function derrota(){
    document.getElementById("zonaMensajes").innerHTML="<p>Perdiste</p>";
    removerEventosZonaRival();
}
function victoria(){
    document.getElementById("zonaMensajes").innerHTML="<p>Ganaste</p>";
    removerEventosZonaRival();
}
function removerEventosZonaAliada(){
    let tabla = document.getElementById("tablero1").children[0];
    for(let i=0;i<5;i++){
        for(let j=0;j<5;j++){
            tabla.children[i].children[j].onclick="";
        }
    }
}
function removerEventosZonaRival(){
    let tabla = document.getElementById("tablero2").children[0];
    for(let i=0;i<5;i++){
        for(let j=0;j<5;j++){
            tabla.children[i].children[j].onclick="";
        }
    }
}
function seleccionarBarco(img){
    barcoSeleccionado=img;
    mostrarSeleccion();
    console.log(barcoSeleccionado);
    console.log(img.id);
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
function mostrarSeleccion(){
    imagen0.classList.remove("seleccionado");
    imagen1.classList.remove("seleccionado");
    imagen2.classList.remove("seleccionado");
    
    barcoSeleccionado.classList.add("seleccionado");
}
function mostrarBarcos(){
    let fragmento = document.createDocumentFragment();
    let section=document.createElement("section");
    section.setAttribute("id","barcos");
    let h3=document.createElement("h3");
    h3.setAttribute("id","titulo");
    h3.appendChild(document.createTextNode("TUS BARCOS"));
    section.appendChild(h3);
    let sectionZonaMensajes=document.createElement("section");
    sectionZonaMensajes.setAttribute("id","zonaMensajes");
    let boton=document.createElement("button");
    boton.appendChild(document.createTextNode("Girar barco"));
    boton.addEventListener("click",function(){
        if(barcoSeleccionado!=null){
            juego.girarSeleccion(barcoSeleccionado);
        }
    });
    
    
    let div = document.createElement("div");
    div.classList.add("contenedor-imagenes");
    div.setAttribute("id","contenedor-imagenes");
    let imagen;
    for(let i=0;i<3;i++){
        imagen=document.createElement("img");
        imagen.setAttribute("id","imagen"+i);
        imagen.setAttribute("src","./IMAGENES/imagen"+i+".jpg");
        imagen.addEventListener("click",function(){
            seleccionarBarco(this);
        })
        div.appendChild(imagen);
    }
    div.appendChild(boton);
    section.appendChild(div);
    section.appendChild(sectionZonaMensajes);
    fragmento.appendChild(section);

    contenedorFlex.insertBefore(fragmento,botones);
    


}

