/*
1. Diseña código JS necesario para realizar sobre el objeto definido a continuación las acciones
indicadas en la tabla: 

*/
var alumno = {
    nombre: "Pedro",
    dni: "00001111F",
   } 

/*
Añadir la propiedad
"fechaNacimiento" (de tipo Date), con
un valor determinado
*/

alumno.fechaNacimiento=new Date("2/1/1997");

/*
Añadir el método calcularEdad()
*/

alumno.calcularEdad()=function(){

    //código de calcularEdad();
}
/*
Añadir la propiedad
"numeroExpediente" con el valor 120-2020
*/
alumno.numeroExpediente="120-2020";
/*
Eliminar la propiedad "dni"
*/
delete alumno.dni;

/*
2. Dado el objeto alumno definido en el ejercicio anterior, indica qué valor devuelve las
siguientes expresiones, razonando la respuesta: 

alumno.nombre -> "Pedro" -> Es el valor que tiene asignada esa propiedad del objeto

alumno.direccion -> undefined -> Ya que la propiedad no está definida, devuelve undefined

alumno.prototype -> undefined -> Ya que no estamos heredando de ningun objeto la propiedad prototype es undefined

alumno.__proto__ -> object -> Como lo hemos declarado de forma literal, alumno es solo un objeto, no existe el prototipo alumno
*/

/*
3. Dada la función Alumno() definida a continuación, diseña el código necesario para realizar
las tareas indicadas en la tabla: 
*/
function Alumno(nombre, dni){
    this.nombre = nombre;
    this.dni = dni
   } 

/*
Añadir a Alumno la propiedad
"fechaNacimiento" (de tipo Date), con
un valor determinado 
*/


/*
Añadir a Alumno el método
calcularEdad()
*/

/*
Añadir a la propiedad prototype de
Alumno la propiedad
"numeroExpediente " con el valor
"120-2020" 
*/

Alumno.prototype.numeroExpediente="120-2020";

/*
4. Dado el objeto alumna1 definido a continuación:
*/
alumna1 = new Alumno("Maria", "00011111G")
/*
Suponemos que se han realizado todas las tareas que se describen en el ejercicio anterior
sobre la función Alumno(). Indica el resultado de ejecutar las siguientes expresiones,
razonando la respuesta:

alumna1.nombre -> María -> porque es el valor que le asignamos por medio del constructor

alumna1.fechaNacimiento ->

alumna1.numeroExpediente -> 120-2020 -> como la añadimos la propiedad al prototipo, todos los objetos que tengan este prototipo tienen 
                                        esa propiedad con ese valor

alumna1.prototype -> Alumno -> Como utilizamos un constructor, el prototipo de este objeto es el nombre del constructor

Alumno.prototype -> Object -> El prototipo padre es object porque es el prototipo del que heredan todos los demas.
*/

