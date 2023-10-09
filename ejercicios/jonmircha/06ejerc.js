// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes,
//  pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const contarLetras = (cadena = '') => {
    if (!cadena) return console.log('no ingresaste cadena de texto')

    if(typeof cadena !== 'string') return console.log(`el valor ${cadena} que ingresaste, NO es una cadena de texto`)

    let vocales = 0
    consonantes = 0

    cadena = cadena.toLocaleLowerCase()

    for (let letra of cadena){
        if(/[aeiou]/.test(letra)){
            vocales++
        }

        if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)){
            consonantes++
        }
    }
    return console.log({
        cadena,
        vocales,
        consonantes
    })
}

// contarLetras('lorem ipsum dolor sit consectuar dadipsit elit enmis offics officia ar')







// 19) Programa una función que valide que un texto sea un nombre válido, 
// pe. miFuncion("Jonathan MirCha") devolverá verdadero.


const validarNombre = (nombre = '') => {
    if (!nombre) return console.log('No ingresaste un nombre')

    if (typeof nombre !== 'string') return console.log(`El valor ${nombre} brindado NO es una cadena de texto`)

    let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(nombre)

    return (expReg)
    ? console.log(`${nombre} ingresado es valido. Creado correctamente`)
    : console.log(`${nombre} ingresado no es valido. Ingresa otro.`)
 
}

// validarNombre('carlitos morales')





// 20) Programa una función que valide que un texto sea un email válido,
//  pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validarEmail = (email = '') => {
    if (!email) return console.log('No ingresaste email')

    if(typeof email !== 'string') return console.log(`El valor ${email} que ingresaste NO es valido, ingresa una cadena de texto`)

    let expReg = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,15}/i.test(email)

    return (expReg)
    ? console.log(`${email} ingresado es valido.`)
    : console.log(`${email} ingresado no es valido. Ingresa otro.`)
}

// validarEmail('jonmircha@gmail.co')

// FUSION 19 Y 20

const validarPatron = (cadena = "", patron = "") => {
    if (!cadena) return console.log('no ingresas cadena de texto')

    if(typeof cadena !== 'string') return console.log(`valor ${cadena} invalido`)

    if (patron === undefined) return console.log('no ingresaste patron')

    if (!(patron instanceof RegExp)) return console.log(`valor ${patron} NO es una expresion regular`)

    let expReg = patron.test(cadena)

    return (expReg)
    ? console.log(`${cadena} cumple con el patron ingresado`)
    : console.log(`${cadena} no cumple con el patron ingresado`)

}

// validarPatron('jonathan mircha2', /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g)

// validarPatron('jonmircha@gmail.co', /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,15}/i)

validarPatron('jonmircha@gmail', new RegExp('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,15}','i'))


// La expresión regular que uso para el email en este video (jon mircha)  
//     /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i