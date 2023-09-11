var a = document.getElementById('dibujoLineas')
var lienzo = a.getContext('2d')



function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath()
    lienzo.strokeStyle = color
    lienzo.moveTo(xinicial, yinicial)
    lienzo.lineTo(xfinal, yfinal)
    lienzo.stroke()
    lienzo.closePath()
}