// METODOS

// sqrt() devuelve la raiz cuadrada positiva de un número

// numero = Math.sqrt(25)
// console.log(numero)

// cbrt() devuelve la raiz cubica de un numero

numeroRaizCubica = Math.cbrt(25)
// console.log(numeroRaizCubica)

// max() devuelve el mayor de cero o más numeros

numeroMayor = Math.max(4,2,2,3,34,52,56,6,46,46,46,46,46,4)
// console.log(numeroMayor)

// min() devuelve el mas pequeño de cero o mas numero
// random() devuelve un numero pseudo-aleatorio entre 0 y 1
// round() devuelve el valor de un numero redondeado al numero entero mas cercano

numero = Math.random()*100
numero = Math.round(numero)

// console.log(numero)

// fround()  devuelve la representacion flotante de precision simple mas cercano de un numero




// floor() devuelve el mayor entero menor que o igual a un numero


for (let i= 0; i < 15; i++){

    let numero = Math.random()*99
    numero = Math.floor(numero+1)
    console.log(numero)
}


// trunc()  devuelve la parte entera del numero x, la eliminacion de los digitos fraccionarios
// eliminar decimales

