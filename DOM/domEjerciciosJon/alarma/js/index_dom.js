import responsiveMedia from "./objeto_responsive.js"
import { digitalClock, alarm } from "./reloj.js"

const d = document

d.addEventListener("DOMContentLoaded", (e) => {
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj")
    alarm("assets/sound.wav", "#activar-alarma", "#desactivar-alarma")
    responsiveMedia(
        "youtube",
     "(min-width: 1024px",
      "Contenido Móvil",
       "Contenido Escritorio"
       )
       responsiveMedia(
        "gmaps",
     "(min-width: 1024px",
      "Contenido Móvil",
       "Contenido Escritorio"
       )
})