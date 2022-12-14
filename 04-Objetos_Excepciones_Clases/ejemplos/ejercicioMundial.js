function futbolista(n,a,p){
    this.nombre=n;
    this.apellido=a;
    this.posicion=p;
}
class Partido{
    constructor(eq1,eq2){
        this.resultado=null;
        this.equipo1=eq1;
        this.equipo2=eq2;
    }
}
class Equipo{
    constructor(n,e){
        this.futbolistas=[];
        this.entrenador=e;
        this.nombre=n;
    }

    setFutbolista(futbolista){
        //podemos comprobar que maximo 23 y minimo 11
        this.futbolistas.push(futbolista);
    }

    //eliminar futbolista
    //comprobar equipo
}

class Mundial{
    constructor(){
        this.equipos=[];
        this.grupos=[];
        this.fasePrevia=[];
    }
    setEquipo(e){
        this.equipos.push(e);
    }
    generarGrupos(){
        this.grupos=[];
        //genero un auxiliar de equipos
        let equipoAux=[];
        for(let i=0;i<this.equipos.length;i++){
            equipoAux[i]=this.equipos[i];
        }
        for(let i=0;i<8;i++){
            this.grupos[i]=[];
            for(let j=0;j<4;j++){
                let indice=Math.trunc(Math.random()*equipoAux.length);
                //console.log("quedan: "+equipoAux.length+" y saco el equipo "+equipoAux[indice]);
                this.grupos[i][j]=equipoAux[indice];
                equipoAux.splice(indice,1);
            }
        }

    }
    generarFasePrevia(){
        for(let i=0;i<this.grupos.length;i++){
            this.fasePrevia[i]=[];
            for(let j=0;j<this.grupos[i].length;j++){
                for(let z=j+1;z<this.grupos[i].length;z++){
                    this.fasePrevia[i].push(new Partido(this.grupos[i][j],this.grupos[i][z]));
                }
            }
        }
    }

    //Inicio
    inicio(){
        //generaGrupos
        generarGrupos();
        //enfrentamientos
        this.gruposToString(grupos);
        //generarOctavos
        //enfrentamientos
        //generarCuartos
        //enfrentamientos
        //generarSemifinales
        //enfrentamientos
        //final

    }
    gruposToString(){
        let resultado="";
        for(let i=0;i<this.grupos.length;i++){
            resultado+="GRUPO "+(i+1)+"\n";
            for(let j=0;j<this.grupos[i].length;j++){
                resultado+=this.grupos[i][j].nombre+", ";
            }
            resultado = resultado.substring(0,resultado.length-2);
            resultado+="\n";
        }
        return resultado;
    }
}