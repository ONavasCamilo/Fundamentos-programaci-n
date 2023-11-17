var lienza = document.getElementById("lienzes");
		if (lienza && lienza.getContext) {
		var contexto = lienza.getContext("2d");
			if (contexto) {
					var X = lienza.width/2;
					var Y = lienza.height/2;
					var r = 25;
					contexto.strokeStyle = "#006400";
					contexto.fillStyle = "#6ab150";
					contexto.lineWidth = 5;
					contexto.arc(X,Y,r,0,2*Math.PI);
					contexto.fill();
					contexto.stroke();
			}
		}

    function clickMe() {
      colorcito = "green"
   }


   var lienzos = document.getElementById("lienzos");
   		if (lienzos && lienzos.getContext) {
   		var contexto = lienzos.getContext("2d");
   			if (contexto) {
   					var X = lienzos.width/2;
   					var Y = lienzos.height/2;
   					var r = 25;
   					contexto.strokeStyle = "#686F5E";
   					contexto.fillStyle = "black";
   					contexto.lineWidth = 5;
   					contexto.arc(X,Y,r,0,2*Math.PI);
   					contexto.fill();
   					contexto.stroke();
   			}
   		}

       function clickMo() {
         colorcito = "black"
      }

      var lienzas = document.getElementById("lienzas");
         if (lienzas && lienzas.getContext) {
         var contexto = lienzas.getContext("2d");
           if (contexto) {
               var X = lienzas.width/2;
               var Y = lienzas.height/2;
               var r = 25;
               contexto.strokeStyle = "#ABACA9";
               contexto.fillStyle = "white";
               contexto.lineWidth = 5;
               contexto.arc(X,Y,r,0,2*Math.PI);
               contexto.fill();
               contexto.stroke();
           }
         }

          function clickMa() {
            colorcito = "white"
         }












var areaCanvas = document.getElementById("canvasis");
var lienzo = areaCanvas.getContext("2d");
var x = 200;
var y = 200;
var colorcito = "blue";

var teclas =
{
 UP: 38,
 DOWN: 40,
 LEFT: 37,
 RIGHT: 39
}
console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);

function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 4;
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
    dibujarLinea(colorcito, x, y, x, y - movimiento)
    y = y - movimiento;
    console.log("Botón hacia arriba oprimido")
      break;
    case teclas.DOWN:
    dibujarLinea(colorcito, x, y, x, y + movimiento)
    y = y + movimiento;
    console.log("Botón hacia abajo oprimido")
    break;
    case teclas.LEFT:
    dibujarLinea(colorcito, x, y, x - movimiento, y)
    x = x - movimiento;
    console.log("Botón hacia la izquierda oprimido")
    break;
    case teclas.RIGHT:
    dibujarLinea(colorcito, x, y, x + movimiento, y)
    x = x + movimiento;
    console.log("Botón hacia la derecha oprimido")
    break
  }
}
