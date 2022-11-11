var diasPorMes=[31,28,31,30,31,30,31,31,30,31,30,31];
    
    function validarMes(num){
        return num<=12&&num>=1;
    }

    function validarDia(dia,mes){
        
        return dia>=1&&dia<=diasPorMes[mes];
    }
    function introducirValor(cad,mes){
        
        let num = prompt("Introduce un "+cad+":");
        if(num==null){
        alert("Error: ejecución cancelada");
        
        }
        else{
            num= parseInt(num);
            if(isNaN(num)){
                alert("Error: no se ha introducido un número");
            }
            else if(num<1){
                alert("Error: número menor que 1");
            }
            else{
                let res;
                if(cad=="mes"){
                    res=validarMes(num);
                }
                else{
                    res=validarDia(num,mes);
                }
                if(res){
                    return num;
                }
                else{
                    alert("El numero del "+cad+" no es válido");
                    
                }
            }
        }
        return -1;
    }
    let p = document.getElementById("resul");
    let dia,mes;

    do{
        mes=introducirValor("mes");
    }while(mes==-1);

    do{
        dia=introducirValor("dia",mes);
    }while(dia==-1);


    dias=0;
    for(let i=0;i<mes-1;i++){
        dias+=diasPorMes[i];
    }
    dias+=dia;

    let html="Han pasado "+dias+" dias desde que empezó el año.";
    p.innerHTML=html;