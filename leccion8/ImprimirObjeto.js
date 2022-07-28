let persona={
    nombre: "brayan",
    apellido: "zurita"
}

let personaArray = Object.values(persona)
console.log(personaArray)

//otra forma
let personaString = JSON.stringify(persona)
console.log(personaString)