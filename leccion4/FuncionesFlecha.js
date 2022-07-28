//Declaracion Duncion de tipo expresion
let sumar = function (a=8, b=11) {return a+b}

//usando los valores por default
let resultado1 = sumar()
console.log(resultado1)

//Funcion flecha
let sumar2 = (a,b) => a+b

let resultado = sumar2(9,7)
console.log(resultado)