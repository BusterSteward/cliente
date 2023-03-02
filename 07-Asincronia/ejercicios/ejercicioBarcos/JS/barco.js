
class barco{
    constructor(id,rival){
        this.girado=false;
        this.id=id;
        this.forma;
        this.pos=null;
        this.colocado=false;
        this.hundido=false;
        
    }
    getHundido(){
        return this.hundido;
    }
    getGirado(){
        return this.girado;
    }
    setColocado(res){
        this.colocado=res;
    }
    getColocado(){
        return this.colocado;
    }
    setPos(x,y){
        this.pos={
            "x":x,
            "y":y,
            "forma":this.forma
        }
    }
    getPos(){
        return this.pos;
    }

    girar(){
        console.log(this);
        let element=document.getElementById(this.id);
        if(element!=undefined){
            if(this.girado)
                element.style="transform:rotate(0deg)";
            else
                element.style="transform:rotate(90deg)";

        }
        
        this.girado=!this.girado;
    }
    damePosicionesOcupadas(){
        let ocupadas=[];
        let p=this.pos;
        ocupadas.push({
            "x":p.x,
            "y":p.y
        });
        if(p.forma.top){
            ocupadas.push({
                "x":p.x+1,
                "y":p.y
            });
        }
        if(p.forma.right){
            ocupadas.push({
                "x":p.x,
                "y":p.y+1
            });
        }
        if(p.forma.left){
            ocupadas.push({
                "x":p.x,
                "y":p.y-1
            });
        }
        if(p.forma.bottom){
            ocupadas.push({
                "x":p.x-1,
                "y":p.y
            })
        }
        return ocupadas;
    }
    damePosicionesAOcupar(x,y){
        let ocupando=[];
        if(this.forma.top){
            ocupando.push({
                "x":x+1,
                "y":y
            });
        }
        if(this.forma.right){
            ocupando.push({
                "x":x,
                "y":y+1
            });
        }
        if(this.forma.left){
            ocupando.push({
                "x":x,
                "y":y-1
            });
        }
        if(this.forma.bottom){
            ocupando.push({
                "x":x-1,
                "y":y
            })
        }
        ocupando.push({
            "x":x,
            "y":y
        })
        return ocupando;
    }

    
}
export class barcoEstrella extends barco{
    
    constructor(id){
        super(id);
        this.forma={
            "top":true,
            "left":true,
            "right":true,
            "bottom":true
        }
        this.golpes=0;
        this.valor=1;
    }
    tocado(){
        this.golpes++;
        let mensaje="Se ha alcanzado a un barco";
        if(this.golpes==5){
            this.hundido=true;
            mensaje="Tocado y hundido";
        }
        return mensaje;
    }
}

export class barcoLargo extends barco{
    constructor(id){
        super(id);
        this.forma={
            "top":false,
            "left":true,
            "right":true,
            "bottom":false
        }
        this.golpes=0;
        this.valor=2;
    }
    tocado(){
        this.golpes++;
        let mensaje="Se ha alcanzado a un barco";
        if(this.golpes==3){
            this.hundido=true;
            mensaje="Tocado y hundido";
        }
        return mensaje;
    }
    girar(){
        super.girar();
        if(this.girado){
            this.forma={
                "top":true,
                "left":false,
                "right":false,
                "bottom":true
            }
        }
        else{
            this.forma={
                "top":false,
                "left":true,
                "right":true,
                "bottom":false
            }
        }
    }
}

export class barcoCorto extends barco{
    constructor(id){
        super(id);
        
        this.forma={
            "top":false,
            "left":false,
            "right":true,
            "bottom":false
        }
        this.golpes=0;
        this.valor=3;
    }
    girar(){
        super.girar();
        if(this.girado){
            this.forma={
                "top":false,
                "left":false,
                "right":false,
                "bottom":true
            }
        }
        else{
            this.forma={
                "top":false,
                "left":false,
                "right":true,
                "bottom":false
            }
        }
    }
    tocado(){
        this.golpes++;
        let mensaje="Se ha alcanzado a un barco";
        if(this.golpes==2){
            this.hundido=true;
            mensaje="Tocado y hundido";
        }
        return mensaje;
    }
}