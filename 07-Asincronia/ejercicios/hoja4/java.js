iniciar();

    function cargarListadoCategorias(){

        const url="http://localhost:3000/clasificaciones";
        let opt,li,a,fragmento1=document.createDocumentFragment(),fragmento2=document.createDocumentFragment();
        fetch(url)
        .then(function(resolve){
            return resolve.json();
        })
        .then(function(data){
            console.log(data);
            
            data.forEach(element=>{
                opt=document.createElement("option");
                opt.setAttribute("value",element.nombre);
                opt.appendChild(document.createTextNode(element.nombre));
                fragmento1.appendChild(opt);
                li=document.createElement("li");
                a=document.createElement("a");
                a.setAttribute("href","#");
                a.addEventListener("click",function(){
                    cargarListadoPeliculas(element.nombre);
                })
                a.appendChild(document.createTextNode(element.nombre));
                li.appendChild(a);
                fragmento2.appendChild(li);
            });
            
            clasi.appendChild(fragmento1);
            listaCategorias.appendChild(fragmento2);
        })
    }
    function cargarListadoPeliculas(filtro){
        let url="http://localhost:3000/peliculas";
        if(filtro!=null &&filtro!=""){
            url+="?clasificacion="+filtro;
        }
        let tr,button,td,fragmento=document.createDocumentFragment();
        
        fetch(url)
        .then(function(resolve){
            return resolve.json();
        })
        .then(function(datos){
            
            tabla.innerHTML="<tr><th>Nombre</th><th>Acciones</th></tr>";
            datos.forEach(element => {
                tr=document.createElement("tr");
                td=document.createElement("td");
                td.appendChild(document.createTextNode(element.nombre));
                tr.appendChild(td);
                td=document.createElement("td");
                let id=element.id;
                button=document.createElement("button");
                button.appendChild(document.createTextNode("Ver más"));
                button.addEventListener("click",function(id){
                    leer(id);
                });
                td.appendChild(button);
                button=document.createElement("button");
                button.appendChild(document.createTextNode("Modificar"));
                button.addEventListener("click",function(id){
                    modificar(id);
                });
                td.appendChild(button);
                button=document.createElement("button");
                button.appendChild(document.createTextNode("Borrar"));
                button.addEventListener("click",function(id){
                    borrar(id);
                });
                td.appendChild(button);
                tr.appendChild(td);
                fragmento.appendChild(tr);
            });
            
            tabla.appendChild(fragmento);
        })
    }
   
    function iniciar(){
        cargarListadoPeliculas(null);
        cargarListadoCategorias();
    }
    function crear(form){
        console.log("creando");
    }
    function leer(id){
        console.log("leyendo");

    }
    function borrar(id){
        console.log("borrando");

    }
    function modificar(id){
        console.log("modificando");
    }