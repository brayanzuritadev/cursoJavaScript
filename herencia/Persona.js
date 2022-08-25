class Persona{

    static contadorPersona=0

    constructor(nombre, apellido, email){
        this._idPersona=++Perosna.contadorPersona
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
        return `${this._idPersona}
                ${this._nombre}
                ${this._apellido}
                ${this._email}
                ${this._edad}`
    }
}