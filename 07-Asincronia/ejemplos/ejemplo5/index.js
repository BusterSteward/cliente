boton.addEventListener("click",iniciar);

function iniciar(){
    console.log("dentro");
    let promise1 = new Promise(function(resolve, reject) {
        // la función se ejecuta automáticamente cuando se construye la promesa
        // después de 1 segundo, indica que la tarea está hecha con el resultado "hecho"
        setTimeout(() => resolve("hecho"), 1000);
       });
       promise1.finally(()=> console.log("fin promesa1"))
       .then(
        function(result) { alert("RESULT:" + result) },
        function(error) { alert("ERROR"+ error) }
       );
       
    let promise2 = new Promise(function(resolve,reject){
        setTimeout(() => reject("vaya"), 1000);
    });
    promise2.finally(()=> console.log("fin promesa2"))
    .then(
        function(result) { alert("RESULT: " + result) },
        function(error) { alert("ERROR: "+ error) }
       );

       
}