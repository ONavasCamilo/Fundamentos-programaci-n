// Quiero que crees un sencillo juego del tipo "adivina el número". Se debe elegir un número aleatorio entre 1 y 100, 
// luego desafiar al jugador a adivinar el número en 10 intentos. Después de cada intento, debería decirle al jugador si ha 
// acertado o no — y si está equivocado, debería decirle si se ha quedado corto o se ha pasado. También debería decir los números 
// que ya se probaron anteriormente. El juego terminará una vez que el jugador acierte o cuando se acaben los intentos. 
// Cuando el juego termina, se le debe dar al jugador la opción de volver a jugar.



// Generar un número aleatorio entre 1 y 100.


function numAleatorio(){
    return Math.floor(Math.random() * 100) +1
}

// console.log(numAleatorio())

// Registrar el número del intento en el que el jugador se encuentre. Empezando en 1.
    
let intento = 0

// Darle al jugador una forma de adivinar cuál es el número.
// cuerpo hecho. puedes poner tu numero en la pagina html


//  Una vez que se ha introducido el número, registrarlo en alguna parte para que el jugador pueda ver sus intentos previos.


// TODO ESTO SE PUEDE EVITAR CON EL FORMATO A CONTINUACIAO
// let enviado = document.getElementById('enviado')
// let caja = document.getElementById('caja')

// enviado.addEventListener('click', true)

// function alerta(){
//     if(enviado){
//         alert('s')
//     }
// }

window.addEventListener('load', function(){
    this.document.getElementById('enviado').addEventListener('click', function(){
        intento +=1

    })
    this.document.getElementById('texto-fallo')
})
