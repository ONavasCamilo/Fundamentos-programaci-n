// function partir(arreglo = [], cantidad = 0){
//     const newArr = []
//     let subArr = []
//     while (arreglo = )

// NO LO EXPLICA BIENxd.
// }



// function digitos(num){
//     return num.split(' ').length

// }

// console.log(digitos(2232))

// let a = 8
// let b = a
// let c = b +a
// let b = 9

// console.error('error cabron')

let persona = [
    nombre = 'ricardo',
    apellido = 'fansonso',
    edad = 45
]
// console.log(`Mi nombre es %s %s y tengo %s años.`, nombre, apellido, edad)

// console.clear()


// ¡Claro! Aquí tienes un ejercicio simple para practicar tu lógica de programación:

// Problema: Suma de los Números Pares

// Escribe un programa que calcule la suma de todos los números pares del 1 al N, donde N es un número dado por el usuario.

// Ejemplo de entrada/salida:

// Si el usuario ingresa N=10, el programa debe calcular la suma de los números pares del 1 al 10, que son 2 + 4 + 6 + 8 + 10 = 30.
// Si el usuario ingresa N=5, el programa debe calcular la suma de los números pares del 1 al 5, que son 2 + 4 = 6.
// Pistas:

// Utiliza un bucle para iterar desde 1 hasta N.
// Usa una variable para mantener la suma total.
// Dentro del bucle, verifica si cada número es par (puedes usar el operador de módulo % para esto). Si es par, agrégalo a la suma total.


const sumarPares = (num) => {

    cont = 0

    for (let i = 1; i <= num; i++){
        if(i % 2 === 0){
        cont++
        }
    }
console.log(cont)

}

sumarPares(9)