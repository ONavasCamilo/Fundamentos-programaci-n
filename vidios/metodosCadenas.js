// let cadena = 'cadena de prueba'

// resultado = cadena.concat('hola')

// document.write(resultado)

// let cadena = new String('cadena de prueba')
// let cadena2 = ' CADENON'

// resultado = cadena.concat(cadena2)

// document.write(resultado)
// CONCAT, JUNTA DOS O MAS CADENAS Y RETORNA UNA NUEVA


// startsWith() - si una cadena comienza con los caracteres de otra cadena, devuelve true, sino
// devuelve false                                         ===          
// endsWith() lo mismo al final.            deben ser ESTRICTAMENTE iguales


// let cadena = 'cadena de prueba'
// let cadena2 = 'cadena'

// resultado = cadena.startsWith(cadena2)
// resultado = cadena.endsWith(cadena2)

// document.write(resultado)


// includes() si una cadena puede encontrarse dentro de otra cadena, devuelve true, de lo contrario false

// let cadena = ' cadena de prueba'
// let cadena2 = ' prueba'

// resultado = cadena.includes(cadena2)

// document.write(resultado)


// indexOf()  devuelve el indice del primer caracter de la cadena, si no existe devuelve -1
// lastLindexOf()  devuelve el ultimo indice del primer caracter de la cadena, si no existe, devuelve -1

// let cadena = 'pedro es un tarado inmaduro'
// let cadena2 = ''

// resultado = cadena.indexOf('tarado')

// document.write(resultado)
// NOS DA 12, NOS DICE QUE LA PALABRA TARADO COMIENZA EN LA POSICIÓN 12 

// let cadena = 'pedro es un tarado tarado tarado tarado tarado'
// let cadena2 = ''

// resultado = cadena.lastIndexOf('tarado')

// document.write(resultado)
// NOS DA 40, PORQUE TOMA EL ULTIMO DE TODOS. 



//  padStart() [propuesta de Estandar] rellenar cadena al principio con los caracteres deseados
// let cadena = 'abc'
// let cadena2 = ''

//                           rellenar cadena hasta que tenga 6 caracteres y rellenar con cadena 'a'
// resultado = cadena.padStart('6, "a"')
// padEnd es lo mismo pero en vez de ponerlo al principio lo pone al final
// resultado = cadena.padEnd(10, '1234')
// document.write(resultado)


// repeat() devuelve la misma cantidad pero repetida la cantidad

// let cadena = '123 '
// let cadena2 = ''

// resultado = cadena.repeat(2)

// document.write(resultado)


// split() divide la cadena como le pidamos
// let cadena = 'hola, como, estas'

// resultado = cadena.split(',')
// document.write(resultado)



// substring() nos retorna un pedazo de la cena que seleccionamos

// let cadena = 'ABCEFG'
//                          con el numero que comienza ESTA INCLUIDO, CON EL QUE TERMINA NO == AB
// resultado = cadena.substring(0,2)

// document.write(resultado)



// toLowerCase()  convierte cadena en minuscula
// toUpperCase() convierte cadena en mayuscula

// let cadena = 'ABCEFGH'

// resultado = cadena.toLowerCase()

// document.write(resultado)

// let cadena2 = 'mayus sin ser mayus carnal'

// resultado = cadena2.toUpperCase()

// document.write(resultado)


// toString() convierte a string

// let cadena = 354

// resultado = cadena.toString()
// document.write(resultado * 2)

//  trim() elimina los espacios en blanco al principio y final de una cadena
// trimEnd() elimina los espacios en blanco al final de una cadena
// trimStart() elimina los espacios en blanco al inicio de una cadena

//trim
// let cadena = '    pedro     '

// let resultado = cadena.trim()
// document.write(resultado.length)


// trimEnd()

// let cadena = '    pedro     '

// let resultado = cadena.trimEnd()
// document.write(resultado.length)

// TRANSFORMADORES 

// pop() elimina el ultimo elemento de un array y lo devuelve
// shift() elimina el primer elemento de un array y lo devuelve
// push() agrega un elemento al array al final de la lista
// reverse() invierte el orden de los elementos de un array
// unshift() agrega uno o mas elementos al inicio del array, y devuelve la nueva longitud del array
// sor() ordena los elementos de un arreglo localmente y devuelve el arreglo ordenado
// splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos

// ACCESORES

// join() UNE TODOS LOS ELEMENTOS DE UNA MATRIZ (U OBJETO SIMILAR) EN UNA CADENA Y LA DEVUELVE
// slice() DEVUELVE UNA PARTE DEL ARRAY DENTRO DE UN NUEVO ARRAY EMPEZANDO POR INICIO HASTA FIN 
// (FIN NO INCLUIDO)

// DE REPETICIÓN

// filter() crea un nuevo array con todos los elementos que cumplan la condicion
// forEach() ejecuta la función indicada una vez por cada elemento del array 

