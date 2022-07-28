/*ejemplos de tipos de datos en javascript*/


//tipo de dato string
var nombre = "Ubaldo";
nombre = 1;
console.log(typeof nombre)


//tipo de dato int
var numero = 1000;
console.log(numero)

//tipo de dato object
var objeto = {
    nombre: "juan",
    edad: 27,
    apellido: "perez"
}

console.log(objeto)

//tipo de dato function
function miFuncion(){}

console.log(miFuncion)

//tipo de dato symbol
var simbolo = Symbol("mi simbolo")

console.log(simbolo)

//tipo clase es una function
class Persona{

    constructor(nombre, apellido){
    this.nombre=nombre
    this.apellido = apellido
    }
}

console.log(Persona)

//tipo de dato undefined
var x
console.log(x)

x=undefined

//null= ausencia de valor es un tipo object
var y = null
console.log(y)
console.log(typeof y)

var autos = ["bmw","audi","volvo"]
console.log(typeof autos)