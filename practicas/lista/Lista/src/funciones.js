import { agregado, boton } from './const.js'

let aviso = null

export default function mostrarAviso (msj) {
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
