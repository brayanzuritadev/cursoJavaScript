//Funcion cosntructor de objetos de tipo Persona

function Persona(nombre, apellido){
    this.nombre=nombre,
    this.apellido=apellido,
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido
    }
}

let padre = new Persona ("pedro","domingo")

let madre = new Persona ("maria", "dominga")
padre.nombre="carlos"

console.log(madre)
console.log(padre)
console.log(madre.nombreCompleto())
console.log(padre.nombreCompleto())

//uso protype
Persona.prototype.tel="44455661"
console.log(padre.tel)