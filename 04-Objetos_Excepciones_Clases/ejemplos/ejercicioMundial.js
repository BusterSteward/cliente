function futbolista(n,a,p){
    this.nombre=n;
    this.apellido=a;
    this.posicion=p;
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