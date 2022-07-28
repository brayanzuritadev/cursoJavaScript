//no se posible crear oobjetos de una clase antes de declarar la clase
//no se aplica el concepto de hoisting

//let.persona2=new Persona("karla","nueva")

class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre
        this._apellido = apellido
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nombre){
        this._nombre=nombre
    }

    get apellido(){
        return this._apellido
    }

    set apellido(apellido){
        this._apellido=apellido
    }
}

let persona1 = new Persona("pedro","domingo")
console.log(persona1.nombre)

persona1.nombre="juan carlos"
console.log(persona1.nombre)
