class Persona{
    static contadorPersona = 0;

    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre=nombre;
        this._apellido=apellido
        this._idPersona = ++Persona.contadorPersona;
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nombre){
        this._nombre=nombre
    }

    get apelllido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido=apellido
    }
}

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ=10