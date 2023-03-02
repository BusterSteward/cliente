﻿import { Tablero } from "./tablero.js"
import { barcoEstrella,barcoCorto,barcoLargo } from "./barco.js";

export class Juego {
    constructor(){
        this.estado=1;
        this.tablero1 = new Tablero("tablero1");
        this.tablero2 = new Tablero("tablero2");
        this.barcosTablero1=Array();
        this.barcosTablero2=Array();
        
        this.barcosTablero1[0]=new barcoEstrella("imagen0");
        this.barcosTablero2[0]=new barcoEstrella("imagen0R");
        this.barcosTablero1[1]=new barcoLargo("imagen1");
        this.barcosTablero2[1]=new barcoLargo("imagen1R");
        this.barcosTablero1[2]=new barcoCorto("imagen2");
        this.barcosTablero2[2]=new barcoCorto("imagen2R");
        
    }

    enviarJSON(){
        let tab1=[],tab2=[];
        let tabla1=this.tablero1.getTabla();
        let tabla2=this.tablero2.getTabla();
        for(let i=0;i<5;i++){
            tab1[i]=[];
            tab2[i]=[];
            for(let j=0;j<5;j++){
                if(tabla1[i][j]!=0){
                    tab1[i][j]="ocupado";
                }
                else{
                    tab1[i][j]="libre";
                }
                if(tabla2[i][j]!=0){
                    tab2[i][j]="ocupado";
                }
                else{
                    tab2[i][j]="libre";
                }
            }
        }
        let url="http://localhost:3000/tablero1";
        let url2="http://localhost:3000/tablero2";
        fetch(url, {
            method: 'PATCH', // o 'PUT'
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              tablero1: tab1,
            })
          })
          .then(response => response.json())
          .then(data => console.log(data));
        fetch(url2, {
            method: 'PATCH', // o 'PUT'
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              tablero2: tab2,
            })
          })
          .then(response => response.json())
          .then(data => console.log(data));
    }
    atacar(tablero,x,y){
        let tab,flota;
        if(tablero==1){
            tab=this.tablero1;
            flota=this.barcosTablero1;
            
        }
        else{
            tab=this.tablero2;
            flota=this.barcosTablero2;
        }
        
        console.log("atacando");
        let HTMLtabla=document.getElementById(tab.id).children[0];
        console.log(HTMLtabla.children[x]);
        console.log(HTMLtabla.children[x].children[y]);
        console.log(y);
        HTMLtabla.children[x].children[y].children[0].classList.remove("oculto");
        let color;
        

        let casilla=tab.tabla[x][y];
        let hundidos,mensaje;
        if(casilla!=0){
            color="orange";
            mensaje=flota[casilla-1].tocado();
        }
        else{
            mensaje="Solo hay agua en esa zona";
            color="lightgrey";
        }
        if(tablero==1){
            hundidos=this.getHundidos1();
        }
        else{
            document.getElementById("zonaMensajes").innerHTML="<p>"+mensaje+"</p>";
            hundidos=this.getHundidos2();
        }
        HTMLtabla.children[x].children[y].style.backgroundColor=color;
        return hundidos;
    }
    getHundidos1(){
        let hundidos=0;
        this.barcosTablero1.forEach(element=>{
            if(element.hundido)
                hundidos++;
        })
        return hundidos;

        
    }
    getHundidos2(){
        let hundidos=0;
        this.barcosTablero2.forEach(element=>{
            if(element.hundido)
                hundidos++;
        })
        return hundidos;
    }
    getBarcosColocados(){
        let colocados=0;
        this.barcosTablero1.forEach(element => {
            if(element.getColocado())
                colocados++;
        });
        return colocados;
    }
    colocarBarco(x,y,barco){
        let res;
        switch(barco){
            case "imagen0":
                res=this.tablero1.colocarEnTablero(this.barcosTablero1[0],x,y);
                break;
            case "imagen1":
                res=this.tablero1.colocarEnTablero(this.barcosTablero1[1],x,y);
                break;
            case "imagen2":
                res=this.tablero1.colocarEnTablero(this.barcosTablero1[2],x,y);
                break;
        }
        return res;
    }

    girarSeleccion(barco){
        switch(barco.id){
            case "imagen0":
                this.barcosTablero1[0].girar();
                break;
            case "imagen1":
                this.barcosTablero1[1].girar();
                break;
            case "imagen2":
                this.barcosTablero1[2].girar();
                break;
        }  
    }
    colocarBarcosRival(){
        let colocado,x,y,girado;
        do{
            girado=Math.trunc(Math.random()*2);
            if(girado==1){
                this.barcosTablero2[0].girar();
            }
            x=Math.trunc(Math.random()*5);
            y=Math.trunc(Math.random()*5);
            colocado=this.tablero2.colocarEnTablero(this.barcosTablero2[0],x,y);
        }while(!colocado);
        do{
            girado=Math.trunc(Math.random()*2);
            if(girado==1){
                this.barcosTablero2[1].girar();
            }
            x=Math.trunc(Math.random()*5);
            y=Math.trunc(Math.random()*5);
            colocado=this.tablero2.colocarEnTablero(this.barcosTablero2[1],x,y);
            
        }while(!colocado);
        do{
            girado=Math.trunc(Math.random()*2);
            if(girado==1){
                this.barcosTablero2[2].girar();
            }
            x=Math.trunc(Math.random()*5);
            y=Math.trunc(Math.random()*5);
            colocado=this.tablero2.colocarEnTablero(this.barcosTablero2[2],x,y);
            
        }while(!colocado);
    }
    pintarTablero1(){
        let tabla=this.tablero1.getTabla();
        let element;
        let htmlTabla=document.getElementById("tablero1").children[0];
        for(let i=0;i<5;i++){
            for(let j=0;j<5;j++){
                element=htmlTabla.children[i].children[j];
                if(tabla[i][j]==0){
                    element.style.backgroundColor="white";
                }
                if(tabla[i][j]==1){
                    element.style.backgroundColor="blue";
                }
                if(tabla[i][j]==2){
                    element.style.backgroundColor="green";
                }
                if(tabla[i][j]==3){
                    element.style.backgroundColor="yellow";
                }

            }
        }
    }
    pintarTablero2(){
        let tabla=this.tablero2.getTabla();
        let element;
        let htmlTabla=document.getElementById("tablero2").children[0];
        for(let i=0;i<5;i++){
            for(let j=0;j<5;j++){
                element=htmlTabla.children[i].children[j];
                if(tabla[i][j]==0){
                    element.style.backgroundColor="white";
                }
                if(tabla[i][j]==1){
                    element.style.backgroundColor="blue";
                }
                if(tabla[i][j]==2){
                    element.style.backgroundColor="green";
                }
                if(tabla[i][j]==3){
                    element.style.backgroundColor="yellow";
                }

            }
        }
    }
}