function anyoBisiesto(a){
    let res=false;
    if(a%4==0){
        res=true;
    }
    else if(a%100==0 && a%400==0)
        res=true;

    return res;
}

function validarFecha(dia,mes,anyo){

    let diasPorMes=[31,28,21,30,31,30,31,31,30,31,30,31];

    let fechaHoy = new Date();
    let anyoActual= fechaHoy.getFullYear();

    if(anyo>anyoActual||mes<1||mes>12) return false;
    
    if(mes==2&&anyoBisiesto(anyo)) diasPorMes[1]++;
    
    return dia>=1&&dia<=diasPorMes[mes-1];
    
    
}