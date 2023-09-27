// document

// getElementById() selecciona un elemento por ID
// getElementByTagName() selecciona todos los elementos que coincidan con el nombre de la etiqueta especifica
// querySelector() devuelve el primer elemento que coincida con el grupo especificado de selectores
// querySelectorAll() devuelte todos los elementos que coincidan con el grupo especificado de selectores

// METODOS PARA DEFINIR , OBTENER, ELIMINAR ATRIBUTOS 

// setAttribute() modificar el valor de un atributo
// getAttribute() obtiene el valor de un atributo
// removeAttribute() remueve el valor de un atributo


// const titulom = document.querySelector(".titulo")
// titulom.setAttribute("contentEditable", "true") 



// titulo.style.padding =  '30px

// titulo.style.backgroundColor = '#48e'


// METODOS DE CLASSLIST
// const titulo = document.querySelector('.titulo')

// let valor = titulo.classList.item(2)


// CONTAINS
// const titulo = document.querySelector('.titulo')


// nombreDeClase = 'grandeeee'
//     let valor = titulo.classList.contains(nombreDeClase)

//     if(valor){
//         document.write(`la clase "${nombreDeClase}" existe`)
//         titulo.classList.remove(nombreDeClase)
//     }else{
//         document.write(`la clase "${nombreDeClase}" no existe`)
//         titulo.classList.add(nombreDeClase)
//     }


// TOGGLE ES UN METODO QUE NOS PERMITE AHORRARNOS LO DE ARRIBA

// const titulo = document.querySelector(".titulo")

// nombreDeClase = 'grande'
// let valor = titulo.classList.contains(nombreDeClase)

// titulo.classList.toggle('grande')


// const titulo = document.querySelector(".titulo")
// //                                                      solo cambia cuando textoABuscar encuentra similitud
// let valor = titulo.classList.replace('textoABuscar','textoACambiar')

// document.write(valor)



// const titulo = document.querySelector(".titulo")

// let resultado = titulo.textContent

// document.write(resultado)


// const contenedor = document.querySelector('.contenedor')

// const item = document.createElement('LI')

// const textoDelItem = document.createTextNode('Este es un item de la lista')
// item.appendChild(textoDelItem)

// console.log(textoDelItem)


// const contenedor = document.querySelector('.contenedor')

// for(i = 0; i<20; i++){
//     const item = document.createElement('LI')
//     item.innerHTML = 'Este es un item de la lista'
//     contenedor.appendChild(item)
// }

// console.log(item)


// PARA EVITARNOS LO DE ARRIBA USAMOS createDocumentFragment()



// const contenedor = document.querySelector('.contenedor')

// const fragmento = document.createDocumentFragment()

// for(i = 0; i<20; i++){
//     const item = document.createElement('LI')
//     item.innerHTML = 'Este es un item de la lista'
//     fragmento.appendChild(item)
// }

// contenedor.appendChild(fragmento)

// const contenedor = document.querySelector('.contenedor')

// SE DEBEN QUITAR ESPACIOS SI O SI
// const primerHijo = contenedor.firstChild
// const primerHijo = contenedor.lastChild

// console.log(primerHijo)


// NO SE DEBEN QUITAR ESPACIOS

// const contenedor = document.querySelector('.contenedor')

// const primerHijo = contenedor.firstElementChild
// const primerHijo = contenedor.lastElementChild

// console.log(primerHijo)

// const contenedor = document.querySelector('.contenedor')


// const todosHijos = contenedor.childNodes

// console.log(todosHijos)

const contenedor = document.querySelector('.contenedor')

const parrafo = document.createElement('P').innerHTML = 'Parrafo'
const h2_nuevo = document.createElement('H2')

const h2_antiguo = document.querySelector('h2')

console.log(contenedor.parentElement)