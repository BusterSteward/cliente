

//Ejercicio 3- Parte 1
class Equipo{
    constructor(){
        this.futbolistas=Array();
    }
    toString(){
        let str=""
        this.futbolistas.forEach(futbolista => {
            str+="["+futbolista.nombre+"]"
        });
        return str;
    }

    setFutbolista(nombre,fechaNac,fechaAlta,codigo){
        try{
            let futbolista = new Futbolista(nombre,fechaNac,fechaAlta,codigo)
            this.futbolistas.push(futbolista);
        }
        catch(error){
            alert(error)
        }
    }
    getBajaAntiguedad(){
        let arrayJson=Array();
        let json;
        this.futbolistas.forEach(futbolista=>{
            if(futbolista.getAntiguedad()<30){
                let codigo = futbolista.codigo;
                let fechaAlta= futbolista.fechaAlta;
                json={
                    "codigo":codigo,
                    "fechaAlta":fechaAlta
                }
                arrayJson.push(json);
            }

        });
        return arrayJson;
    }
    //Ejercicio 3 - Parte2
    getFutbolistaMasAntiguo(){
        if(this.futbolistas.length==0){
            alert("No hay jugadores");
        }
        else{
            let masAntiguo=null;
            this.futbolistas.forEach(futbolista=>{
                if(masAntiguo==null){
                    masAntiguo=futbolista;
                }
                else if(futbolista.getAntiguedad>masAntiguo.getAntiguedad){
                    masAntiguo=futbolista;
                }
            });
            return masAntiguo;
        }
    }
}


//Parte del ejercicio 2
function generarCodigo(nombre,fechaNac,fechaAlta){
    let cod="";

    //paso 1:primeras consonantes del nombre
    const CONSONANTES="BCDFGHJKLMNÑPQRSTVWXYZ";
    let char;
    for(let i=0;i<nombre.length;i++){
        char=nombre.charAt(i);
        char=char.toUpperCase();
        if(CONSONANTES.indexOf(char)>=0){
            cod+=char;
        }
        if(cod.length==2)
            break;
    }
    while(cod.length<2)
        cod+="X";
    //paso 2: 2 ultimos digitos del año de nacimiento y los dos digitos del mes

    let arrFechaNac = fechaNac.split("/");
    let anyo=arrFechaNac[2];
    let mes=arrFechaNac[1];
    
    let digitosAnyo = anyo.substring(2);
    cod+=digitosAnyo;
    cod+=mes;

    //paso 3: suma del dia de nacimiento y el dia de fecha de alta
    let arrFechaAlta=fechaAlta.split("/");
    let diaNac=arrFechaNac[0];
    let diaAlta=arrFechaAlta[0];

    cod+=(parseInt(diaNac)+parseInt(diaAlta));
    //paso 4: suma de todos los digitos que contiene la clave
    let suma=0;
    let digitosClave=cod.substring(2);
    for(let i=0;i<digitosClave.length;i++){
        suma+=parseInt(digitosClave.charAt(i));
    }
    cod+="-"+suma;
    
    return cod;
}
//parte 2
function Futbolista(nombre,fechaNac,fechaAlta,codigo){
    if(codigo!=generarCodigo(nombre,fechaNac,fechaAlta)){
        console.log(generarCodigo(nombre,fechaNac,fechaAlta));
        throw new Error("El código "+codigo+" no es correcto");
    }
        
    this.nombre=nombre;
    this.fechaNacimiento=fechaNac;
    this.fechaAlta=fechaAlta;
    this.codigo=codigo;
    
    //parte 3
    this.__proto__.getAntiguedad=function(){
        let fechaHoy=new Date();
        let arrFechaAlta=this.fechaAlta.split("/");

        let fechaAlta=new Date(arrFechaAlta[2]+"/"+arrFechaAlta[1]+"/"+arrFechaAlta[0]);

        let milisecHoy,milisecAlta;
        milisecAlta=fechaAlta.getTime();
        milisecHoy=fechaHoy.getTime();
        
        let antiguedad=milisecHoy-milisecAlta;
        //milisegundos -> segundos -> minutos       -> horas                -> dias
        //      x           x/1000   (x/1000)/60    ((x/1000)/60)/60    (((x/1000)/60)/60)/24
        antiguedad=(((antiguedad/1000)/60)/60)/24;
        antiguedad=parseInt(antiguedad);
        return antiguedad;
    }
}