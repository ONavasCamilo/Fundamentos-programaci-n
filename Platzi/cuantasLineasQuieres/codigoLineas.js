var elBoton = document.getElementById('boton')
var elTexto = document.getElementById('textin')
var a = document.getElementById('dibujoLineas')
var ancho = a.width
var lienzo = a.getContext('2d')

elBoton.addEventListener('click', dibujoPorClick)


function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath()
    lienzo.strokeStyle = color
    lienzo.moveTo(xinicial, yinicial)
    lienzo.lineTo(xfinal, yfinal)
    lienzo.stroke()
    lienzo.closePath()
}

function dibujoPorClick() {

    var lineas = parseInt(elTexto.value)
    var yi, xf
    var espacio = ancho / lineas
    colorAzul = 'blue'
    colorRojo = 'red'

    for (var i = 0; i < lineas; i++) {
        yi = espacio * i
        xf = espacio * (i + 1)
        dibujarLineas(colorRojo, 0, yi, xf, 300)
    }
}