class Punto{
    constructor(x,y){
    this.coordenadaX=x;
    this.coordenadaY=y;
    }
    desplazarEjeX(v){
    this.coordenadaX+=v;
    }
    desplazarEjeY(v){
    this.coordenadaY+=v;
    }
    esIgual(p){
        return (this.coordenadaX==p.coordenadaX&&this.coordenadaY==p.coordenadaY);
    }
    static sonIguales(p1,p2){
        return (p1.coordenadaX==p2.coordenadaX&&p1.coordenadaY==p2.coordenadaY);
    }

}

var p1=new Punto(2,3);
var p2=new Punto(2,3);
var p3=new Punto(1,1);
console.log(p1.esIgual(p2)); //true
console.log(p1.esIgual(p3)); //false

p1.coordenadaX=5;
console.log(p1.esIgual(p2)); //false
console.log(Punto.sonIguales(p1,p2));