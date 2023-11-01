import { boton, contenedor, tarea, agregado, contenedorTareas } from './const'

let numTaActual = 0
let numTaPendiente = 0
let numTaHecha = 0
let aviso = null

boton.addEventListener('click', () => {
  if (tarea.value === '') {
    mostrarAviso('¡Debes escribir una tarea!')
    return
  }
  oprimirBoton()
  agregarNumTareas()
})

const agregarNumTareas = () => {
  numTaActual++
  numTaPendiente++
  actualizarNumTareas()
}

const agregarNumHechas = () => {
  numTaHecha++
  numTaPendiente--
  actualizarNumTareas()
}

const quitarNumHecho = () => {
  numTaHecha--
  numTaPendiente++
  actualizarNumTareas()
}

function removerNumTareas (tareaNueva, puedeModificarTexto) {
  tareaNueva.remove()

  if (puedeModificarTexto) {
    numTaActual--
    numTaPendiente--
    actualizarNumTareas()
    if (numTaActual === 0) contenedorTareas.innerHTML = `<span class="tareas__tarea" id="tareas__pendiente">Sin tareas actuales</span>`
  } else {
    numTaActual--
    numTaHecha--
    actualizarNumTareas()
    if (numTaActual === 0) contenedorTareas.innerHTML = `<span class="tareas__tarea" id="tareas__pendiente">Sin tareas actuales</span>`
  }
}

const actualizarNumTareas = () => {
  contenedorTareas.innerHTML = `
  <span class="tareas__tarea" id=" tareas__actual">Tareas totales: ${numTaActual}</span>
  <span class="tareas__tarea" id="tareas__pendiente">Tareas pendientes: ${numTaPendiente}</span>
  <span class="tareas__tarea" id="tareas__hechas">Tareas hechas: ${numTaHecha}</span>
  `
}

const createElementWithClass = (elementType, className) => {
  const element = document.createElement(elementType)
  if (Array.isArray(className)) {
    element.classList.add(...className)
  } else if (className) {
    element.classList.add(className)
  }
  return element
}

const appendChildren = (parent, children) => {
  if (Array.isArray(children)) {
    children.forEach(child => {
      parent.appendChild(child)
    })
  } else if (children) {
    parent.appendChild(children)
  }
}

function oprimirBoton () {
  let puedeModificarTexto = true

  const tareaNueva = createElementWithClass('div', 'agregados__agregar')
  const tareaSpan = createElementWithClass('span', 'agregados__parrafo')
  const iconos = createElementWithClass('div', 'agregados__iconos')
  const basurero = createElementWithClass('i', ['fa-solid', 'fa-bomb', 'agregados__basura', 'agregados__icono'])
  const hecho = createElementWithClass('i', ['fa-solid', 'fa-check', 'agregados__hecho', 'agregados__icono'])
  const deshecho = createElementWithClass('i', ['fa-solid', 'fa-xmark', 'agregados__deshecho', 'agregados__icono'])
  const lapiz = createElementWithClass('i', ['fa-solid', 'fa-pen', 'agregados__lapiz', 'agregados__icono'])
  const flecha = createElementWithClass('i', ['fa-solid', 'fa-share', 'agregados__flecha', 'agregados__icono'])
  const input = createElementWithClass('input', 'agregados__input--modificar')

  appendChildren(contenedor, tareaNueva)
  appendChildren(tareaNueva, [tareaSpan, iconos])
  appendChildren(iconos, [lapiz, hecho, basurero])

  input.setAttribute('type', 'text') // le damos atributos
  input.setAttribute('placeholder', 'Modifica tu tarea')
  input.setAttribute('value', tarea.value) // aparecerá con el nombre de la tarea que tenia

  tareaSpan.textContent = tarea.value // agarramos el div creado y escribiremos adentro el valor del input que dio el usuario

  input.addEventListener('input', (event) => {
    tareaSpan.textContent = event.target.value // Actualiza el contenido de spanNuevo con el valor del input
    // event.target.value representa el valor actual del input después de que el usuario ha escrito algo

    // const inputValue = input.value;
    // spanNuevo.innerHTML = inputValue;          // otra forma de hacerlo si deseas guardar el valor en constante
  })

  function cambiarTexto () {
    if (puedeModificarTexto) {
      tareaSpan.remove()
      tareaNueva.insertBefore(input, iconos) // primero el que luego detrás que
      hecho.remove()
      basurero.remove()
      lapiz.remove()
      appendChildren(iconos, flecha)
      input.focus() // hará que se centre en el input
      input.setSelectionRange(input.value, input.value.length) // puntero desde el inicio hasta el final del texto, seleccionando todo
      flecha.addEventListener('click', () => {
        flecha.remove()
        input.remove()
        appendChildren(iconos, [lapiz, hecho, basurero])
        tareaNueva.insertBefore(tareaSpan, iconos)// primero el que luego detrás que
        // tareaSpan.textContent = inputValue
      })
    }
  }

  tareaNueva.addEventListener('click', (event) => {
    const target = event.target

    if (target.classList.contains('agregados__parrafo')) {
      cambiarTexto()
    } else if (target.classList.contains('agregados__basura')) {
      removerNumTareas(tareaNueva, puedeModificarTexto)
      actualizarNumTareas()
    } else if (target.classList.contains('agregados__hecho')) {
      hecho.remove()
      lapiz.remove()
      tareaNueva.classList.replace('agregados__agregar', 'agregados__realizado')
      tareaSpan.classList.add('agregados__parrafo--realizado')
      basurero.classList.add('agregados__icono--select')
      deshecho.classList.add('agregados__icono--select')
      iconos.insertBefore(deshecho, basurero)
      puedeModificarTexto = false
      agregarNumHechas()
    } else if (target.classList.contains('agregados__deshecho')) {
      deshecho.remove()
      tareaNueva.classList.remove('agregados__realizado')
      tareaSpan.classList.remove('agregados__parrafo--realizado')
      basurero.classList.remove('agregados__icono--select')
      lapiz.classList.remove('agregados__icono--select')
      tareaNueva.classList.add('agregados__agregar')
      iconos.insertBefore(hecho, basurero)
      iconos.insertBefore(lapiz, hecho)
      puedeModificarTexto = true
      quitarNumHecho()
    } else if (target.classList.contains('agregados__lapiz')) cambiarTexto()
  })

  tarea.value = ''
}

function mostrarAviso (msj) {
  if (aviso) {
    // si ya hay aviso -
    clearTimeout(aviso.timeoutId) // el contador reinicia
    aviso.textContent = msj //  y actualizamos el contenido al mismo
  } else {
    aviso = document.createElement('p')
    aviso.classList.add('agregados__aviso')
    aviso.textContent = msj
    agregado.insertBefore(aviso, boton)
  }
  aviso.timeoutId = setTimeout(() => {
    aviso.remove() // se elimina
    aviso = null // vuelve a su valor de null pq se elimino
  }, 2500)
}
