import { boton, contenedor, tarea, tareasActual, tareasPendientes, tareasHechas, agregado, SIN_TAREAS_TEXTO, contenedorTareas } from './const'

let aviso = null

let numTaActual = 0
let numTaPendiente = 0
let numTaHecha = 0

boton.addEventListener('click', () => {
  if (tarea.value === '') {
    mostrarAviso('¡Debes escribir una tarea!')
    return
  }
  oprimirBoton()
  agregarNumTareas()
})

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

function agregarNumTareas () {
  numTaActual++
  numTaPendiente++
  contenedorTareas.innerHTML = `
  <span class="tareas__tarea" id=" tareas__actual">Tareas totales: ${numTaActual}</span>
  <span class="tareas__tarea" id="tareas__pendiente">Tareas pendientes: ${numTaPendiente}</span>
  <span class="tareas__tarea" id="tareas__hechas">Tareas hechas: ${numTaHecha}</span>
  `
}

function removerNumTareasHechas (tareaNueva, puedeModificarTexto) {
  tareaNueva.remove()

  if (puedeModificarTexto) {
    numTaActual--
    numTaPendiente--
    if (numTaActual <= 1) {
      tareasActual.innerHTML = `Total: ${numTaActual}`
    } else {
      tareasActual.innerHTML = `Totales: ${numTaActual}`
    }
    if (numTaPendiente <= 1) {
      tareasPendientes.innerHTML = `Pendiente: ${numTaPendiente}`
    } else {
      tareasPendientes.innerHTML = `Pendientes: ${numTaPendiente}`
    }
    if (numTaActual === 0) {
      tareasActual.innerHTML = ''
      tareasPendientes.classList.add('tareas__pendientes', 'tareas__tarea')
      tareasPendientes.innerHTML = SIN_TAREAS_TEXTO
      tareasHechas.innerHTML = ''
    }
    return
  }

  numTaActual--
  numTaHecha--
  if (numTaHecha <= 1) {
    tareasActual.innerHTML = `Total: ${numTaActual}`
    tareasHechas.innerHTML = `Finalizado: ${numTaHecha}`
  } else {
    tareasActual.innerHTML = `Totales: ${numTaActual}`
    tareasHechas.innerHTML = `Finalizados: ${numTaHecha}`
  }
  if (numTaActual === 0) {
    tareasActual.innerHTML = ''
    tareasPendientes.classList.add('tareas__pendientes', 'tareas__tarea')
    tareasPendientes.innerHTML = SIN_TAREAS_TEXTO
    tareasHechas.innerHTML = ''
  }
}

function agregarNumHechas () {
  numTaHecha++
  numTaPendiente--
  if (numTaHecha <= 1) {
    tareasHechas.innerHTML = `Finalizado: ${numTaHecha}`
    tareasPendientes.innerHTML = `Pendiente: ${numTaPendiente}`
  } else {
    tareasHechas.innerHTML = `Finalizados: ${numTaHecha}`
    tareasPendientes.innerHTML = `Pendientes: ${numTaPendiente}`
  }
}

function numDeshecho () {
  numTaHecha--
  numTaPendiente++
  if (numTaHecha <= 1) {
    tareasHechas.innerHTML = `Finalizado: ${numTaHecha}`
    tareasPendientes.innerHTML = `Pendiente: ${numTaPendiente}`
  } else {
    tareasHechas.innerHTML = `Finalizado: ${numTaHecha}`
    tareasPendientes.innerHTML = `Pendientes: ${numTaPendiente}`
  }
  if (numTaHecha === 0) {
    tareasHechas.innerHTML = ''
  }
}

function oprimirBoton () {
  let puedeModificarTexto = true

  const tareaNueva = document.createElement('div') // se crea nodo tipo elemento div para usarlo y luego hacer que aparezca al dar click
  const tareaSpan = document.createElement('span') // se crea nodo tipo parrafo para ordenar texto dado por usuario
  const iconos = document.createElement('div') // se crea div para organizar iconos
  const basurero = document.createElement('i') // se crea nodo tipo elemento icono
  const hecho = document.createElement('i') // se crea nodo para el check
  const deshecho = document.createElement('i')
  const lapiz = document.createElement('i')
  const flecha = document.createElement('i')
  const input = document.createElement('input')

  tareaNueva.classList.add('agregados__agregar') // se crea clase al elemento creado para modificar css
  tareaSpan.classList.add('agregados__parrafo')
  iconos.classList.add('agregados__iconos') // se crea clase para modificar div iconos
  basurero.classList.add(
    'fa-solid',
    'fa-bomb',
    'agregados__basura',
    'agregados__icono'
  ) // se crean las clases para el nodo - icono de biblioteca y estilo
  hecho.classList.add(
    'fa-solid',
    'fa-check',
    'agregados__hecho',
    'agregados__icono'
  ) // se crean clases para icono check
  deshecho.classList.add(
    'fa-solid',
    'fa-xmark',
    'agregados__deshecho',
    'agregados__icono'
  )
  lapiz.classList.add(
    'fa-solid',
    'fa-pen',
    'agregados__lapiz',
    'agregados__icono'
  )
  flecha.classList.add(
    'fa-solid',
    'fa-share',
    'agregados__flecha',
    'agregados__icono'
  )
  input.classList.add('agregados__input--modificar') // clase para el input

  input.setAttribute('type', 'text') // le damos atributos
  input.setAttribute('placeholder', 'Modifica tu tarea')
  input.setAttribute('value', tarea.value) // aparecerá con el nombre de la tarea que tenia

  tareaSpan.innerHTML = tarea.value // agarramos el div creado y escribiremos adentro el valor del input que dio el usuario

  basurero.addEventListener('click', () => removerNumTareasHechas(tareaNueva, puedeModificarTexto))

  input.addEventListener('input', (event) => {
    tareaSpan.innerHTML = event.target.value // Actualiza el contenido de spanNuevo con el valor del input
    // event.target.value representa el valor actual del input después de que el usuario ha escrito algo

  // const inputValue = input.value;
  // spanNuevo.innerHTML = inputValue;          // otra forma de hacerlo si deseas guardar el valor en constante
  })

  tareaSpan.addEventListener('click', () => {
    cambiarTexto()
  })
  lapiz.addEventListener('click', () => {
    cambiarTexto()
  })

  function cambiarTexto () {
    if (puedeModificarTexto) {
      tareaSpan.remove()
      tareaNueva.insertBefore(input, iconos) // primero el que luego detrás que
      hecho.remove()
      basurero.remove()
      lapiz.remove()
      iconos.appendChild(flecha)
      input.focus() // hará que se centre en el input
      input.setSelectionRange(input.value, input.value.length) // puntero desde el inicio hasta el final del texto, seleccionando todo
      flecha.addEventListener('click', () => {
        flecha.remove()
        iconos.appendChild(lapiz)
        iconos.appendChild(hecho)
        iconos.appendChild(basurero)
        input.remove()
        tareaNueva.insertBefore(tareaSpan, iconos)
        // tareaSpan.innerHTML = inputValue
      })
    }
  }

  hecho.addEventListener('click', () => {
  // evento CHECK cambiar tarea
    hecho.remove()
    lapiz.remove()
    tareaNueva.classList.remove('agregados__agregar') // se elimina clase estilo
    tareaNueva.classList.add('agregados__realizado') // se da clase nueva
    tareaSpan.classList.add('agregados__parrafo--realizado')
    basurero.classList.add('agregados__icono--select')
    deshecho.classList.add('agregados__icono--select')
    iconos.insertBefore(deshecho, basurero)
    puedeModificarTexto = false
    agregarNumHechas()
  })

  deshecho.addEventListener('click', () => {
    deshecho.remove()
    tareaNueva.classList.remove('agregados__realizado')
    tareaSpan.classList.remove('agregados__parrafo--realizado')
    basurero.classList.remove('agregados__icono--select')
    lapiz.classList.remove('agregados__icono--select')
    tareaNueva.classList.add('agregados__agregar')
    iconos.insertBefore(hecho, basurero)
    iconos.insertBefore(lapiz, hecho)
    puedeModificarTexto = true
    numDeshecho()
  })

  contenedor.appendChild(tareaNueva) // hacemos que la tarea nueva sea hijo del contenedor
  tareaNueva.appendChild(tareaSpan) // hacemos que el parrafo sea hijo de contenedor creado
  tareaNueva.appendChild(iconos) //  se agrega iconos como hijo del div
  iconos.appendChild(lapiz) // se situa primero el patrón
  iconos.appendChild(hecho) // icono check al div de iconos
  iconos.appendChild(basurero) // icono basura al div de iconos
  tarea.value = '' // devuelve input vacio
}
