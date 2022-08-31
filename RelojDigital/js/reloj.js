const mostrarReloj = ()=>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours())
    let mn = formatoHora(fecha.getMinutes())
    let seg = formatoHora(fecha.getSeconds())
    document.getElementById("hora").innerHTML = `${hr}:${mn}:${seg}`

    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo","JUnio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

    let mes = meses[fecha.getMonth()]
    let diaSemana = dias[fecha.getDay()]
    let dia = fecha.getDate()
    console.log(fecha.getDay)
    let texto = `${diaSemana} ${dia} de ${mes}`
    
    document.getElementById("fecha").innerHTML = texto
    document.getElementById("contenedor").classList.toggle("animar")
    document.getElementById("mensaje").innerHTML =`Hola mi amor solo quiero decirte que te extraño`
}

const formatoHora = (hora) => {
    if(hora<10){
        hora= "0"+hora
    }
    return hora
}

setInterval(mostrarReloj, 1000)