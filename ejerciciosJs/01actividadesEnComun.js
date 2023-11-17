// BUCLE FOR IN OF 

const persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar']
const persona2 = ['comer', 'dormir', 'futbol']


function actividadesEnComun(arr1 = [], arr2 = []) {
    const newArr = []
    for (const e of arr1){
        if(arr2.includes(e)) newArr.push(e)
    }
    return newArr
}


// console.log(actividadesEnComun(persona1, persona2))




// CUANDO USARLOS.

const jursoJs = [
    'Intro a JS',
    'Variables y tipos',
    'Conversion de tipos',
    'Funciones'
]

for(let i = 0; i < jursoJs.length; i++){
    // console.log(`${i + 1}. ${jursoJs[i]}`)
}

for(const leccion of jursoJs){
    // console.log(leccion)
}

// TE DA KEY INDICE
for(const leccion in jursoJs){
    console.log(leccion)
}


 