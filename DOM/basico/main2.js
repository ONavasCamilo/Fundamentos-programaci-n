// Lectura de nodos

// Por ID

// let elementoPorId = document.getElementById('parrafo1)

let elementoPorId = document.querySelector('#parrafo1')
elementoPorId.innerHTML = 'karnal'

// Por nombre de la clase 
// let elementosPorClase = document.getElementByClassName('parrafos')
elementosPorClase = document.querySelectorAll('.parrafos')
console.log(elementosPorClase)
const arreglo = [...elementosPorClase]
console.log(arreglo)
arreglo[1].innerHTML = 'filipinas maravillas'

// Por etiqueta

let elementosPorEtiquetas = document.getElementByTagName('p')
elementosPorEtiquetas[2].innerHTML = 'ahora!'
