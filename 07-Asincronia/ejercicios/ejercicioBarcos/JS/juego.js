import { Tablero } from "./tablero"
import { barcoEstrella,barcoCorto,barcoLargo } from "./barco";

export class Juego {
    constructor(){
        this.estado=1;
        this.tablero1 = new Tablero();
        this.tablero2 = new Tablero();
        this.barcosTablero1=Array();
        this.barcosTablero2=Array();
        
        this.barcosTablero1[0]=new barcoEstrella();
        this.barcosTablero2[0]=new barcoEstrella();
        this.barcosTablero1[1]=new barcoLargo();
        this.barcosTablero2[1]=new barcoLargo();
        this.barcosTablero1[2]=new barcoCorto();
        this.barcosTablero2[2]=new barcoCorto();
        
    }


    colocarBarco(x,y,barco){

    }

    colocarBarcosRival(){

    }
}