document.body.addEventListener("click",moverCopo);

function moverCopo(e){
    const offsetX=157/2;
    const offsetY=181/2;
    copo.style.top=(e.clientY-offsetY)+"px";
    copo.style.left=(e.clientX-offsetX)+"px";
}