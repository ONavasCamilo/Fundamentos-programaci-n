const input = document.querySelector('.boton')
const contenedor = document.querySelector('.contenedor')
const contenedor1 = document.querySelector('.contenedor-1')


input.addEventListener('select', (e)=>{
    let start =  e.target.selectionStart
    let end = e.target.selectionEnd
    let textoCompleto = input.value
    contenedor1.innerHTML = textoCompleto.substring(start, end)
})








// boton.addEventListener('click', saludar)

// function saludar(){
//     alert('hola')
//     boton.removeEventListener('click', saludar)
// }


// CONTENEDOR PADRE
// contenedor1.addEventListener('click', (e)=>{
//     alert('diste click en contenedor1 rojo')
//  },true)  // true hace que se ejecute primero


// function callbackBoton(){
//     alert('click contenedor azul, tmb me detengo we')
//     contenedor.removeEventListener('click', callbackBoton)
// } 

// contenedor.addEventListener('click', callbackBoton)

// boton.addEventListener('click', (e)=>{
// alert('diste click en boton')
// e.stopPropagation()
// })




// function callback(){
//     alert('solo una vez ez con callback papa')
//     contenedor.removeEventListener('click', callback)
// }
// contenedor.addEventListener('click', callback)



