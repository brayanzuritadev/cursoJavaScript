class Producto{
    static contadorProductos = 0

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos
        this._nombre = nombre
        this._precio = precio
    }

    get idProducto(){
        return this._idProducto
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nombre){
        this._nombre = nombre
    }

    get precio(){
        return this._precio
    }

    set precio(precio){
        this._precio = precio
    }

    toString(){
        return `idProducto : ${this._idProducto}, nombre : ${this._nombre}, precio : ${this._precio}`
    }
}

class Orden{
    static contadorOrdenes = 0

    static get MAX_PRODUCTOS(){
        return 5
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes
        this._productos = []
        this._contadorProdcutosAgregados = 0
    }

    get idOrden(){
        return this._idOrden
    }

    agregarProductos(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
        this._productos.push(producto)
        }else{
            console.log("no se pueden agregar mas productos")
        }
    }

    calcularTotal(){
        let totalProductos = 0
        for(let producto of this._productos){
            totalProductos += producto._precio
        }
        return totalProductos
    }

    mostrarOrden(){
        let ordenProductos = ""
        for(let producto of this._productos){
            ordenProductos += '\n' + producto.toString() + " "
        }

        console.log(`Orden: ${this._idOrden} Total: ${this.calcularTotal()}, Productos: ${ordenProductos} `)
    }

}

let producto1=new Producto("pantalon", 200)
let producto2 = new Producto("camisa", 150)

let orden1 = new Orden()
orden1.agregarProductos(producto1)
orden1.agregarProductos(producto2)

orden1.mostrarOrden()
