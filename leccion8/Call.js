let persona1 = {
    nombre: "juan",
    apellido: "perez",
    nombreCompleto: function(){
        return this.nombre+ " " + this.apellido
    },
    nombrecompletoTitulo: function(titulo,telefono){
        return titulo+ ": " + this.nombre + " " + this.apellido + ", " + telefono
    }
}

let persona2 = {
    nombre: "Carlos",
    apellido: "Lara"
}

//uso de call para usar
//el metodo persona1.nombreCompleto con lso datos de persona2

console.log(persona1.nombreCompleto.call(persona2))
console.log(persona1.nombrecompletoTitulo.call(persona2,"Ing","123546"))