let funcionFlecha = () =>{
    console.log("esta es una funcion flecha")
}

//funcion anonima
let funcion = function(){
    console.log("funcion anonima")
}

let saludar = () => {return "hola desde la funcion flecha saludar"}
let saludarsimplificado = () => "hola desde la funcion flecha simplificado"

let retornarObjeto = () => ({nombre: "brayan", apellido: "zurita"})

let funcionVariosParametros = (a,b) => a + 
//funcion()
console.log(saludar())
console.log(saludarsimplificado())
console.log(retornarObjeto())
console.log(funcionVariosParametros(5,9))
funcionFlecha()