const resta = (a, b) => {
    return a - b
}

// console.log(resta(10, 7))

// con parametro rest 

const restaRest = (a, ...b) => {
    let result = a
    for (let num of b) {
        result -= num
    }
    return result
}

// console.log(restaRest(156, 7, 1, 2, 100, 10, 0, 20, 10, 10, 2, 10, 10, 20, 10))

const multiplicacion = (a, b) => {
    return a * b
}

// console.log(multiplicacion(10, 4))

const multiplicacionRest = (a, ...b) => {
    let resultado = a
    for (let num of b) {
        resultado *= num
    }
    return resultado
}

// console.log(multiplicacionRest(10, 7, 10, 10, 10, 10))


const factorial = num => {
    if (num === 0) return 1
    return num * factorial(num - 1)
}

// console.log(factorial(4))

const resto = (a, b) => {
    return a % b
}

// console.log(resto(10, 3))

const restoRest = (a, ...b) => {
    let resultado = a
    for (let num of b) {
        resultado %= num
    }
    return resultado
}

// console.log(restoRest(10, 3, 10))


// Retorna true si "x" e "y" son iguales.
// De lo contrario, retorna false.
// Tu código:

const sonIguales = (x, y) => {
    if (x === y) return true
    return false
}

//    console.log(sonIguales(3,3))

// Retorna true si los dos strings tienen la misma longitud.
// De lo contrario, retorna false.
// Tu código:

const mismaLongitud = (str1, str2) => {
    if (str1.length === str2.length) return true
    return false
}

// console.log(mismaLongitud('hola', 'locota'))


// Retorna true si "num" es par.
// De lo contrario, retorna false.
// Tu código:

const esPar = (num) => {
    if (num % 2 === 0) return true
    return false
}

//    console.log(esPar(16))

// Retorna true si "num" es impar.
// De lo contrario, retorna false.
// Tu código:

const esImpar = (num) => {
    if (num % 2 !== 0) return true
    return false
}

//    console.log(esImpar(33))


// Retorna el valor de "num" elevado al cuadrado.
// Tu código:

const numElevado = (num) => {
    return Math.pow(num, 2)
}

// Si "num" es divisible entre 3, retorna "fizz".
// Si "num" es divisible entre 5, retorna "buzz".
// Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
// De lo contrario, retorna false.
// Tu código:

const fizzbuzz = (num) => {
    if ((num % 5) === 0 && (num % 3) === 0) return 'fizzbuzz'
    else if ((num % 3) === 0) return 'fizz'
    else if ((num % 5) === 0) return 'buzz'
    return false
}

//    console.log(fizzbuzz(30))

// La función recibe tres números distintos.
//    Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
//    Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
//    Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
// Si todos los argumentos son cero, retornar ---> "Error". 
//    Si no se cumple ninguna de las condiciones anteriores, retornar false.
// Tu código:

const operadoresLogicos = (num1, num2, num3) => {
    if (num1 === 0 && num2 === 0 && num3 === 0) return 'Error'
    else if (num1 > num2 && num1 > num3 && num1 > 0) return 'Numero 1 es mayor y positivo'
    else if (num1 < 0 || num2 < 0 || num3 < 0) return 'Hay negativos'
    else if (num3 > num1 && num3 > num2) return num3 + 1
    else return false
}

// console.log(operadoresLogicos(-1, 33, 5))

 // Retornar true si "num" es primo.
   // De lo contrario retorna false.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:

   const esPrimo = (num) => {
    if (num < 2) return false
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false
    }
    return true
}

// console.log(esPrimo(82))

// Si el número recibido tiene tres dígitos retornar true.
   // Caso contrario, retornar false.
   // Tu código:

   const tieneTresDigitos = (num) => {
    const numACadena = num.toString()
    return numACadena.length === 3
}

//    console.log(tieneTresDigitos(200))

 // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:

  const arrayIncrementado = (array) => {
    let nuevoArrayMasUno = []
    for (let i = 0; i < array.length; i++) {
        nuevoArrayMasUno.push(array[i]+1)
    }
    return nuevoArrayMasUno
  }

//   console.log(arrayIncrementado([2,3,4,2,3]))

// Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:

  const agregarElAlArreglo = (arr, ...el) => {
    for (let e of el) {
        arr.push(e)
    }
    return arr
  }

  const numNegativos = [-1, -2, -3]
  agregarElAlArreglo(numNegativos, -4, -5, -6)
//   console.log(numNegativos)

const numPositivos = [1, 2, 3, 4, 5, 6]
agregarElAlArreglo(numPositivos, 7, 8)
// console.log(numPositivos)


 // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:

   const agregarAlInicio = (arr, ...el) => {
    for (let e of el) {
        arr.unshift(e)
    }
    return arr
   }

   const miArray = [5, 6, 7]
   agregarAlInicio(miArray, 4, 3, 2, 1)
//    console.log(miArray)


// El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:

   const deArrayAFrase = (arr) => {
    return arr.join(' ')
   }

   const arr = ['buen', 'dia', 'examen', 'el', 18, 'de', 'noviembre']
//    console.log(deArrayAFrase(arr))


// Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:

   const existeElemento = (arr, el) => {
    if (arr.includes(el)) return true
    return false
   }

   const arreglote = [23, 53, 535, 54, 545]
//    console.log(existeElemento(arreglote, 23))

// El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:

   const arraySumado = (array) => {
    let acm = 0
    for (let i = 0; i < array.length; i++) {
        acm += array[i]
    }
    return acm
   }

   const arregloParaSumar = [1, 2, 3, 4, 5, 6]
//    console.log(arraySumado(arregloParaSumar))

const arrayMultiplicado = (array) => {
    let acum = 1
    for (let i = 1; i < array.length; i++) {
        acum *= array[i]
    }
    return acum
}

const arregloParaMultiplicar = [1, 2, 3, 4, 5, 6]
// console.log(arrayMultiplicado(arregloParaMultiplicar))


// El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:

   const promedioNotas = (resultadosTest) => {
    let acum = 0
    for (let i = 0; i < resultadosTest.length; i++) {
        acum += resultadosTest[i]
    }
    return acum / resultadosTest.length
   }

   const notas = [4, 4, 3, 6]
//    console.log(promedioNotas(notas))



// El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:

   const numMasGrandeEnArray = (arr) => {
    let acum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > acum) acum = arr[i]
    }
    return acum
   }

   const arrayNumeritos = [1, 2, 3, 4, 5, 10, 7, 8]
//    console.log(numMasGrandeEnArray(arrayNumeritos))


// Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:

   function multiplicarArgumentos() {
    let acum = 1
    if (arguments.length === 0) return 0
    else if (arguments.length === 1) return arguments[0]
    else if (arguments.length >= 2) {
    for (let i = 0; i < arguments.length; i++) {
        acum *= arguments[i]
    }
    return acum
}
   }

   const arrayVacio = [1,2,4]
//    console.log(multiplicarArgumentos(...arrayVacio))


// Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:

   const cantidadElementosMayoresA18 = (arregloNumeros) => {
    mayoresA18 = []
    for (let i = 0; i < arregloNumeros.length; i++) {
        if (arregloNumeros[i] > 18) mayoresA18.push(arregloNumeros[i])
    }
    return mayoresA18.length
   }

   const numeros = [2, 3, 5, 20, 30, 40, 20, 17, 18, 18]
//    console.log(cantidadElementosMayoresA18(numeros))

const contarElementos = (arr) => {
    let acum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 18) acum += 1
    }
    return acum
}

const numeros2 = [2, 3, 5, 20, 30, 40, 20, 17, 18, 18, 19]
// console.log(contarElementos(numeros2))

// Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:

   const iniciaEn9 = (num) => {
    const result = []
    let numAString = num.toString()
    for (let i = 0; i < numAString.length; i++) {
        result.push(`Numero: ${numAString[i]}`)
    }
    return result.join('\n')
   }

//    console.log(iniciaEn9(138391))

const empiezaConNueve = (num) => {
    let numeroString = num.toString()
    if (numeroString[0] === '9') return 'El primer digito que diste es un 9'
    return false
 }


  // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:

const todosIguales = (arr) => {
    for (let i = 0; i < arr.length -1; i++) {
        if (arr[i] !== arr[i+1]) return false
    }
    return true
}

const arrayIgual = [2, 2, 2, 3]
// console.log(todosIguales(arrayIgual))

// Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:

   const tablaMultiplicar = (num, veces) => {
    const arrResultado = []
    for (let i = 1; i < veces; i++) {
        arrResultado.push(num*i)
    }
    return arrResultado
   }

//    console.log(tablaMultiplicar(6, 20))

    // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:


   const mayoresACien = (arrNumeros) => {
    const arrResultado = []
    for (let i = 0; i < arrNumeros.length; i++) {
        if (arrNumeros[i] > 100) arrResultado.push(arrNumeros[i])
    }
return arrResultado
   }

   const arregloDeNumeros = (num) => {
    const numeros = []
    for (let i = 100; i < num; i++) {
        numeros.push(i)
    }
    return numeros
   }
//    console.log(arregloDeNumeros(200))

   const arregloDeDocientos = [
    1,  2,  3,   4,  5,  6,  7,  8,  9, 10, 11, 12,
   13, 14, 15,  16, 17, 18, 19, 20, 21, 22, 23, 24,
   25, 26, 27,  28, 29, 30, 31, 32, 33, 34, 35, 36,
   37, 38, 39,  40, 41, 42, 43, 44, 45, 46, 47, 48,
   49, 50, 51,  52, 53, 54, 55, 56, 57, 58, 59, 60,
   61, 62, 63,  64, 65, 66, 67, 68, 69, 70, 71, 72,
   73, 74, 75,  76, 77, 78, 79, 80, 81, 82, 83, 84,
   85, 86, 87,  88, 89, 90, 91, 92, 93, 94, 95, 96,
   97, 98, 99, 100, , 101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
   111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121,
   122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132,
   133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143,
   144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154,
   155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165,
   166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176,
   177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187,
   188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198,
   199, 200]

// console.log(mayoresACien(arregloDeDocientos))

 // Crea una Clase de ES6 o una función constructora llamada "Usuario".
   // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
   // El valor de cada propiedad la recibirá por parámetro.
   // Además, esta clase debe tener un método llamado "saludar".
   // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
   // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
   // Retornar la clase.
   // Tu código:

   class Usuario{
    constructor(usuario, nombre, email, password) {
        this.usuario = usuario
        this.nombre = nombre
        this.email = email
        this.password = password
    }
    saludar(){
        return `Hola, mi nombre es ${nombre}`
    }
   }



