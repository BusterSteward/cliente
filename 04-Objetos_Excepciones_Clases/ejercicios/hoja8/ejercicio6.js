//6. Dado el siguiente fragmento de código, describe qué ocurre durante su ejecución: 

var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
    }
   };//creamos un objeto literal llamado pokemon, que tiene 2 propiedades y una funcion

   
   var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' +
   hobby);
   };//creamos una funcion que muestra una cadena por consola, utilizando el objeto this
   
   //llamamos a la funcion usando call para cambiar la referencia al this por el objeto que le pasamos
   //por parámetro, de forma que el que ejecuta la funcion pokemonName, es el objeto pokemon
   //por lo tanto, dentro de la función, el objeto "this" es el objeto pokemon
   pokemonName.call(pokemon,'sushi', 'algorithms');
   //devuelve por consola: "Pikachu loves sushi and algorithms"

   //hacemos lo mismo con apply, la diferencia es que esta función no utiliza un array de tipo rest
   //por lo que tenemos que pasar el array completo como segundo parámetro
   pokemonName.apply(pokemon,['sushi', 'algorithms']); 
   //devuelve por consola: "Pikachu loves sushi and algorithms"