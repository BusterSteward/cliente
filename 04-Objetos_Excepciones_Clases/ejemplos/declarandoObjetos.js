/*
Definir coches de 3 formas distintas
atributos:
marca, modelo, color, matricula, matriculacion
funciones:
edad(fecha hoy- fecha matriculacion)
proxima ITV (año)
*/
//Declaramos un coche de forma literal
var coche1={
    marca:"BMW",
    modelo:"RTX 3080",
    color:"azul",
    matricula:"XXXX-ABC",
    matriculacion:2009,
    edad:function(){
        let fechaHoy= new Date();
        return fechaHoy.getFullYear-this.matriculacion;
    },
    proximaITV:function(){
        let anyoITV;
        let edad = this.edad();
        if(edad<4)
            anyoITV=this.matriculacion+4;
        else{
            let fechaHoy = new Date();
            if(edad<10){
                let anyosDespuesDeLaSegundaITV = 10-edad;
                let aux = anyosDespuesDeLaSegundaITV/2;
                anyoITV=this.matriculacion+4;
                anyoITV+=(2*Math.ceil(aux));
            }
            else{
                anyoITV=fechaHoy.getFullYear()+1;
            }
        }
        return anyoITV;

    }
};