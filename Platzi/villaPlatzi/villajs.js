var vp = document.getElementById('villaPlatzi')
var papel = vp.getContext('2d')

var fondo = {
    url: 'fondo.png',
    cargaOK: false
}

var vaca = {
    url: 'vaca.png',
    cargaOK: false
}

fondo.objeto = new Image()
fondo.objeto.src = fondo.url
fondo.objeto.addEventListener('load', cargarFondo)

vaca.objeto = new Image()
vaca.objeto.src = vaca.url
vaca.objeto.addEventListener('load', cargarVaca)


function dibujar() {
    if (fondo.cargaOK == true) {
        papel.drawImage(fondo.objeto, 0, 0)
    }
    if (vaca.cargaOK) {
        var cant = aleatorio(5,15)
        console.log(cant)
        for (var i = 0; i < cant; i++) {
            var x = aleatorio(0, 7)
            var y = aleatorio(0, 7)
            var x = x * 60
            var y = y * 60
            papel.drawImage(vaca.objeto, x, y)

        }
    }
}

function cargarFondo() {
    fondo.cargaOK = true
    dibujar()
}

function cargarVaca() {
    vaca.cargaOK = true
    dibujar()
}

function aleatorio(min, maxi) {
    let resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min
    return resultado
}