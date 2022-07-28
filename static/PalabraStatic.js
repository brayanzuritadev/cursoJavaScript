class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre
        this._apellido = apellido
    }

    set nombre(nombre){
        this._nombre = nombre
    }

    get nombre(){
        return this._nombre
    }

    set apellido(apellido){
        this._apellido = apellido
    }

    get apellido(){
        return this._apellido
    }

    static saludar(){
        console.log("este es un metodo statico")
    }

    static saludar2(persona){
        console.log(persona.nombre + " " + persona.apellido)
    }
}

let persona3 = new Persona("david", "carlos");


//persona1.saludar()
//no se puede llamar a un metodo statico desde un objeto
//se debe llamar desde la clase misma-
Persona.saludar()
Persona.saludar2(persona3)

