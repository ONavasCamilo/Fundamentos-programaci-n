// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, 
// pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

function arrElevado(array){
    for(let i = 0; i < array.length ; i++){
        nuevoArray = Math.pow(array[i], 2)
        console.log(nuevoArray)
    }
}

// arrElevado([1,4,5])

const elevandoArreglo = (arr) => {
    for (let i = 0; i < arr.length; i++){
        newArr = Math.pow(arr[i], 2)
        console.log(newArr)
    }
}

// elevandoArreglo([1,4,5])


const devolverCuadrados = (arr = undefined) => {
    if(arr === undefined) return console.log('No ingresaste un arreglo de numeros')

    if(!(arr instanceof Array)) return console.log('El valor que ingresaste no es un arreglo')

    if(arr.length === 0) return console.log('El arreglo esta vacio')

    for (let num of arr){
        if(typeof num !== "number") return console.log(`El valor ${num} ingresado, NO es un numero`)
    }

    const newArr = arr.map(el => el * el) 

    return console.log(`Arreglo original: ${arr}\nArreglo elevado al cuadrado ${newArr} `)
}



devolverCuadrados([1,2])




// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array,
//  pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const MayorYMenor = (arreglo) => {
        let numMayor = Math.max(...arreglo)
        let numMenor = Math.min(...arreglo)
        console.log(`Del siguiente arreglo ${arreglo} el número mayor es el ${numMayor} y el número menor es ${numMenor}`)
    }

// MayorYMenor([1,2,3])

const menorYmayor = (arr) => {
    let numMayor = arr[0]
    let numMenor = arr[0]

    for(let i = 0; i < arr.length ; i++){
        if(arr[i] > numMayor){
            numMayor = arr[i]
        }else if(arr[i] < numMenor){
            numMenor = arr[i]
        }
    }
    console.log(`numero menor ${numMenor}, numero mayor ${numMayor}`)
}

// menorYmayor([100,23,33,23,435,34523,343,5353,6464])

const arrayMinMax = (arr = undefined) => {
    if(arr === undefined) return console.log('No ingresaste un arreglo de numeros')

    if(!(arr instanceof Array)) return console.log('el valor que ingresaste no es un arreglo')

    if (arr.length === 0) return console.log('arreglo vacio')

    for(let num of arr){
        if(typeof num !== "number") return console.log(`El valor ${num} que ingresaste, NO es un número`)
    }

    return console.log(`Arreglo original: ${arr}\nValor mayor: ${Math.max(...arr)}\nValor menor: ${Math.min(...arr)}`)

}



// arrayMinMax([1,3,3,2,4,4,5,3,2,5,5])




// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares
//  y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.



const paresEImpares = (arr) => {
    let pares = []
    let impares = []

    for (let i = 0; i < arr.length ; i++){
        if(arr[i] % 2 === 0){
            pares.push(arr[i])
        }else if(arr[i] % 2 !== 0){
            impares.push(arr[i])
        }
    }
    console.log()
}

// paresEImpares([1,2,23,2,3,2])

const separarParesImpares = (arr = undefined) => {
    if(arr === undefined) return console.log('No ingresaste un arreglo de numeros')

    if(!(arr instanceof Array))  return console.log('el valor que ingresaste no es un arreglo')

    if(arr.length === 0) return console.log('arreglo vacio')

    for(let num of arr){
        if(typeof num !== "number") return console.log(`valor ${num} ingresado, NO es un numero`)
    }

    return console.log({
        pares: arr.filter(num => num % 2 === 0),
        impares: arr.filter(num => num % 2 === 1)
    })
}


separarParesImpares([1,2,3,2,3,2])
