
var zone=1;
const offsetX=157/2;
const offsetY=181/2;
copo.addEventListener("drag",function(e){
    copo.style.position="absolute";
    copo.style.top=(e.clientY-offsetY)+"px";
    copo.style.left=(e.clientX-offsetX)+"px";
});
contenedor1.addEventListener("drop",function(){
    console.log("hola")
});
contenedor2.addEventListener("drop",function(){
    console.log("adios")
});

