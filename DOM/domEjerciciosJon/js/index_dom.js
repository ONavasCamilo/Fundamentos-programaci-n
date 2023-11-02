import { digitalClock, alarm } from "./reloj.js"

const d = document

d.addEventListener("DOMContentLoaded", (e) => {
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj")
    alarm("assets/sound.wav", "#activar-alarma", "#desactivar-alarma")
})