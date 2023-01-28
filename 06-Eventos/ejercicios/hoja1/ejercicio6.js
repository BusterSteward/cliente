let intervalId,contador=0;


iniciar.onclick=function(){
    this.disabled=true;
    parar.disabled=false;
    intervalId=setInterval(()=>{
        numeros.innerText+=contador+" , ";
        contador++;
    },500);
};
parar.onclick=function(){
    this.disabled=true;
    iniciar.disabled=false;
    clearInterval(intervalId);
};
