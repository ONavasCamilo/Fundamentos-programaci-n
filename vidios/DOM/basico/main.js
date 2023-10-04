
// POR ID

let elementoPorId = document.getElementById('parrafo1')
elementoPorId.innerHTML = 'HTML CARNAL'



// POR NOMBRE DE LA CLASE

let elementosPorClase = document.getElementsByClassName('parrafos')
console.log(elementosPorClase.length)
elementosPorClase[1].innerHTML = 'CSS'


// Por etiqueta

let elemenetosPorEtiquetas = document.getElementsByTagName('p')
console.log(elemenetosPorEtiquetas.length)
elemenetosPorEtiquetas[2].innerHTML = 'JavasCript'



// Modificando estilos

elementoPorId.style.background = 'black';
elementoPorId.style.color = 'white';
elementoPorId.style.borderRadius = '8px';
elementoPorId.style.width = '260px'
elementoPorId.style.textAlign = 'center'




