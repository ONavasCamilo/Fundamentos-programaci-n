let veces = 0


const contador = document.querySelector("#boton")
const textoCambiado = document.querySelector('#contador')

contador.addEventListener("click", () => {
    veces++
    textoCambiado.innerHTML = `has oprimido ya ${veces} vez por favor detente antes de que..`
})