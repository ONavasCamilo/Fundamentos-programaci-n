// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

const numCaracteres = (cd) => {
    return cd.length
}

// console.log(numCaracteres('olaa'))


// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const textoRecortado = (cd, num) => {
    return cd.slice(0, num)
}

// console.log(textoRecortado('hola mundo', 6))


// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

// const strSeparado = (str, sep) => {
//     return str.join(sep)
// }

// console.log(strSeparado(['hola', 'que' ,'tal'], ' '))

const strSeparado = (str, sep) => {
    return str.split(sep)
}

// console.log(strSeparado('hola que tal', ' '))

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const repetirTxt = (txt, num) => {
    let txtRepetido = ''
    for (let i = 0; i < num; i++) {
        txtRepetido += txt + ' '
    }
    return txtRepetido
}

// console.log(repetirTxt('Hola mundo', 3))

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertirCadena = (cadena) => {
    let cdDevuelta = cadena.split('').reverse().join('')
    return cdDevuelta
}


// console.log(invertirCadena('ola'))


// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const repetida = (frase, palabra) => {
    let resultado = 0
    let fraseArr = frase.split(' ')
    for (let i = 0; i < fraseArr.length; i++) {
        if (fraseArr[i] === palabra) resultado += 1
    }
    return resultado
}

// console.log(repetida('ola ola feliz ola', 'ola'))

const palabraRepetida = (frase, palabra) => {
    let resultado = 0
    let fraseMinuscula = frase.toLowerCase()
    let palabraMinuscula = palabra.toLowerCase()
    let fraseArr = fraseMinuscula.split(' ')
    for (let i = 0; i < fraseArr.length; i++) {
        if (fraseArr[i] === palabraMinuscula) resultado += 1
    }
    return resultado
}

// console.log(palabraRepetida('nice nICe Nice ola', 'nice'))

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palindromo = (palabra) => {
    let palabraInvertida = palabra.split('').reverse().join('')
    if (palabraInvertida === palabra) return `La palabra "${palabra}" se lee de igual manera al revés: ${palabraInvertida}. Es palíndroma`
    return `La palabra "${palabra}" al revés sería "${palabraInvertida}". Por lo que no es palíndroma`
}

// console.log(palindromo('gag'))



// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.


const eliminarPatron = (cadena, patron) => {
    return cadena.replace(new RegExp(patron, "ig"), "")
}

// console.log(eliminarPatron('cadena cadrota', 'cadena'))

// let textoConNumeros = "Hoy es 12/11 noviembre de 2023"
// let textoSinNumeros = textoConNumeros.replace(/[\d\/]/g, '')
// console.log(textoSinNumeros)

const eliminarCaracteres = (texto = "", patron = "") =>
(!texto)
? console.log('no ingresaste un texto')
: (!patron)
? console.log('no ingresas un patron de caracteres')
: console.log(texto.replace(new RegExp(patron, "ig"), ""))

// eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")
// eliminarCaracteres('lorem caral arturo fernanzdez efecir cmike ke dkfef', '[a-z]')
// EXPRESION REGURAL ELIMINA DE LA A a la Z


// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const numAleatorio = () => {
    return Math.floor(Math.random() * 100) + 501
}
// console.log(numAleatorio())

const numReutilizable = (rango, desplazamiento) => {
    return Math.floor(Math.random() * rango) + desplazamiento
}

// for (let i = 0; i < 10; i++) {
//     console.log(numReutilizable(100, 501))
// }



// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = (num) => {
    let numStr = num.toString()
    let numInvertido = numStr.split('').reverse().join('')
    if (numInvertido === numStr) return true
    return false
}

// console.log(capicua(21212))



// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (num) => {
    if (num === 1) return 1
    return num * factorial(num - 1)
}

// console.log(factorial(5))

const factorialSinRecursividad = (num) => {
    let factorial = 1

    for (let i = num; i > 1; i--) {
        factorial *= i
    }
    return factorial
}

// console.log(factorialSinRecursividad(4))



// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const esPrimo = (num) => {
    if (num < 2) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false
    } 
    return true
}

// console.log(esPrimo(7))



// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const parOImpar = (num) => {
    if (num % 2 === 0) return `${num} Par`
    return `${num} Impar`
}

// console.log(parOImpar(1820490218419))

let strParEImpar = '1820490218419'

const parOImparDos = (num) => {
    numNumerado = num.toString()
    if (['0', '2', '4', '6', '8'].includes(numNumerado[numNumerado.length - 1])) return `Par: "${numNumerado}", debido a que termina en: "${numNumerado[numNumerado.length - 1]}"`
    return `Impar: "${numNumerado}", debido a que termina en "${numNumerado[numNumerado.length - 1]}"`
}

// console.log(parOImparDos('12'))
// console.log(parOImparDos(12249821))



// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const convertirCyF = (numGrados = 0, grado = '') => {
    if (grado === 'c' || grado === 'C') return `${numGrados}° Convertido a Fahrenheit es: "${(numGrados * 9 / 5) + 32}"`
    if (grado === 'f' || grado === 'F') return `${numGrados}° Convertido a Celsius es: "${(numGrados - 32) * 5 / 9}"`
}

// console.log(convertirCyF(123, 'f'))


// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.



// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const descuentoConValor = (valor, descuento) => {
    let quitado = (descuento / 100) * valor 
    return valor - quitado
}

// console.log(descuentoConValor(1000, 20))




// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const tiempoPasadoDesde = (fecha) => {
    const fechaActual = new Date()
    const diferenciaMilisegundos = fechaActual - fecha

    const años = new Date(diferenciaMilisegundos).getFullYear() - 1970
    return `Han pasado ${años} años desde ${fecha}`
}

let fechaTomada = new Date(2022, 4, 23)
// console.log(tiempoPasadoDesde(fechaTomada)) 



// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const arrAlCuadrado = (arr) => {
    let arrResultado = []
    for (let i = 0; i < arr.length; i++) {
        arrResultado.push(Math.pow(arr[i], 2))
    }
    return arrResultado
}

// console.log(arrAlCuadrado([1, 4, 5, 2]))




// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const numMaxYMin = (arr) => {
    let numMayor = arr[0]
    let numMenor = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < numMenor) numMenor = arr[i]
        if (arr[i] > numMayor) numMayor = arr[i]
    }   
    return `[${numMayor}, ${numMenor}]`
}

// console.log(numMaxYMin([1,2,3]))




// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const organizandoParesEimpares = (arr) => {
    let pares = []
    let impares = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) pares.push(arr[i])
        else impares.push(arr[i])
    }
    return `{[${pares}], [${impares}]}`
}

// console.log(organizandoParesEimpares([1,2,3,4,5,6,7,8,9]))


// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const ordenarArreglo = (arr = undefined) => {
    console.log({
        arr,
        asc: arr.map(el => el).sort(),
        desc: arr.map(el => el).sort().reverse()
})
}

// ordenarArreglo([7,5,7,8,6])



// const eliminarDuplicados = (arr) => {
//     nuevoArray = []
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] === arr[i+1]) nuevoArray.push(arr[i]) 
//     }
// return nuevoArray
// }

// console.log(eliminarDuplicados([1,2,2,3,3]))

// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const quitarDuplicados = (arr = undefined) => {
    // console.log({
    //     original: arr,
    //     sinDuplicados: arr.filter((value, index, self) => self.indexOf(value) === index)
    // })
    console.log({
        original: arr,
        sinDuplicidad: [...new Set(arr)]
    })
}

// quitarDuplicados(['x', 10, 'x', 2, '10', 10, true, true])




// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const obtenerPromedio = (arr) => {
    let sumaDeTodos = 0
    for (let i = 0; i < arr.length; i++) {
        sumaDeTodos += arr[i]
    }
    return sumaDeTodos / arr.length
}

// console.log(obtenerPromedio([9,8,7,6,5,4,3,2,1,0]))



// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros 
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
 

