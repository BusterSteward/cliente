iniciar();
var max;
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
            
            console.log(datos);
            tabla.innerHTML="<tr><th>Nombre</th><th>Acciones</th></tr>";
            max=Math.max(...datos.map(obj => obj.id));
            datos.forEach(element => {
                tr=document.createElement("tr");
                td=document.createElement("td");
                td.appendChild(document.createTextNode(element.nombre));
                tr.appendChild(td);
                td=document.createElement("td");
                let id=element.id;
                button=document.createElement("button");
                button.appendChild(document.createTextNode("Ver más"));
                button.addEventListener("click",function(){
                    leer(id);
                });
                td.appendChild(button);
                button=document.createElement("button");
                button.appendChild(document.createTextNode("Modificar"));
                button.addEventListener("click",function(){
                    mostrarFormulario(id);
                });
                td.appendChild(button);
                button=document.createElement("button");
                button.appendChild(document.createTextNode("Borrar"));
                button.addEventListener("click",function(){
                    borrar(id,this);
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
    
    formulario.addEventListener("submit",crear);
    function crear(e){
        //console.log(e.target.nombre.value);
        
        
        let url="http://localhost:3000/peliculas";
        let obj={
            id:max+1,
            nombre:e.target.nombre.value,
            director:e.target.director.value,
            clasificacion:e.target.clasi.value
        }
        fetch(url,{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(obj)
        })
        .then(resolve=>console.log(resolve.status))
        
        .then(data=>{
            console.log("el registro ha sido creado",data);
            cargarListadoPeliculas(null);
        })
        .catch(err=>{
            console.log(err);
        })
        
    }
    function leer(id){
        const url="http://localhost:3000/peliculas/"+id;
        fetch(url)
        .then(resolve=>resolve.json())
        .then(data=>{
            let html=
            `<h2>Datos de la pelicula</h2>
            <p><span>Identificador: </span><span>${data.id}</span></p>
            <p><span>Nombre: </span><span>${data.nombre}</span></p>
            <p><span>Director: </span><span>${data.director}</span></p>
            <p><span>Categoria: </span><span>${data.clasificacion}</span></p>
            <button id="volver">Atras</button>`;
            juegos.innerHTML=html;
            document.getElementById("volver").addEventListener("click",function(){
                juegos.innerHTML="<h2>Listado de juegos</h2><table id='tabla'></table>"
                cargarListadoPeliculas(null);
            })
        })

    }
    function borrar(id,boton){
        console.log(id);
        let row=boton.parentNode.parentNode;
        tabla.removeChild(row);

        let url="http://localhost:3000/peliculas/"+id;
        fetch(url,{
            method:"DELETE"
        })
        .then(resolve=>{
            console.log("pelicula eliminada");
        })

    }
    function mostrarFormulario(id){
        
        fetch("http://localhost:3000/clasificaciones")
        .then(resolve=>resolve.json())
        .then(datos=>{
            
            let html=
            `<h2>Formulario de modificación</h2>
            <form id="formulario2" action="" onsubmit="return false;">
            <p><label for="nombreM">Nombre: </label><input id="nombreM" name="nombreM" type="text"/></p>
            <p><label for="directorM">Director: </label><input id="directorM" name="directorM" type="text"/></p>
            <p><label for="clasiM">Clasificación: </label><select id="clasiM" name="clasiM">`
            datos.forEach(cat=>{
                html+="<option value='"+cat.nombre+"'>"+cat.nombre+"</option>";
            })
            html+=`</select></p>
            <p><input type="reset" value="limpiar"/><input type="submit" value="modificar"/></p>
            </form>
            <button id="volver">Cancelar</button>`;
            juegos.innerHTML=html;
            formulario2.addEventListener("submit",function(){
                modificar(id,this)
            });
            document.getElementById("volver").addEventListener("click",function(){
                juegos.innerHTML="<h2>Listado de juegos</h2><table id='tabla'></table>"
                cargarListadoPeliculas(null);
            });
        })

    }
    function modificar(id,form){
        const url="http://localhost:3000/peliculas/"+id;
        let obj={
            id:id,
            nombre:form.nombreM.value,
            director:form.directorM.value,
            clasificacion:form.clasiM.value
        }
        fetch(url,{
            method:"PUT",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(obj)
        })
        .then(resolve=>{
            juegos.innerHTML="<h2>Listado de juegos</h2><table id='tabla'></table>"
                cargarListadoPeliculas(null);
        })
    }