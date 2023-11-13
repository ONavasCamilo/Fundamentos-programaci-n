// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) 
// o no, pe. miFuncion(7) devolverá true.


function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

// Ejemplo de uso
// let numero = 7; // Cambia este valor para verificar si otro número es primo
// if (esPrimo(numero)) {
//     console.log(`${numero} es un número primo.`);
// } else {
//     console.log(`${numero} no es un número primo.`);
// }


// ------------------------------


const numeroPrimo = (numero = undefined) =>  {
    if (!numero === undefined) return console.log('no ingresaste el numero')

    if (typeof numero !== "number") return console.log(`debes ingresar un número, el valor: "${numero}" no es un número.`)

    if (numero === 0) return console.log('el numero no puede ser 0')

    if (numero === 1) return console.log('el numero no puede ser 1')

    if(Math.sign(numero) === -1) return console.log(`el numero no puede ser negativo. ${numero} lo es.`)

    let divisible = false

    for(let i = 2; i < numero ; i++){
        if((numero % i) === 0) {
            divisible = true
            break;
        }
    }
    return (divisible)
    ? console.log(`el numero ${numero} NO es primo`)
    : console.log(`el numero ${numero} SI es primo`)

}

// numeroPrimo(13)







// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.


const parImpar = (num = undefined) => {

    if(!num === undefined) return console.log('ingresa un numero pelotudo')

    if (typeof num !== 'number') return console.log(`El valor proporcionado: "${num}" NO es un número.`)

    return (num % 2) === 0
    ? console.log('es numero par') 
    : console.log('numero impar')
}

// parImpar()

// --------------------------------------

const parImpa = (num) => {
    if (!num) return console.log('Ingresa un número.');

    num = parseInt(num);

    if (isNaN(num)) return console.log(`El valor proporcionado: "${num}" NO es un número.`);

    return (num % 2 === 0)
        ? console.log('Es un número par.')
        : console.log('Es un número impar.');
}

// parImpa('3'); // Salida: 'Es un número impar.'





// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C")
//  devolverá 32°F.

function convertirGrados(grados = 0, temp = ""){
    if(temp === 'C' || temp === 'c'){
        //convertimos de celsius a fahrenheit
        let fahrenheit = (grados * 9/5) + 32
        console.log(`${fahrenheit}°F`)
    }else if (temp === 'F' || temp === 'f') {
        // convertimos de fahrenheit a celsius 
        let celsius = (grados - 32) * 5/9
        console.log(`${celsius}°C`)
    }else{
        console.log('Tipo de temperatura no valido carnal')
    }
}

// convertirGrados(0, 'c')

// ------------------------------------------------

const convertiGrados = (grados = undefined, unidad = undefined) => {
    if(grados === undefined) return console.log('no ingresaste grados a convertir')

    if (typeof grados !== "number") return console.log(`El valor "${grados}" ingresado, NO es un número`)

    if (unidad === undefined) return console.log('no ingresaste el tipo de grado a convertir')

    if (typeof unidad !== "string") return console.log(`el valor "${unidad}" ingresado, NO es la unidad. Introduce c o f`)

    if (unidad.length !== 1 || !/(C|F|c|f)/.test(unidad)) return console.log('valor de unidad no reconocido')

    if (unidad === "C" || unidad === "c"){
        return console.log(`${grados}°C = ${Math.round((grados * (9 / 5)) + 32)}°F`)
    }else if(unidad === "F" || unidad === "f"){
        return console.log(`${grados}°F = ${Math.round((grados - 32) * (5 / 9))}°C`)
    } else {
        return console.log('el tipo de grados a convertir NO es valido')
    }

// console.log('nice cabronsote')
}

convertiGrados(23, 'F')