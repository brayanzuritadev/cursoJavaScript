class Persona{
    static contadorObjetosPersona = 0;
    email = "valor default email"

    constructor(nombre, apellido){
        this._nombre= nombre
        this._apellido = apellido

        Persona.contadorObjetosPersona++;
    }

    set nombre(nombre){
        this._nombre=nombre
    }

    set apellido(apellido){
        this._apellido = _apellido
    }

    get nombre(){
        return this._nombre
    }

    get apellido(){
        return this._apellido
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, cargo){
        super(nombre, apellido)
        this._cargo=cargo
    }

    set cargo(cargo){
        this._cargo=cargo
    }

    get cargo(){
        return this._cargo
    }
}

let persona1 = new Persona("pedro", "domingo")
let persona2 = new Persona("ariel","alvarez")
console.log(persona1)
console.log()
console.log(Persona.contadorObjetosPersona)