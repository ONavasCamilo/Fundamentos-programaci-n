// 1) Programa una función que cuente el número de caracteres de una cadena de texto,
//  pe.miFuncion("Hola Mundo") devolverá 10.


function numCaracter(str){
    console.log(str.length)
}

function numeroCaracteres(cadena){
    let contador = 0
    for (let i = 0; i < cadena.length; i++)
        contador +=1
 console.log(contador)
}


//--


function contarCaracteres(cadena = ""){
    if (!cadena){
        console.warn("No ingresaste ninguna cadena")
    }
    else{
        console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`)
    }
}

// -----
const contarCaract = (cadena = "") =>
(!cadena) 
? console.log("No ingresaste ninguna cadena") 
:console.log(`La cadena "${cadena}" tiene ${cadena.length} caracteres`)


// numeroCaracteres('hola sss')








// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados,
//  pe. miFuncion("Hola Mundo", 4) devolverá "Hola".


function textoRecortado(str, num){
    return str.slice(0, num)
}
// console.log(textoRecortado('helouder', 4))






function acortarTexto(str, num){
    // console.log(str.slice(1,num))
}

// acortarTexto('hola como estas', 7)


// --------------------------

const recortarTexto = (cadena = "", longitud = undefined) =>
(!cadena)
? console.log('No ingresaste una cadena de texto')
:(longitud === undefined)
? console.log('No ingresaste la longitud para el texto')
: console.log(cadena.slice(0, longitud)) 

// recortarTexto('ola')



// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, 
// pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function arraySeparado(str, caracter){
    return str.split(caracter)
}

// console.log(arraySeparado('hey q mas bien o que', ' '))





function separar(string, caracter){
let separado = string.split(caracter)
// console.log(separado)
}

// separar('helou como estaws', ' ')


const cadenaAAreglo = (cadena = "", separador = undefined) =>
(!cadena)
? console.log('No ingresaste cadena de texto')
: (separador === undefined)
? console.log('No ingresaste el caracter de separador')
: console.log(cadena.split(separador))

// cadenaAAreglo('la las e  de d f e f grg rg ', ' ')


















// 4) Programa una función que repita un texto X veces,
//  pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

// function repetirTexto(texto, num){
//     for (let i = 0; i < num; i++)
//     console.log(texto)
// }

// repetirTexto('hola mundo', 5)



function repeat(text, veces){
    for(let i = 0; i < veces; i++){
        console.log(text)
    }
}

repeat('ola', 3)


const repetirTexto = (texto = "", veces = undefined) => {
    if(!texto) return console.log('no ingresaste texto')
    
    if(veces === undefined) return console.log('no ingresaste el numero de veces a repetir el texto')
    ;

    if(veces === 0) return console.log('el numero de veces no puede ser 0')
    ;

    if(Math.sign(veces) === -1) return console.log('el numero de veces no puede ser negativo')
    ;
    
    for(let i=1; i <= veces; i++) console.log(`${texto}, ${i}`);
    
    }

    // repetirTexto('hola mundo', 3)
    // repetirTexto('hola mundo', 21)



