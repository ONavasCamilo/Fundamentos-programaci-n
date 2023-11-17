function clickMe()
{
 	colorcito = "gold"
	grosorLienzo = 4
}
function clickMo()
{
 	colorcito = "black"
	grosorLienzo = 4
}
function clickMa()
{
 	colorcito = "blue"
	grosorLienzo = 4
}
function clickMi()
{
 	colorcito = "white"
	grosorLienzo = 4
}
function clickImg()
{
	colorcito = "#802B1A"
	grosorLienzo = 20
}


var dorado = document.getElementById("uIElementGold");
var negro = document.getElementById("uIElementBlack");
var azul = document.getElementById("uIElementBlue");
var blanco = document.getElementById("uIElementWhite");
var imagen = document. getElementById("uIElementImg");


var areaCanvas = document.getElementById("canvasis");
var lienzo = areaCanvas.getContext("2d");
var x = 200;
var y = 200;
var colorcito;
var grosorLienzo = 4;

var teclas =
{
 UP: 38,
 DOWN: 40,
 LEFT: 37,
 RIGHT: 39,
 UPRIGHT: 86,
 DOWNRIGHT: 66,
 UPLEFT: 78,
 DOWNLEFT: 77
 }
console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);

function dibujarLinea(color, grosorLienzo, xinicial,yinicial,xfinal,yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = grosorLienzo;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}


function dibujarTeclado(evento)
{
  var movimiento = 10;
  switch(evento.keyCode)
  {
    case teclas.UP:
    dibujarLinea(colorcito,grosorLienzo, x, y, x, y - movimiento)
    y = y - movimiento;
    console.log("Botón hacia arriba oprimido")
      break;
    case teclas.DOWN:
    dibujarLinea(colorcito, grosorLienzo, x, y, x, y + movimiento)
    y = y + movimiento;
    console.log("Botón hacia abajo oprimido")
    break;
    case teclas.LEFT:
    dibujarLinea(colorcito, grosorLienzo, x, y, x - movimiento, y)
    x = x - movimiento;
    console.log("Botón hacia la izquierda oprimido")
    break;
    case teclas.RIGHT:
    dibujarLinea(colorcito, grosorLienzo, x, y, x + movimiento, y)
    x = x + movimiento;
    console.log("Botón hacia la derecha oprimido")
    break;
		case teclas.UPRIGHT:
		dibujarLinea(colorcito, grosorLienzo, x, y, x + movimiento, y - movimiento)
		x = x + movimiento;
		y = y - movimiento;
		break;
		case teclas.DOWNRIGHT:
		dibujarLinea(colorcito, grosorLienzo, x, y, x - movimiento, y + movimiento)
		x = x - movimiento;
		y = y + movimiento;
	  break;
		case teclas.UPLEFT:
		dibujarLinea(colorcito, grosorLienzo, x, y, x - movimiento, y - movimiento)
		x = x - movimiento;
		y = y - movimiento;
		break;
		case teclas.DOWNLEFT:
		dibujarLinea(colorcito, grosorLienzo, x, y, x + movimiento, y + movimiento)
		x = x + movimiento;
		y = y + movimiento;
		break
  }
}
