//hoisting
miFuncion(2,8)

//declaracion de la funcion
function miFuncion(a,b){
    console.log("la suma es : " + (a + b))
}


//llamando funcion. Podemos llamarla antes o despues de declararla
miFuncion(2,3)


//uso de return
function miFuncion2(a,b){
    return a + b
}

let resultado = miFuncion2(9,5)
console.log(resultado)

//funciones de tipo expresion

let x = function (a,b) {return a+b};
resultados = x(1,6)
console.log(resultados)