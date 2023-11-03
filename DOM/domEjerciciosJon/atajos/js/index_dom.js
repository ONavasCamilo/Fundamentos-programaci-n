import scrollTopButton from "./boton_scroll.js"
import countdown from "./cuenta_regresiva.js"
import { moveBall, shortcuts } from "./teclado.js"
import darkTheme from "./tema_oscuro.js"

let d = document

d.addEventListener("DOMContentLoaded", (e) => {
    countdown("countdown", "Feb 06, 2024 00:00:00", "Feliz cum!")
    // scrollTopButton(".scroll-top-btn")
})

d.addEventListener('keydown', (e) => {
    // shortcuts(e)
    // moveBall(e, ".ball", ".stage")
})

darkTheme(".dark-theme-btn", "dark-mode")
