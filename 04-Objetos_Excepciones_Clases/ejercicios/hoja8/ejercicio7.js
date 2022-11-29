//7. Dado el siguiente fragmento de código, describe qué ocurre durante su ejecución:


 var pokemon = {
 firstname: 'Pika',
 lastname: 'Chu ',
 getPokeName: function() {
 var fullname = this.firstname + ' ' + this.lastname;
 return fullname;
 }
};//creamos un objeto literal llamado pokemon, con 2 propiedades y una funcion

var pokemonName = function() {
 console.log(this.getPokeName() + 'I choose you!');
};//creamos una funcion que nos muestra una cadena por consola,utilizando el objeto this

//creamos una funcion nueva que tiene el mismo cuerpo que la funcion pokemonName, pero le cambiamos
//la referencia al this al objeto que le pasamos como parámetro al bind, por lo que si llamamos a 
//logPokemon(), el objeto this será pokemon
var logPokemon = pokemonName.bind(pokemon);
logPokemon(); 
//devuelve por consola "Pikachu I choose you!"