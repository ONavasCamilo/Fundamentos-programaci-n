// 15) Programa una función para convertir números de base binaria a decimal y viceversa, 
// pe. miFuncion(100,2) devolverá 4 base 10.

const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
 if (numero === undefined) return console.log('No ingresaste ningún número a convertir')

 if (typeof numero !== 'number') return console.log(`debes ingresar un numero putito, no se puede ${numero}`)

if (base === undefined) return console.log('ingresa la base a convertir')

if(typeof base !== 'number') return console.log(`ingresa tu base en numero mamahuevo, que es eso de ${base}`)

if(base === 2){
 return console.log(`${numero} base ${base} = ${parseInt(numero, base)} base 10`)
}else if(base === 10){
return console.log(`${numero} base ${base} = ${(numero.toString(base))} base 2`)
}else{
    return console.log('el tipo de base a covertir no es valido')
}
}

// convertirBinarioDecimal(100, 2)








// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, 
// pe. miFuncion(1000, 20) devolverá 800.


const aplicarDescuento = (monto = undefined, descuento = 0) => {
 if (monto === undefined) return console.log('no ingresaste monto')

 if (typeof monto !== "number") return console.log(`valor ${monto} ingresado, NO es un numero`)

 if(monto === 0) return console.log('el monto no puede ser 0')

 if(Math.sign(monto) === -1) return console.log('el monto no puede ser un numero negavito')

 if (typeof descuento !== "number") return console.log(`el valor ${descuento} que ingresaste, NO es un numero`)

 if (Math.sign(descuento) === -1) return console.log('el descuento no puede ser un numero negativo')

 return console.log(`el ${descuento}% de $${monto} es $${monto - (monto*descuento)/ 100}`)

}


// aplicarDescuento(50000, 60)





// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy,
//  pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const calcularAnios = (fecha = undefined) => {
 if(fecha === undefined) return console.log('no ingresaste la fecha')

 if (!(fecha instanceof Date)) return console.log('el valor que ingresaste no es una fecha valida')

 let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
 aniosEnMS = 1000 * 60 * 60 * 24 * 365
 aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMS)

 return (Math.sign(aniosHumanos) === -1)
 ? console.log(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`)
 : (Math.sign(aniosHumanos) === 1)
  ? console.log(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.`)
  : console.log(`Estamos en el año actual ${fecha.getFullYear()}.`)
}


calcularAnios(new Date(2002,7,25))