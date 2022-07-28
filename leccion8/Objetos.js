let persona ={
    nombre: 'Brayan',
    apellido: 'Perez',
    edad: 27,
    nombrecompleto: function(){
        return this.nombre+" "+this.apellido
    }
}

console.log(persona.nombrecompleto())
// recorrer un objeto
for(nombrePropiedad in persona){
    console.log(nombrePropiedad)
    console.log(persona[nombrePropiedad])
}

//otra forma de acceder a las propiedades de un objeto
console.log(persona["nombre"])

//agregar una propiedad
persona.telefono=4444455666

console.log(persona)
//eleiminar una propiedad
delete persona.telefono
console.log(persona)
