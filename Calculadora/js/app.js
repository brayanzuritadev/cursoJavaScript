console.log("hola")
function sumar(){
    //esto me devuelve un array con los elemntos de form
    const forma = document.getElementById('forma');
    let operandoA = forma["operandoA"]
    let operandoB= forma["operandoB"]
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value)
    if(isNaN(resultado))
    resultado = "no existen valores numericos en las casillas"
    document.getElementById('resultado').innerHTML = `el resultado es ${resultado}`
    
}