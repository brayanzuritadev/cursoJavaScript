const personas = [
    new Persona("Brayan", "Zurita"),
    new Persona("Jimena", "Salazar")
]

function mostrar(){
    let texto = ""

    for(let persona of personas){
        console.log(persona)
        texto += `<li> ${persona.nombre} ${persona.apellido}</li>`
    }

    document.getElementById("personas").innerHTML = texto;
}

function agregarPersona(){
    const forma = document.forms['forma']
    const nombre = forma.nombre.value
    const apellido = forma.apellido.value
    if(nombre != "" && apellido != ""){
        const persona = new Persona(nombre, apellido)
        personas.push(persona)
        mostrar();
    }else{
        window.alert("no hay texto en los campos")
    }
}