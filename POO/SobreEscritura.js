class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre
        this._sueldo = sueldo
    }

    obtenerDetalles(){
        return `Empleado : nombre: ${this._nombre}, sueldo: ${this._sueldo}`
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo)
        this._departamento = departamento
    }

    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}, departamento: ${this._departamento}`
    }
}

//polimorfismo
function tipo(tipo){
    console.log(tipo.obtenerDetalles())
    if(tipo instanceof Gerente){
        console.log("es un tipo gerente")
    }else if(tipo instanceof Empleado){
        console.log("es un tipo empleado")
    }else if(tipo instanceof Object){
        console.log("es un tipo object")
    }
}

let empleado1 = new Empleado("pedro", 500)
//console.log(empleado1.obtenerDetalles())

let gerente = new Gerente("alvaro",1000,"sistemas")
//console.log(gerente.obtenerDetalles())

tipo(empleado1)
tipo(gerente)