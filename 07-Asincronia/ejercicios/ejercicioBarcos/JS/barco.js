
class barco{
    constructor(id){
        this.id=id;
        this.posCentro={
            "x":null,
            "y":null
        }
    }
    girar(){
        let element=document.getElementById(id);
        
    }

    
}
export class barcoEstrella extends barco{
    
    constructor(){
        super();
        this.forma={
            "top":true,
            "left":true,
            "right":true,
            "bottom":true
        }
    }
    girar(){
        super();
    }
}

export class barcoLargo extends barco{
    constructor(){
        super();
        this.girado=false;
        this.forma={
            "top":false,
            "left":true,
            "right":true,
            "bottom":false
        }
    }
    girar(){
        super();
        if(this.forma.top){
            this.forma={
                "top":false,
                "left":true,
                "right":true,
                "bottom":false
            }
        }
        else{
            this.forma={
                "top":true,
                "left":false,
                "right":false,
                "bottom":true
            }
        }
    }
}

export class barcoCorto extends barco{
    constructor(){
        super();
        this.girado=false;
        this.forma={
            "top":false,
            "left":false,
            "right":true,
            "bottom":false
        }
    }
}