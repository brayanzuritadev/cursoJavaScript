let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = false
    if(expresion)
        resolver("se resolvio correctamente")
    else
        rechazar("se produjo algun error")
})

miPromesa.then(resuelto => console.log(resuelto), error => console.log(error))

miPromesa
.then(valor => console.log(valor))
.catch(error => console.log(error))
