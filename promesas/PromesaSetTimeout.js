let promesa = new Promise((resolve) => {
    console.log("inicio de la promesa")
    setTimeout(()=> resolve("saludos con promesa y timeout"),3000)
    console.log("fin de la promesa")
})

promesa.then((mensaje)=>console.log(mensaje))