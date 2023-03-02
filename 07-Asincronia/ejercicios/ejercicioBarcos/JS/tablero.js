
export class Tablero{
    //contiene 0 en las posiciones libres y 1 en las ocupadas
    constructor(id){
        this.tabla=Array();
        for(let i=0;i<5;i++){
            this.tabla[i]=Array();
            for(let j=0;j<5;j++){
                this.tabla[i][j]=0;
            }
        }
        this.id=id;
    }

    
    getTabla(){
        return this.tabla;
    }
    
    comprobarCasilla(x,y,v){
        return !(x<0 || x>=5 || y<0 || y>=5 || (this.tabla[x][y]!=0&&this.tabla[x][y]!=v));
    }
    colocarEnTablero(barco,x,y){
        let posiciones=barco.damePosicionesAOcupar(x,y);
        
        let posicionValida=posiciones.every(element => {
            return this.comprobarCasilla(element.x,element.y,barco.valor);
        });

        if(posicionValida){
            if(barco.getColocado()){
                let ocupadas=barco.damePosicionesOcupadas();
                ocupadas.forEach(element=>{
                    this.tabla[element.x][element.y]=0;
                });
            }
            posiciones.forEach(element => {
                this.tabla[element.x][element.y]=barco.valor;
            });
            barco.setColocado(true);
            barco.setPos(x,y);
        }
        return posicionValida;
        
    }

}