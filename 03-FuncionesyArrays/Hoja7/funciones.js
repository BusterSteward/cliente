function comprobarCalentamientoGlobal(arr){
    let aux;
    for(let tempAnual of arr){
        if(aux!=undefined){
            if(aux<tempAnual){
                aux=tempAnual;
            }
            else
                return false;
        }
        else
            aux=tempAnual;
    }
    return true;
}
function calcularMediaAnual(arr){
    let suma=0;
    let contador=0;
    let temperaturasAnuales=[];
    for(let temperatura of arr){
        for(let valor of temperatura){
            suma+=valor;
        }
        
        temperaturasAnuales[contador]=suma/12;
        temperaturasAnuales[contador]*=100;
        temperaturasAnuales[contador]=parseInt(temperaturasAnuales[contador]);
        temperaturasAnuales[contador]/=100;
        suma=0;
        
        contador++;
    }
    return temperaturasAnuales;
}