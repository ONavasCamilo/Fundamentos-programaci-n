// inicializacion de variables
let tarjetasDestapadas = 0
let tarjeta = null
let tarjeta2 = null
let primerResultado = null
let segundoResultado = null
let movimientos = 0
let aciertos = 0
let temporizador = false
let timer = 60
let tiempoRegresivoId = null
let timerInicial = timer

// Apuntando a documento HTML
let mostrarMovimientos = document.getElementById('movimientos')
let mostrarAciertos = document.getElementById('aciertos')
let mostrarTiempo = document.getElementById('t-restante')

let numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
numeros = numeros.sort(() => { return Math.random() - 0.5 })

console.log(numeros)

// Funciones

function contarTiempo(){
    tiempoRegresivoId = setInterval(()=>{
        timer--
        mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`
        if(timer === 0){
            clearInterval(tiempoRegresivoId)
            bloquearTarjetas()
            mostrarAciertos.innerHTML = `Se te acabo el tiempo, aunque lograste acertar ${aciertos} pares 😁`
                mostrarTiempo.innerHTML = `Wow, solo tardaste ${timerInicial - timer} segundos chaval`
                mostrarMovimientos.innerHTML = `En tan solo ${movimientos} intentos`
        }
    },1000)
}

function bloquearTarjetas(){
    for(let i = 0; i <= 15; i++){
        let tarjetaBloqueada = document.getElementById(i)
        tarjetaBloqueada.innerHTML = numeros[i]
        tarjetaBloqueada.disabled = true
    }
}

// Funcion principal

function destapar(id) {
    tarjetasDestapadas++
    console.log(tarjetasDestapadas)

    if(temporizador === false){
        contarTiempo()
        temporizador = true
    }


    if (tarjetasDestapadas === 1) {
        // mostrar el primer numero
        tarjeta = document.getElementById(id)
        primerResultado = numeros[id]
        tarjeta.innerHTML = primerResultado

        // deshabilitar primer boton
        tarjeta.disabled = true

    } else if (tarjetasDestapadas === 2) {
        // mostrar segundo numero
        tarjeta2 = document.getElementById(id)
        segundoResultado = numeros[id]
        tarjeta2.innerHTML = segundoResultado

        // deshabilitar segundo boton
        tarjeta2.disabled = true

        // incrementar movimientos
        movimientos++
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`

        if (primerResultado == segundoResultado) {
            // encerar contador tarjetas destapadas
            tarjetasDestapadas = 0

            // aumentar aciertos
            aciertos++
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`

            if(aciertos === 8){
                clearInterval(tiempoRegresivoId)
                mostrarAciertos.innerHTML = `Felicitaciones, acertaste los ${aciertos} pares 😁`
                mostrarTiempo.innerHTML = `Wow, solo tardaste ${timerInicial - timer} segundos chaval`
                mostrarMovimientos.innerHTML = `En tan solo ${movimientos} intentos`
            }

        }else{
            // mostrar momentaneamente valores y volver a tapar
            setTimeout(()=>{
                tarjeta.innerHTML = ' '
                tarjeta2.innerHTML = ' '

                tarjeta.disabled = false
                tarjeta2.disabled = false
                tarjetasDestapadas = 0
            },1200)
        }
    }
}