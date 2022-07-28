const autos = ["bmw","volvo"]
console.log(autos)

//agregar elementos en un array
autos.push("Audi");

console.log(autos)

//agregar elementos a un array
//se puede agregar elementos en distintas posiciones 
//en caso de no existir valor en alguno estos se rellanan con vlaor vacio

autos[autos.length] = "Cadillac"

console.log(autos)

//preguntar si es un array

console.log(autos instanceof Array)
console.log(Array.isArray(autos))