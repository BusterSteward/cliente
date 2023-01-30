var tiposLetra=["Arial","Helvetica","Courier New","Verdana","Lucida Console"]

window.addEventListener("load",function(){
    window.document.body.style.fontFamily="Times";
    console.log(tiposLetra)
});

document.addEventListener("keyup",function(ev){
    console.log(ev.key);
    if(ev.key=="Control"){
        let letra=this.body.style.fontFamily;
        console.log(letra);
        let pos=Math.trunc(Math.random()*tiposLetra.length);
        this.body.style.fontFamily=tiposLetra[pos];
        tiposLetra.splice(pos,1);
        tiposLetra.push(letra);
        console.log(tiposLetra);
    }
    else if(ev.key=="m"||ev.key=="M"){
        let objetives=document.getElementsByTagName("strong");
        let mayus=objetives.item(0).style.textTransform;
        for(let i=0;i<objetives.length;i++){
            if(mayus=="uppercase")
            objetives.item(i).style.textTransform="inherit";
            else
            objetives.item(i).style.textTransform="uppercase";
        }
    }
    
});