var c = document.getElementById("canvasi");
var lienzo = c.getContext("2d");

  function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
  }
  var color= "blue";
dibujarLinea(color, 150, 150, 160, 140);
