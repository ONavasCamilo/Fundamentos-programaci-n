// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const numAleat = () => {
    // Genera un número aleatorio entre 0 (inclusive) y 1 (exclusivo),
    // luego lo multiplica por el rango (600) y le suma el valor inicial del rango (501)
    const numeroAleatorio = Math.round(Math.random() * 100) + 500;
    console.log(numeroAleatorio);
}

// numAleat();


// ------------------------------------------------------------

const aleatorio = () => console.log(Math.round((Math.random() *100) +500))

// aleatorio()



// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), 
// pe. miFuncion(2002) devolverá true.


const capicua = (num) => {
    let cadena = num.toString()
    // console.log(cadena)

    let alReves = cadena.split('').reverse().join('')

    // console.log(alReves)
    if(cadena === alReves){
        console.log(true)
    }else{
        console.log(false)
    }
}


// capicua(11311)

// --------------------------------------------------------------------

const capi = (numero = 0) => {
    if (!numero) return console.log('No ingresaste ningún número')

    if (typeof numero !== "number") return console.log(`El valor de "${numero}" ingresado NO es un número`)

    numero = numero.toString()
    let alReves = numero.split('').reverse().join('')

    return(numero === alReves)
    ? console.log(`si es capicua, numero original: ${numero}. Numero alreves: ${alReves}`)
    : console.log(`no es capicua, numero original: ${numero}. numero alreves: ${alReves}`)
}

// capi(11211)






// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de 
// todos los números enteros positivos desde 1 hasta n),  pe. miFuncion(5) devolverá 120.

const Factorial = (num) => {
    let cont = 1

    for(let i = 1; i <= num; i++){
        cont*= i
    }
    console.log(cont)
}

// Factorial(5)

// --------------------------------------------------

const factoria = (num = undefined) => {
    if(num ===  undefined) return console.log('no ingresaste numero')

    if(typeof num !== "number") return console.log(`El valor de "${num}" ingresado NO es un número`)

    if (num === 0) return console.log('el numero no puede ser 0')

    if(Math.sign(num) === -1)return console.log('el numero no puede ser negativo')

    let fact = 1 

    for (let i = num; i > 1; i--){
        fact *= i
    }
    return console.log(`El factorial de ${num} es ${fact}`)
}

factoria()