function futbolista(n,a,p){
    this.nombre=n;
    this.apellido=a;
    this.posicion=p;
}
class Partido{
    constructor(eq1,eq2,fase){
        this.marcadorA=null;
        this.marcadorB=null;
        this.equipo1=eq1;
        this.equipo2=eq2;
        this.fase=fase;
        this.jugado=false;
        this.penaltis=false;
    }
    jugarPartido(){
        if(!this.jugado){
            this.marcadorA=Math.trunc(Math.random()*6);
            this.marcadorB=Math.trunc(Math.random()*6);
            this.equipo1.golesFavor+=this.marcadorA;
            this.equipo1.golesContra+=this.marcadorB;
            this.equipo2.golesFavor+=this.marcadorB;
            this.equipo2.golesContra+=this.marcadorA;
            this.jugado=true;
            
        }
        
        
    }
    getResultado(){
        return this.equipo1.nombre+" "+this.marcadorA+" - "+this.marcadorB+" "+this.equipo2.nombre+" Penaltis: "+this.penaltis;
    }
    getEquipoGanador(){
        if(this.jugado){
            let ganador=[];
            if(this.marcadorA==this.marcadorB&&this.fase!=0){
                ganador.push(this.jugarPenaltis());
            }
            else if(this.marcadorA==this.marcadorB&&this.fase==0){
                this.equipo1.puntosFasePrevia++;
                this.equipo2.puntosFasePrevia++;
                ganador.push(this.equipo1);
                ganador.push(this.equipo2);
            }
            else if(this.marcadorA>this.marcadorB){
                this.equipo1.puntosFasePrevia+=3;
                ganador.push(this.equipo1);
            }
            else{
                this.equipo2.puntosFasePrevia+=3;
                ganador.push(this.equipo2);
            }
            return ganador;
        }
        
    }
    jugarPenaltis(){
        this.penaltis=true;
        if(Math.random()>0.5){
            this.marcadorA++;
            return this.equipo1;
        } 
        else{
            this.marcadorB++;
            return this.equipo2;
        } 
    }
}
class Equipo{
    constructor(n,e){
        this.futbolistas=[];
        this.entrenador=e;
        this.nombre=n;
        this.puntosFasePrevia=0;
        this.golesFavor=0;
        this.golesContra=0;
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
        this.octavos=[];
        this.cuartos=[];
        this.semis=[];
        this.final=null;
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
        //generamos partidos
        for(let i=0;i<this.grupos.length;i++){
            this.fasePrevia[i]=[];
            for(let j=0;j<this.grupos[i].length;j++){
                for(let z=j+1;z<this.grupos[i].length;z++){
                    this.fasePrevia[i].push(new Partido(this.grupos[i][j],this.grupos[i][z],0));
                }
            }
        }
        //jugamos los partidos
        for(let i=0;i<this.fasePrevia.length;i++){
            for(let j=0;j<this.fasePrevia[i].length;j++){
                let partido=this.fasePrevia[i][j];
                partido.jugarPartido();
                console.log(partido.getResultado());
            }
        }
        //obtenemos clasificación
        this.clasificarGrupos();
        console.log(this.grupos);
        
    }
    generarOctavos(){

        for(let i=0;i<this.grupos.length-1;i+=2){
            this.octavos.push(new Partido(this.grupos[i][0],this.grupos[i+1][1],8));
            this.octavos.push(new Partido(this.grupos[i][1],this.grupos[i+1][0],8))
        }
        for(let i=0;i<this.octavos.length;i++){
            this.octavos[i].jugarPartido();
        }

        console.log(this.octavos);
    }
    generarCuartos(){

        this.cuartos.push(new Partido(this.octavos[0].getEquipoGanador()[0],this.octavos[1].getEquipoGanador()[0],4));
        this.cuartos.push(new Partido(this.octavos[2].getEquipoGanador()[0],this.octavos[3].getEquipoGanador()[0],4));
        this.cuartos.push(new Partido(this.octavos[4].getEquipoGanador()[0],this.octavos[5].getEquipoGanador()[0],4));
        this.cuartos.push(new Partido(this.octavos[6].getEquipoGanador()[0],this.octavos[7].getEquipoGanador()[0],4));
        for(let i=0;i<this.cuartos.length;i++){
            this.cuartos[i].jugarPartido();
        }

        console.log(this.cuartos);
    }
    generarSemis(){
        this.semis.push(new Partido(this.cuartos[0].getEquipoGanador()[0],this.cuartos[1].getEquipoGanador()[0],2));
        this.semis.push(new Partido(this.cuartos[2].getEquipoGanador()[0],this.cuartos[3].getEquipoGanador()[0],2));
        this.semis[1].jugarPartido();
        this.semis[0].jugarPartido();

        console.log(this.semis);
    }
    generarFinal(){
        this.final = new Partido(this.semis[0].getEquipoGanador()[0],this.semis[1].getEquipoGanador()[0],1);
        this.final.jugarPartido();
        console.log(this.final);
    }
    clasificarGrupos(){
        
        for(let i=0;i<this.grupos.length;i++){
            this.grupos[i].sort((a,b)=>{
                //  1 -> b gana
                // -1 -> a gana
                let res;
                //compruebo los puntos de cada equipo
                if(a.puntosFasePrevia==b.puntosFasePrevia){
                    //compruebo los goles que han marcado
                    if(a.golesFavor==b.golesFavor){
                        //compruebo los goles que les han marcado
                        a.golesContra<=b.golesContra ? res=-1 : res=1; 
                    }
                    else a.golesFavor>b.golesFavor ? res=-1 : res=1;
                }
                else a.puntosFasePrevia>b.puntosFasePrevia ? res=-1 : res=1;

                return res;
            });
        }
    }
    //Inicio
    inicio(){
        
        this.generarGrupos();
        
        this.generarFasePrevia();

        this.generarOctavos();

        this.generarCuartos();
        
        this.generarSemis();

        this.generarFinal();

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