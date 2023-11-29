function quickSort(array) {
    //Implementar el método conocido como quickSort para ordenar de menor a mayor
    //el array recibido como parámetro
    //Devolver el array ordenado resultante
    // izq < pivote < der
    if (array.length <= 1) return array

    let pivot = Math.floor(Math.random() * array.length)
    let left = []
    let equal = []
    let right = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] < pivot) left.push(array[i])
        else if (array[i] > pivot) right.push(array[i])
        else equal.push(array[i])
    }

    return quickSort(left).concat(equal).concat(quickSort(right))
}


function mergeSort(array) {
    //Implementar el método conocido como mergeSort para ordenar de menor a mayor 
    //el array recibido como parámetro
    //Devolver el array ordenado resultante
    
    //divide siempre la mitad
    //izq ? <> der
    //metodo que tome 2 arr que devuelva uno ordenado
    if (array.length === 1) return array
    
    let middle = Math.floor(array.length / 2)
    let left = array.slice(0, middle)
    let right = array.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(arrayUno, arrayDos) {
    //metodo que tome 2 arr que devuelva uno ordenado
    let arrayUnoIndex = 0
    let arrayDosIndex = 0
    let array = []

    while (arrayUnoIndex < arrayUno.length && arrayDosIndex < arrayDos.length) {
        if (arrayUno[arrayUnoIndex] < arrayDos[arrayDosIndex]) {
            array.push(arrayUno[arrayUnoIndex])
            arrayUnoIndex++
        } else {
            array.push(arrayDos[arrayDosIndex])
            arrayDosIndex++
        }
    }
    array.concat(arrayUno.slice(arrayUnoIndex)).concat(arrayDos.slice(arrayDosIndex))
}