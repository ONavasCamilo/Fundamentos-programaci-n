// const titulo2 = document.createElement('h2')
// const textoTitulo2 = document.createTextNode('Nuevo titulo creado para el aprendizaje de creacion de texto')


// const comentario = document.createComment('comentario random')

// const articulo = document.querySelector('article')
// const articulo2 = articulo.cloneNode(true)


// const section = document.getElementById('section')




// EVENTOS
// function clickTitulo(){
//     console.log('el usuario hizo click en el titulo')
// }

// const titulo2 = document.getElementById('tituloForm')

// titulo2.addEventListener('click', clickTitulo)

// titulo2.removeEventListener('click', clickTitulo)


// document.addEventListener('DOMContentLoaded', () =>{
//     console.log('documento cargado')
// })

const form = document.querySelector('#formulario')

const enviarFormulario = (event) => {
    // console.log(event.bubbles)
    event.preventDefault()

    const {name, email, password} = event.target

    console.log(name.value,email.value,password.value,)

    if(name.value.length === 0) alert('el nombre no es valido')
}


form.addEventListener('submit', enviarFormulario)


const section = document.querySelector("#seccion")
const titulo2 = document.querySelector("#titulo2")


titulo2.addEventListener("click", (event) => { 
    console.log(event.bubbles)
    event.stopPropagation()
    console.log('CLICK EN EL TITULO')
})

section.addEventListener('click', (event) => {
    console.log('CLICK EN LA SECCIÓN')
},
{
    capture: true,
})