
let r1,r2;

r1 = Math.trunc((Math.random()*100))+1;
r2 = Math.trunc((Math.random()*100))+1;

console.log("Numero 1: "+r1);
console.log("Numero 2: "+r2);

if(r1==r2){
    console.log("Son iguales");
}
else if(r1>r2){
    console.log("El numero 1 es mayor");
}
else
    console.log("El numero 2 es mayor");