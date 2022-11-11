function generarClave(tam){
    const characters ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let clave="";
    let mayus=false,minus=false;
    let charPos=-1;
    let aux;
    for(let i=0;i<tam;i++){
        charPos=Math.trunc(Math.random()*52);
        aux = characters.charAt(charPos);
        clave+=aux;
        charPos<=25 ? minus=true 
                    : mayus=true;
    }
    if(!mayus){
        charPos=Math.trunc(Math.random()*tam);
        clave = clave.replaceAt(charPos,clave.charAt(charPos).toUpperCase());
    }
    if(!minus){
        charPos=Math.trunc(Math.random()*tam);
        clave = clave.replaceAt(charPos,clave.charAt(charPos).toLowerCase());
    }
    return clave;
}