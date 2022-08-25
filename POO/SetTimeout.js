//llamadas asincronas con uso de setTimeout

function miFuncionCallback(){
    console.log("saludo asincrono despues de 5 segundos")
}

setTimeout(miFuncionCallback, 5000);

setTimeout(() => console.log("saludo despues de 2 segundos"),2000)