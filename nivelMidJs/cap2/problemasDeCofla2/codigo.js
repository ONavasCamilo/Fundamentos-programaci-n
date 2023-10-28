alumnos = [{
    nombre: 'Lucas Dalto',
    email: 'soydalto@gmail.com',
    materia: 'Fisica 3'
},{
nombre: 'Karin guerra',
email: 'nosoykarin@gmail.com',
materia: 'Fisica 1'
},{
    nombre: 'Lucas felipe',
    email: 'sskekeke@gmail.com',
    materia: 'matematicas'
    },{
        nombre: 'felipe antonyo',
        email: 'soydalto@hotmailxd.com',
        materia: 'Fisik 44'
        },{
            nombre: 'cofla',
            email: 'soycofla@yahoo.co',
            materia: 'recreo'
            }
]

// for (alumno in alumnos){
//     console.log(alumnos[alumno])
// }

// for (alumno in alumnos){
//     for (datos in alumnos[alumno]){
//         console.log(alumnos[alumno][datos])
//     }
// }

// const $id = (id) => document.getElementById(id)

// const addClass = (elementId, className) => {
//     const element = $id(elementId)
//     if(element){
//         element.classList.add(className)
//     }
// }


const contenedor  = document.querySelector('.grid-container')
const boton = document.querySelector('.boton-confirmar')

let htmlCode = ''

for (alumno in alumnos){
    let datos = alumnos[alumno]
    // console.log(datos)
    let nombre = datos['nombre']
    let email = datos['email']
    let materia = datos['materia']
    let htmlCode = ` 
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="semana 1">Semana 1</option>
            <option value="semana 2">Semana 2</option>
        </select>
        </ div>
`
}

contenedor.innerHTML = htmlCode

boton.addEventListener('click', ()=>{
    let confirmar = confirm('¿realmente quieres confirmar las mesas?')
    if(confirmar){
        // boton.remove()
        document.body.removeChild(boton)
        let elementos = document.querySelectorAll('.semana')
        let semanasElegidas = document.querySelectorAll('.semana-elegida')
        for (elemento in elementos){
            semana = elementos[elemento]
            semana.innerHTML = semanasElegidas[elemento].value
        }
    }
})