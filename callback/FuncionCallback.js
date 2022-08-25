//funciones de tipo callback

//esta es otra forma
//let imprimir = function(mensaje) 
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar (a,b,funcionCallBack){
    let resultado = a+b
    funcionCallBack(`el resultado es : ${resultado}`)
}

sumar(8,9,imprimir)