// 5) Programa una función que invierta las palabras de una cadena de texto,
//  pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertirCadena = (cadena = "") =>
    console.log(cadena.split('').reverse().join(' '))

// invertirCadena('gel')


// ----------------------------------------------------------------------------

const invertCadena = (cadena = "") =>
(!cadena)
? console.log('no ingresaste cadena d texto')
: console.log(cadena.split('').reverse().join(''))

// invertCadena('hola')











// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
// pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.


function contarNumRep(texto, palabra) {
    let frase = texto.split(' ')
    let contador = 0

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === palabra) {
            contador++
        }
    }
    console.log(contador)
}

// contarNumRep('hoa ke tal tal', 'tal')

// ---------------------------------------------------------------------

// CON FUNCION FLECHA 

const contarPalabrasEnTexto = (texto, palabra) => {
    // Utilizando el método split() para dividir el texto en palabras
    const palabras = texto.split(' ');

    // Utilizando reduce() para contar las ocurrencias de la palabra específica
    const contador = palabras.reduce((acumulador, palabraActual) => {
        if (palabraActual === palabra) {
            return acumulador + 1;
        }
        return acumulador;
    }, 0);

    // Devolver el contador de ocurrencias
    return contador;
};

// Ejemplo de uso
const resultado = contarPalabrasEnTexto("hola mundo adios mundo", "mundo");
// console.log(resultado);  // Esto imprimirá: 2



// ----------------------------------------------------------------------------



const textoEnCadena = (cadena = "", texto = "") => {
    if (!cadena) return console.log('no ingresaste el texto')

    if (!texto) return console.log('no ingresaste la palabra a a evaluar')

    let i = 0;
    contador = 0;

    while (i !== -1){
        i= cadena.indexOf(texto, i)
        if(i !== -1){
        i++
        contador++
    }
}
    return console.log(`la palabra ${texto} se repite ${contador} veces`)
}



// textoEnCadena('joder tio joder', 'joder')

















// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro),
// pe. mifuncion("Salas") devolverá true.


function esPalindromo(palabra) {
    // Convierte la palabra a minúsculas y elimina espacios y signos de puntuación
    const textoNormalizado = palabra.toLowerCase().replace(/[^a-z]/g, '');

    // Invierte la palabra normalizada y compara con la palabra original
    const textoInvertido = textoNormalizado.split('').reverse().join('');

    // Compara si el texto normalizado es igual al texto invertido
    return textoNormalizado === textoInvertido;
}

// Ejemplo de uso
// console.log(esPalindromo("Salas"));  // Esto imprimirá: true
// console.log(esPalindromo("Anita lava la tina"));  // Esto imprimirá: true
// console.log(esPalindromo("Hola"));  // Esto imprimirá: false

// ----------------------------------------------------------------

// SIN EXPRESION REGULAR

function esPalindromo(palabra) {
    // Convierte la palabra a minúsculas y elimina espacios y signos de puntuación
    palabra = palabra.toLowerCase().replace(/[^a-z]/g, '');

    // Calcula la longitud de la palabra
    const longitud = palabra.length;

    // Compara los caracteres desde el principio y el final hacia el centro
    for (let i = 0; i < Math.floor(longitud / 2); i++) {
        if (palabra[i] !== palabra[longitud - 1 - i]) {
            // Si los caracteres no coinciden, no es un palíndromo
            return false;
        }
    }

    // Si todos los caracteres coinciden, es un palíndromo
    return true;
}

// Ejemplo de uso
// console.log(esPalindromo("Salas"));  // Esto imprimirá: true
// console.log(esPalindromo("Anita lava la tina"));  // Esto imprimirá: true
// console.log(esPalindromo("Hola"));  // Esto imprimirá: false








// ----------------------------------------------------------------------------


 const palindromo = (palabra = "") => {
    if (!palabra) return console.log('no ingresaste una palabra o frase')

    palabra = palabra.toLowerCase()
    let alReves = palabra.split('').reverse().join('')

    return (palabra === alReves)
    ? console.log(`Sí es palíndromo, Palabra original: "${palabra}", Palabra al revés: "${alReves}"`)
    : console.log(`No es palíndromo, Palabra original: "${palabra}", Palabra al revés: "${alReves}"`)
 }

//  palindromo('xx')
















// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
// pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.


const eliminarCaracteres = (texto = "", patron = "") =>
(!texto)
? console.log('no ingresaste un texto')
: (!patron)
? console.log('no ingresas un patron de caracteres')
: console.log(texto.replace(new RegExp(patron, "ig"), ""))

eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")
eliminarCaracteres('lorem caral arturo fernanzdez efecir cmike ke dkfef', '[a-z]')
// EXPRESION REGURAL ELIMINA DE LA A a la Z