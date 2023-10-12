// function cuadradoCallback(value, callback) {
//     setTimeout(() => {
//         callback(value, value * value)
//     }, 0 | Math.random() * 100);
// }


// cuadradoCallback(0, (value, resultado) => {
//     console.log('Inicia callback')
//     console.log(`Callback: ${value}, ${result}`)
//     cuadradoCallback(0, (value, resultado) => {
//         console.log('Inicia callback')
//         console.log(`Callback: ${value}, ${result}`)

//     })
// })

// callbacks hells


//  PROMESAS

function cuadradoPromise(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            })
        }, 0 | Math.random() * 100);
    })
}

cuadradoPromise(0)
 .then(obj =>{
    console.log('Inicio Promise')
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromise(1)
 })

 .then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromise(2)
 })
 
 .catch(err => console.log('Error'));



//  Symbol


// let id = Symbol('id')
// let id2 = Symbol('id2')

// console.log(id === id2)
// console.log(id, id2)
// console.log(typeof id, typeof id2)

// const NOMBRE = Symbol()

// const persona = {
//     [NOMBRE]: 'Jon'
// }
// console.log(persona)

// persona.NOMBRE = 'Jonathan MirCha'
// console.log(persona)
// console.log(persona.NOMBRE)
// console.log(persona[NOMBRE])

// persona[SALUDAR]


const set = new Set([1,2,3,3,4,5,true,false,false,{},{},'hola','HOla'])

console.log(set.size)

const set2 = new Set()
set2.add(1)
set2.add(2)
set2.add(2)
set2.add(3)
set2.add(true)
set2.add(false)
set2.add(true)
set2.add({})

console.log(set2)
console.log(set2.size)

console.log('Recorriendo set')
for(item of set){
    console.log(item)
}
console.log('Recorriendo set2')
set2.forEach(item => console.log((item)))



let arr = Array.from(set)
console.log(arr)
console.log(arr[0])
console.log(arr[9])

set.delete('HOla')
console.log(set)

console.log(set.has('hola'))
console.log(set.has(19))

set2.clear()
console.log(set2)