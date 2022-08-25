class Persona{

    static contadorPersona=0

    constructor(nombre, apellido, email, edad){
        this._idPersona=++Persona.contadorPersona
        this._nombre=nombre
        this._apellido=apellido
        this._email=email
        this._edad=edad
    }

    get idPersona(){
        return this._idPersona
    }

    set nombre(nombre){
        this._nombre=nombre
    }

    get nombre(){
        return this._nombre
    }

    set apellido(apellido){
        this._apellido=apellido
    }

    get apellido(){
        return this._apellido
    }

    set email(email){
        this._email=email
    }

    get email(){
        return this._email
    }

    set edad(edad){
        this._edad=edad
    }

    get edad(){
        return this._edad
    }

    toString(){
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._email} ${this._edad}`
    }
}

class Empleado extends Persona{
    
    static contadorEmpleado=0

    constructor(nombre, apellido, email,edad, sueldo){
        super(nombre,apellido,email,edad)
        this._idEmpleado=++Empleado.contadorEmpleado
        this._sueldo= sueldo
    }

    get idEmpleado(){
        return this._idEmpleado
    }

    get sueldo(){
        return this._sueldo
    }

    set sueldo(sueldo){
        this._sueldo=sueldo
    }

    toString(){
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`
    }
}

class Cliente extends Persona{
    static contadorCliente = 0

    constructor(nombre, apellido, edad, email, fechaRegistro){
        super(nombre, apellido, email, edad)
        this._idCliente = ++Cliente.contadorCliente
        this._fechaRegistro=fechaRegistro
    }

    get idCliente(){
        return this._idCliente
    }

    get fechaRegistro(){
        return this._fechaRegistro
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro=fechaRegistro
    }

    toString(){
        return super.toString() + ' ' + this._idCliente + ' ' + this._fechaRegistro
    }
}

//prueba clase persona
let persona1= new Persona("brayan","zurita","brayan@gmail",25)
console.log(persona1.toString())

//prueba cliente
let cliente1 = new Cliente("pedro", "domingo","pedro@gmail", '28', Date() )
console.log(cliente1.toString())

//prueba empleado
let empleado1 = new Empleado("pedro", "domi","pedro@gmail", 34, 500 )
console.log(empleado1.toString())