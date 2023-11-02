// CREAR NODOS

const parrafoExtra = document.createElement('p')
const parrafoCero = document.createElement('p')
const parrafoCuatro = document.createElement('p')
const textoParrafoCuatro = document.createTextNode('parrafo 4')
const parrafoCinco = document.createElement('p')
parrafoCinco.innerHTML = 'parrafo cinco'
parrafoCero.innerHTML = 'parrafo 0'
parrafoExtra.innerHTML = 'parrafo exTraEXtrA'

// selecionar elemento padre

const elementoPadre = document.querySelector('.padre')

// Seleccion hijo referencia

const parrafoUno = document.querySelector('p')
const parrafoDos = document.querySelector('#parrafo2')

// AGREGAR NODOS


// elementoPadre.appendChild(parrafoCuatro)
parrafoCuatro.appendChild(textoParrafoCuatro)
// elementoPadre.appendChild(parrafoCinco)

elementoPadre.append(parrafoCuatro, parrafoCinco)
elementoPadre.insertBefore(parrafoCero, parrafoDos)

// elementoPadre.insertAdjacentElement('beforebegin', parrafoExtra)  // SE VE POR ATRAS DEL PADRE 

// elementoPadre.insertAdjacentElement('afterbegin', parrafoExtra) // SE VE ADENTRO DEL PADRE PRIMER ELEMENTO

// elementoPadre.insertAdjacentElement('beforeend', parrafoExtra) // SE PONDRA COMO HIJO ANTES DE LA ETIQUETA DE CIERRE

elementoPadre.insertAdjacentElement('afterend', parrafoExtra) // SE PONE NO COMO HIJO DESPUES DE LA ETIQUETA DE CIERRA
 


// ATRIBUTOS

parrafoExtra.setAttribute('class', 'parrafos')


// PARA ELIMINAR SIGUIENTE VIDIO:

// ----------------------------------------------

// seleccionar nodo padre

const parrafoAEliminar = document.querySelector('#parrafo1')
const parrafoAEliminar2 = document.querySelector('#parrafo2')
const parrafo3 = document.querySelector('#parrafo3')

// removeChild

elementoPadre.removeChild(parrafoAEliminar)

// remove

parrafoAEliminar2.remove()

// replaceChild

elementoPadre.replaceChild(parrafoCuatro, parrafo3)


// EVENT LISTENER

parrafoCuatro.addEventListener('click', ()=>{
    parrafoCuatro.innerHTML = 'nuevo textin'
})