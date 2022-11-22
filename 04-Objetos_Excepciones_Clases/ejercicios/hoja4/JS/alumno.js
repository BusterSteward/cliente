function verificarDNI(dni){
        
    const ABC="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    //14312821J
    let letra=dni.charAt(8);
    let num=dni.substring(0,7);
    num=parseInt(num);

    if(isNaN(num))
        return false;

    let resto=num%23;
    if(ABC.charAt(resto)==letra)
        return true;
    else
        return false;
}
function valorDeLetra(letra){
    let valor;
    switch(letra){
        case 'X':
            valor=1;
            break;
        case 'Y':
            valor=2;
            break;
        case 'Z':
            valor=3;
            break;
    }
    return valor;
}
function verificarNIE(nie){

    const ABC="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

    let letra1=nie.charAt(0);

    if(letra1!="X"&&letra1!="Y"&&letra1!="Z")
        return false;

    let num=nie.substring(1,7);
    num=parseInt(num);

    if(isNaN(num))
        return false;
    
    let letra2=nie.charAt(8);

    let aux=valorDeLetra(letra1);
    let resto=(num+aux)%23;

    if(letra2==ABC.charAt(resto))
        return true;
    else
        return false;
}

export function Alumno(nombre,apellidos,id){
    if(id.length!=8 || !verificarDNI(id)&&!verificarNIE(id))
        throw new Error("El documento de identidad no es válido");
    this.nombre=nombre;
    this.apellidos=apellidos;
    this.id=id;
    this.expediente=new Array();
    this.setAsignaturaCalificacion=function(asig,cali){
        if(isNaN(cali)||cali==="")
            throw new TypeError("La calificación no es numérica");

        let literal={
            asignatura:asig,
            calificacion:cali
        };
        this.expediente.push(literal);
    }
    this.calcularNotaMedia()=function(){
        let suma=0;
        
        if(this.expediente.length!=0){
            this.expediente.forEach(element => {
            suma+=element.calificacion;
        });
        let media=suma/this.expediente.length;
        media*=100;
        media=parseInt(media);
        media/=100;

        return media;
        }
        else
            throw new Error("No se puede calcular la nota media, no hay notas");
        
        
    }
}  