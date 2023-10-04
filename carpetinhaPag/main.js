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
let numeros = []

// Apuntando a documento HTML
let mostrarMovimientos = document.getElementById('movimientos')
let mostrarAciertos = document.getElementById('aciertos')
let mostrarTiempo = document.getElementById('t-restante')
let mostrarTitulo = document.getElementById('titulo')
// Apuntando al botón de reinicio
let reinicio = document.getElementById('reiniciar');

function mezclarNumeros(){
  numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
  numeros = numeros.sort(() => { return Math.random() - 0.5 })
  console.log(numeros)
}


// Agregar un evento click al botón de reinicio
reinicio.addEventListener('click', reiniciarJuego);

// Funciones

// Función para reiniciar el juego
function reiniciarJuego() {
  // Restablecer las variables del juego
  tarjetasDestapadas = 0;
  tarjeta = null;
  tarjeta2 = null;
  primerResultado = null;
  segundoResultado = null;
  movimientos = 0;
  aciertos = 0;
  temporizador = false;
  timer = 60;
  clearInterval(tiempoRegresivoId);
  bloquearTarjetas()
  
  mezclarNumeros()
  
  // Restablecer el contenido de los botones
  let botones = document.querySelectorAll('.botones');
  botones.forEach(button => {
    button.innerHTML = '';
    button.disabled = false;
  });
  
  // Restablecer el contenido de las estadísticas
  mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
  mostrarMovimientos.innerHTML = 'Movimientos: 0';
  mostrarAciertos.innerHTML = 'Aciertos: 0';

  // Restablecer el título
  mostrarTitulo.classList.remove('titulo-verde');
  mostrarTitulo.classList.remove('titulo-rojo');
  mostrarTitulo.classList.add('titulo-blanco');
  mostrarTitulo.innerHTML = 'ACIERTA TODOS LOS PARES';
}

mezclarNumeros()

function contarTiempo() {
  tiempoRegresivoId = setInterval(() => {
    timer--
    mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`
    if (timer === 0) {
      clearInterval(tiempoRegresivoId)
      bloquearTarjetas()
      if (aciertos > 3) {
        mostrarTitulo.classList.toggle('titulo-blanco')
        mostrarTitulo.classList.toggle('titulo-rojo')
        mostrarTitulo.innerHTML = `Que lastima, has perdido`
        mostrarAciertos.innerHTML = `Lograste acertar ${aciertos} pares de 8😁`
        mostrarTiempo.innerHTML = `¡Se te acabo el tiempo!`
        mostrarMovimientos = `Realizaste ${movimientos} movimientos`

      } else if (aciertos < 4) {
        mostrarTitulo.innerHTML = `Que lastima, has perdido`
        mostrarTitulo.classList.toggle('titulo-rojo')
        mostrarAciertos.innerHTML = `Ponle algo de ganas, tuviste ${aciertos} aciertos de 8`
        mostrarTiempo.innerHTML = `¡Se te acabo el tiempo!`
        mostrarMovimientos = `Realizaste ${movimientos} movimientos`

      }
    }
  }, 700)
}


function bloquearTarjetas() {
  for (let i = 0; i <= 15; i++) {
    let tarjetaBloqueada = document.getElementById(i)
    tarjetaBloqueada.innerHTML = numeros[i]
    tarjetaBloqueada.disabled = true
  }
}

// Funcion principal

function destapar(id) {
  tarjetasDestapadas++
  // console.log(tarjetasDestapadas)

  if (temporizador === false) {
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

      if (aciertos === 8) {
        clearInterval(tiempoRegresivoId)
        mostrarAciertos.innerHTML = `Felicitaciones, acertaste los ${aciertos} pares 😁`
        mostrarTiempo.innerHTML = `Wow, solo tardaste ${timerInicial - timer} segundos chaval`
        mostrarMovimientos.innerHTML = `En tan solo ${movimientos} intentos`
        mostrarTitulo.classList.toggle('titulo-blanco')
        mostrarTitulo.classList.toggle('titulo-verde')
        mostrarTitulo.innerHTML = `!Acertaste TODOS!`
      }

    } else {
      // mostrar momentaneamente valores y volver a tapar
      setTimeout(() => {
        tarjeta.innerHTML = ' '
        tarjeta2.innerHTML = ' '

        tarjeta.disabled = false
        tarjeta2.disabled = false
        tarjetasDestapadas = 0
      }, 950)
    }
  }
}