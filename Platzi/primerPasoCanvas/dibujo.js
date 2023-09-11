// getElementById es un METODO de document que trae un elemento(dibujito) a traves de su ID
var d = document.getElementById('dibujito')
// getContext es un METODO del canvas por variable d y se la el contexto 2d (existe 3d)
var lienzo = d.getContext('2d')

// // Para colocar lapiz en papel beginPath inicia el camino o comienza el trazo
// lienzo.beginPath()
// // escogemos variable o propiedad de color
// lienzo.strokeStyle = 'red'
// // moveTo metodo para mover lapiz donde arrancará linea
// lienzo.moveTo(100, 100)
// // lineTo dibuja o traza la linea, punto, arco. (este caso linea)
// lienzo.lineTo(200, 200)
// // dibuja la linea
// lienzo.stroke()
// // cerrar trazo
// lienzo.closePath()

// escribir otra linea (MAS FACIL CON FUNCIONES) reduccion, legibilidad, facilididad en depuracion
// y mantenimiento

// lienzo.beginPath()
// lienzo.strokeStyle = 'red'
// lienzo.moveTo(100, 100)
// lienzo.lineTo(200, 200)
// lienzo.stroke()
// lienzo.closePath()

// SE USA FUNCION CUANDO SE ESCRIBE MISMO CODIGO O CODIGO SIMILAR MUCHAS VECES CAMBIANDO SOLO VARIABL
// sin importar donde se ponga la función cargará primero.
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
lienzo.beginPath()
lienzo.strokeStyle = color
lienzo.moveTo(xinicial, yinicial)
lienzo.lineTo(xfinal, yfinal)
lienzo.stroke()  
lienzo.closePath()
}
//con la función podemos hacer todas las lineas que queramos
// dibujarLinea('red', 0, 0, 10, 300)
// dibujarLinea('red', 0, 10, 20, 300)
// dibujarLinea('red', 0, 20, 30, 300)
// dibujarLinea('red', 0, 30, 40, 300)
//se desea hacer incremento de variables yinicial y xfinal

var lineas = 30
var yi, xf
colorAzul = 'blue'
colorRojo = 'red'

// variable de while
// var l = 0

// while(l < lineas){
//     yi = 10 * l
//     xf = 10 * (l + 1)
//     dibujarLinea(colorRojo, 0, yi, xf, 300)
//     console.log('Linea '+ l)
//     // l++ alternativa para sumar 1, de otra forma si quieres cambiar valor dejar como esta.
//     l = l + 1
// }

// HECHO CON FOR 
for(var i=0; i < lineas; i++){
    yi = 10 * i
    xf = 10 * (i + 1)
    dibujarLinea(colorRojo, 0, yi, xf, 300)
}


// dibujarLinea(colorAzul, 1, 1, 1, 300)
// dibujarLinea(colorAzul, 0, 0, 0, 0)



