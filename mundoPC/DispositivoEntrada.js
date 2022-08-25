class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada
        this._marca=marca
    }

    get tipoEntrada(){
        return this._tipoEntrada
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada
    }

    get marca(){
        return this._marca
    }

    set marca(marca){
        this._marca=marca
    }
}

class Raton extends DispositivoEntrada{
    static contadorRaton = 0

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idRaton = ++Raton.contadorRaton
    }

    get idRaton(){
        return this._idRaton
    }

    toString(){
        return `Raton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}`
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idTeclado = ++Teclado.contadorTeclado
    }

    get idTeclado(){
        return this._idTeclado
    }

    toString(){
        return `Teclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}`
    }
}

class Monitor{
    static contadorMonitor = 0

    constructor(marca, tamaño){
        this._idMonitor= ++Monitor.contadorMonitor
        this._marca = marca
        this._tamaño = tamaño
    }

    get idMonitor(){
        return this._idMonitor
    }

    get marca(){
        return this._marca
    }

    set marca(marca){
        this._marca=marca
    }

    get tamaño(){
        return this._tamaño
    }

    set tamaño(tamaño){
        this._tamaño = tamaño
    }

    toString(){
        return `Monitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}`
    }
}

class Computadora{
    static contadorComputadora = 0

    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadora        
        this._nombre = nombre
        this._monitor = monitor
        this._teclado = teclado
        this._raton = raton
    }

    get idComputadora(){
        return this._idComputadora
    }

    toString(){
        return `computadora: ${this._idComputadora}, nombre: ${this._nombre}, \n ${this._monitor}, \n ${this._teclado}, \n ${this._raton}`
    }

}

class Orden{
    static contadorOrden = 0

    constructor(){
        this._idOrden= ++Orden.contadorOrden
        this._computadoras = [];
    }

    get idOrden(){
        return this._idOrden
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora)
    }

    mostrarOrdenes(){
        let computadorasOrden = ""

        for(let computadora of this._computadoras){
            computadorasOrden += `\n${computadora}`
        }  
        
        console.log(`orden: ${this._idOrden}, computadoras: ${computadorasOrden}`)
    }
}


let raton1 = new Raton("USB","hp")
let raton2 = new Raton("bluetooth", "dell")
raton2.marca="acer"
//console.log(raton2.toString())

let teclado1 = new Teclado("usb", "dell")
let teclado2 = new Teclado("bluetooh", "alienware")
//console.log(teclado1.toString())

let monitor1 = new Monitor("php", 24)
let monitor2 = new Monitor("sony", 15)
//console.log(monitor2.toString())

let computadora1 = new Computadora("armada", monitor1,teclado1,raton2)
//console.log(computadora1.toString())

let orden1=new Orden()
let orden2=new Orden()
orden1.agregarComputadora(computadora1)
orden1.agregarComputadora(computadora1)

orden1.mostrarOrdenes()