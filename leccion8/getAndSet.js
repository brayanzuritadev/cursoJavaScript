let persona = {
    nombre: "juan",
    apellido: "perez",
    edad: 27,
    get nombreCompleto(){
        return this.nombre + " " + this.apellido
    }
}

console.log(persona.nombreCompleto)