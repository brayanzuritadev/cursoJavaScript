const ingresos = [
    
]

const egresos = [

]

let cargarApp = () =>{
    cargarCabecero();
    cargarIngresos()
    cargarEgresos()
}

let totalIngresos = () => {
    let totalIngreso = 0

    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor
    }
    return totalIngreso
}
let totalEgresos = () =>{
    let totalEgreso = 0

    for(let egreso of egresos){
        totalEgreso += egreso.valor
    }
    return totalEgreso
}

let cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos()
    let porcentaje = totalEgresos()/totalIngresos()
    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto)
    document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentaje)
    document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos())
    document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos())
}

const formatoMoneda = (valor) => {
    return valor.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2})
}

const formatoPorcentaje = (valor) =>{
    return valor.toLocaleString("en-US", {style: "percent", minimumFractionDigits:2})
}

let cargarIngresos = () => {
    let ingresosTotalArray = ""
    for(let ingreso of ingresos){
        ingresosTotalArray += generarHTMLIngresos(ingreso)
    }
    document.getElementById("lista-ingresos").innerHTML = ingresosTotalArray
}

const generarHTMLIngresos= (ingreso) => {
    const ingresosHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha  limpiarEstilos">
        <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline" onclick = "eliminarIngreso(${ingreso.id})"></ion-icon>
            </button>
        </div>
    </div>
    </div>
    `
    return ingresosHTML
}

const eliminarIngreso = (id) => {
    console.log(id)
    let idEliminar = ingresos.findIndex(ingreso => ingreso.id == id)
    ingresos.splice(idEliminar, 1)
    cargarCabecero()
    cargarIngresos()
}

const cargarEgresos = () =>{
    let totalArray = ""

    for(let egreso of egresos){
        totalArray += generarHTMLEgresos(egreso)
    }

    document.getElementById("lista-egresos").innerHTML = totalArray
}

const generarHTMLEgresos = (egreso) =>{
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline"
                onclick = "eliminarEgreso(${egreso.id})"></ion-icon>
            </button>
        </div>
    </div>
    </div>
    `
    return egresoHTML
}

const eliminarEgreso = (id) =>{
    console.log(id)
    let idEliminar = egresos.findIndex(egreso => egreso.id == id)
    egresos.splice(idEliminar, 1)
    cargarCabecero()
    cargarEgresos()
}

let agregarDato = () =>{
    let forma = document.forms["forma"]
    let tipo = forma["tipo"]
    let descripcion = forma["descripcion"]
    let valor = forma["valor"]
    if(descripcion.value !== "" && valor.value !== ""){
        if(tipo.value == "ingreso"){
            ingresos.push(new Ingreso(descripcion.value, +valor.value)) //convertimos a numero la variable valor.value
            cargarCabecero()
            cargarIngresos()
        }else if(tipo.value == "egreso"){
            egresos.push(new Egreso(descripcion.value, +valor.value))
            cargarCabecero()
            cargarEgresos()
        }
    }
}