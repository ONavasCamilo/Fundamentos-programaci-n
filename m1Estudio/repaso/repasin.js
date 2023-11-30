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