 const d = document

 const $id = id => {
    let element = d.getElementById(id)
    return element
 }

 const formularioUI = $id('formulario')
 const listaActividadesUI = $id('listaActividades')
 
 let arrayActividades = []
 
const crearItem = (actividad) => {
    let item = {
        actividad,
        estado: false
    }
    arrayActividades.push(item)
    return item
}

// let correr = crearItem('trotar')
// let nadar = crearItem('nadar')
console.log(arrayActividades)
// console.log(correr)

formularioUI.addEventListener("submit", e => {
    e.preventDefault()
    let actividadUI = $id('actividad').value
    // console.log(actividadUI)
    crearItem(actividadUI)
    guardarDb()
    formularioUI.reset()
})

const guardarDb = () => {
    localStorage.setItem('rutina', JSON.stringify(arrayActividades))
    pintarDb()
}

const pintarDb = () => {
    listaActividadesUI.innerHTML = ''
    arrayActividades = JSON.parse(localStorage.getItem("rutina"))
    if(arrayActividades === null) {
        arrayActividades = []
    } else {
        arrayActividades.forEach(element => {
            // console.log(element)
            listaActividadesUI.innerHTML += `<div class="alert alert-danger" role="alert">
<i class="material-icons float-left mr-2">accessibility</i>
<b id="element-actividad">${element.actividad}</b> - ${element.estado}<span class="float-right">
<i class="material-icons icon-done">done</i>
<i class="material-icons icon-delete">delete</i></span></div>`
        });
    }
}

const eliminarDb = (actividad) => {
        console.log(e)    
}

d.addEventListener("DOMContentLoaded", pintarDb)

listaActividadesUI.addEventListener("click", e => {
    e.preventDefault()
    if (e.target.classList.contains('icon-delete')) {
        // console.log(e.target)
        eliminarDb($id('element-actividad'))
    }
    if(e.target.classList.contains('icon-done')){
        console.log(e.target)
    }
})