//async indica que una funcion retorna una promesa

async function funcionPromesa(){
    return "saludos con promesa y async"
}

funcionPromesa().then(valor => console.log(valor))

//async/await

//funcion con async y await

async function funcionAwait(){
    let miPromesa = new Promise( resolve =>{
        resolve("promesa con await")
    })

    console.log(await miPromesa)
}

funcionAwait()

//funcion con await y timeout
async function funcionAwaitTimeout(){
    let miPromesa = new Promise(resolve => {
        setTimeout(() => resolve("promesa con await y tomeout"),3000)
    })

    console.log(await miPromesa)
}

funcionAwaitTimeout()