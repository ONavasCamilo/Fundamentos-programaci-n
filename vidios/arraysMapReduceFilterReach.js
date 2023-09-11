// .map agarra cada una de las keys que se encuentra en el array y luego lo retorna multiplicando 
// cada key *2

let miArray = [4,9,1,20]

let miArrayMapeado = miArray.map(function(ele){
    return ele*2
})

// .map agarra cada una de las keys strings que estan en el array y lo retorna primeramente con
// split, que separa cada array ['e','s'] ['u', 'n', 'a']. luego .reverse() da vuelta al string ['s','e']
// y finalmente .join('') que vuelve a unir el string ['se'] haciendo que cada key de vuelta

let miArray2 = ['Es', 'una', 'frase']

let miArray2Mapeado = miArray2.map(function(ele){
    return ele.split('').reverse().join('')
})

// .reduce

let miArray5 = [5, 4, 6, 7]

let miArrayReducido = miArray5.reduce(function(acm, ele){
    return acm + ele
})

// ej.2

let miSegundoArrayson = [5,9,3,4]
let segundoArrayReducido = miSegundoArrayson.reduce(function(acm, ele){
    return acm * ele
    //se coloca uno para que la multiplicación no sea por 0 y pueda funcionar
},1) 


let miTercerArray = ['Es', 'otra', 'frase']
let miTercerReducido = miTercerArray.reduce(function(acm, ele){
    return acm + ele
},'')

//si se quiere concatenar de forma correcta palabras se usa join()
miTercerArray.join(' ')


// METODO FILTER

let miArrayFiltrado = [4,9,22,12,2,11,3,55]
let arrayFiltrado = miArrayFiltrado.filter(function(ele){
    if(ele > 10){
        // console.log(ele)
    }
})


let segundoConStringsArrayFiltrado = ['hola', 'como', 'va', 'todo']

let otroArrayFiltrado = segundoConStringsArrayFiltrado.filter(function(ele){
    if(ele.length > 3){
        // console.log(ele)
    }
})


let arrayEach = ['hola', 'como', 'va']

arrayEach.forEach(function(ele){
    // console.log(ele)
})

// otra forma 
function consologuea(elemento){
    console.log(elemento)
}

arrayEach.forEach(function(ele){
    consologuea(ele)
})



