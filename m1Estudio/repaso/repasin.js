//Implementarla función countArray: a partir de un array en el cual cada posición puede ser un único
//número u otro array anidado de números, determinar la suma de todos los números contenidos en el array
//el array será recibido por parámetro
//ej:
//      const array = [1, [2, [3, 4]], [5, 6], 7]
//      countArray(array) --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// pista: utilizar el método Array.isArray() paradeterminar si algún elemento de array es un array anidado


let countArray = function(array) {
    //Código acá:
    //pide sumar todos los valores
    //me da [1, [2, [3, 4]], [5, 6], 7]
    //sumar los valores
    //si es un array countArray(el array en 1)
    //si no es un array sumo 
    let suma = 0

    for (let i = 0; i < array.length; i++) {
        if(Array.isArray(array[i])) suma += countArray(array[i])
        else suma += array[i]
}
return suma
}

// console.log(countArray([1, [2, [3, 4]], [5, 6], 7]))

//Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
//cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
//u objetos anidado
//ej:
// let obj = {
//     a: {
//         a1: 10,
//         a2: 'Franco',
//         a3: {f: 'r', a: 'n', c: {o: true}}
//     },
//     b: 2,
//     c: [1, {a: 1}, 'Franco']
// }
//countProps(obj) --> debería devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez 
//dentro de a tenemos 3 propiedades más, luego a3 tiene otras 3 y por ultimo c tiene una extra.
//propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

let countProps = function(obj) {
    //cantidad de props
    //solo si la prop es un obj entro a ver sus props
    let total = Object.keys(obj).length
    for (const prop in obj) {
        if(typeof obj[prop] === 'object' && !Array.isArray(obj[prop])) {
            total += countProps(obj[prop])
        }
    }
    return total
}

//Implementar el metodo changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
//aquellos valores que no puedes castearse a numeros 'Kiricocho' y devolver la cantidad de cambios que hizo
//aclaracion: si el valor del nodo puede castearse a numero NO hay que reemplazarlo
// ej1:
// suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco]
// lista.changeNotNumbers(
// ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho'] y 
// la funcion deberia haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function() {
    //poder revisar si se puede castear a numeros
    //podemos revisar si se puede castear a numeros Number.isNaN(Number('Matias'))
    //solo reemplazar los que no se pueden castear
    //recorrer toda la LinkedList

    let current = this.head
    let sumar = 0
    while (current) {
        if (Number.isNaN(Number(current.value))) {
            current.value = 'Kirikocho'
            sumar++
        }
        current = current.next
    }
    return sumar
}


//Implementar la funcion mergeQueues que a apartir de dos queues recibidas por parametro
//debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores
//ej:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTow) --> [7,2,3,4,5,6]
//IMPORTANTE: NO son arreglos sino que son Queues

let mergeQueues = function(queueOne, queueTwo) {
    let newQueue = new Queue()
    while (queueOne.size() || queueTwo.size()) {
        if (queueOne.size()) {
        newQueue.enqueue(queueOne.dequeue())
        }
        if (queueTwo.size()) {
            let value = queueTwo.dequeue()
            newQueue.enqueue(value)
        }
    }
    return newQueue
}

//Implementar la funcion closureMult que permita generar nuevas funciones representen
//las tablas de multiplicacion de distintos numeros
//ej:
//- let mulByFour = closureMult(4)
//- multByFour(2) --> 8 (2 * 4)
//- multByFour(5) --> 20
//- let multBySix = closureMult(6)
//- multBySix(4) --> 24

let clouseMult = function(multiplier) {
    return function(num) {
        return num * multiplier
    }
}

//implementar el metodo sum dentro del prototype de BinarySearchTree
//que debe retornar la suma total de los valores dentro de cada nodo del arbol

BinarySearchTree.prototype.sum = function() {
    let suma = this.value
    if (this.left) {
        suma += this.left.sum()
    }
    if (this.right) {
        suma += this.right.sum()
    }
    return suma
}


function BinarioADecimal(num) {
    let array = num.split('')
    let num = 0
    for (let i = 0; i < array.length; i++) {
        num = num + parseInt(array[i]) * Math.pow(2, array.length -1 - i)
    }
    return num
}

function DecimalABinario(num) {
    
}