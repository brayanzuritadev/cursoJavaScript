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
    nombreCompleto(){
        return this._nombre + " " + this._apellido
    }

    //sobreescribiendo el metodo de la clase padre(Object)
    toString(){
        //se aplica polimorfismo (multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una refencia de tipo padre
        //o de tipo hija
        return this.nombreCompleto()
    }
}


class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido)
        this._departamento=departamento
    }

    get departamento(){
        return this._departamento
    }

    set departamento(departamento){
        this._departamento=departamento
    }
    //sobreescritura de metodos
    nombreCompleto(){
        return super.nombreCompleto() + " " + this._departamento
    }
}

let persona1 = new Persona("daniela" ,"ajata")
console.log(persona1.toString())

let empleado1 = new Empleado("david","alvarez","sistemas")
console.log(empleado1)
console.log(empleado1.nombre)
//heredamos el metodo de la clase padre
console.log(empleado1.nombreCompleto())

console.log(empleado1.toString())