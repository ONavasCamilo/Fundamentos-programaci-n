//! Dado un conjunto de números enteros, encuentre la suma de sus elementos. Por ej, si la matriz ar = [1,2,3], 1 + 2 + 3 = 6, así que regresa 6.

//? Debe devolver la suma de los elementos de la matriz como un número entero. simpleArraySum tiene los siguientes parámetros: ar : una matriz de números enteros

//! RESTRICCIONES: 
//* 0 < n , ar[i] <= 1000

//? Imprime la suma de los elementos de la matriz como un único número entero.
//*entrada: 6 1 2 3 4 10 11
//*salida: 31

function simpleArraySum(ar = []) {
    // Write your code here
    if (!ar.length) return 'El array no puede estar vacio, ingresa hasta 1000 numeros enteros'
    else if (ar.length > 1000) return 'El array no puede tener mas de 1000 numeros'
    else {
        let cont = 0
        const lessThanZero = []
        const greaterThanAThousand = []
        
        ar.forEach(el => {
            if (el <= 0) lessThanZero.push(el)
            else if (el > 1000) greaterThanAThousand.push(el)
            else cont += el
        })
        if (lessThanZero.length && greaterThanAThousand.length) return `Los numeros en el arreglo "${lessThanZero}" deben ser mayores a cero. Además los numeros "${greaterThanAThousand}" deben ser menores o iguales a mil`
        else if (lessThanZero.length) return `Los numeros "${lessThanZero}" deben ser mayores a cero.`
        else if (greaterThanAThousand.length) return `Los numeros "${greaterThanAThousand}" deben ser menores o iguales a mil`
        else return cont
    }
}

// console.log(simpleArraySum([1,2,0, -2, 4, -100, 1002]))