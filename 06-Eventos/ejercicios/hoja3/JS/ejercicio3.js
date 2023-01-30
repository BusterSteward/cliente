
var zone=1;
var zoneAux;
/*
const offsetX=157/2;
const offsetY=181/2;
copo.addEventListener("drag",function(e){
    copo.style.position="absolute";
    copo.style.top=(e.clientY-offsetY)+"px";
    copo.style.left=(e.clientX-offsetX)+"px";
});*/
copo.addEventListener("drag",function(ev){
    console.log(ev.target.id);
    ev.dataTransfer.setData("text", ev.target.id)
});
contenedor1.addEventListener("dragenter",function(){
    mensaje.innerText="suelta ahora en la zona 1";
    zoneAux=1;
});
contenedor2.addEventListener("dragenter",function(){
    mensaje.innerText="suelta ahora en la zona 2";
    zoneAux=2;
});
contenedor1.addEventListener("dragleave",function(){
    mensaje.innerText="zona actual a soltar: "+zone;
});
contenedor2.addEventListener("dragleave",function(){
    mensaje.innerText="zona actual a soltar: "+zone;
});
contenedor1.addEventListener("drop",soltar);
contenedor2.addEventListener("drop",soltar);
contenedor1.addEventListener("dragover",function(ev){ev.preventDefault();});
contenedor2.addEventListener("dragover",function(ev){ev.preventDefault();});

function soltar(ev){
    if(zone!=zoneAux){
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        console.log(data);
        ev.target.appendChild(document.getElementById(data));
        zone=zoneAux;
    }
}

