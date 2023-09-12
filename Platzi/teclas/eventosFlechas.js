var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
}

console.log(teclas)

document.addEventListener('keyup', dibujarTeclado)
var cuadro = document.getElementById('areaDeDibujo')
var papel = cuadro.getContext('2d')
var x = 110
var y = 110

dibujarLinea('red', x-1, y-1, x+1, y+1, papel)

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath()
    lienzo.strokeStyle = color
    lienzo.moveTo(xinicial, yinicial)
    lienzo.lineWidth = 3
    lienzo.lineTo(xfinal, yfinal)
    lienzo.stroke()
    lienzo.closePath()
}

function dibujarTeclado(evento) {
    var colorcin = 'blue'
    var movimiento = 10

    switch (evento.keyCode) {
        case teclas.UP:
            dibujarLinea(colorcin, x, y, x, y - movimiento, papel)
            y = y - movimiento
            break
        case teclas.DOWN:
            dibujarLinea(colorcin, x, y, x, y + movimiento, papel)
            y = y + movimiento
            break
        case teclas.LEFT:
            dibujarLinea(colorcin, x, y, x - movimiento, y, papel)
            x = x - movimiento
            break
        case teclas.RIGHT:
            dibujarLinea(colorcin, x, y, x + movimiento, y, papel)
            x = x + movimiento
        default:
            console.log('otra tecla')
    }
}


