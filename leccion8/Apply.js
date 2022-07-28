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

//uso de apply
//el metodo persona1.nombrecompletotitulo con los datos de la persona 2
//al contrario de call en apply se envia los argumentos como un array

console.log(persona1.nombrecompletoTitulo.apply(persona2,["lic","7894562"]))