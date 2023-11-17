var d = document.getElementById("dibujote");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var colorcito = "blue";
while(l < lineas)
{
  yi = 10 * l;
  xf = 10 * (l - 1);
  dibujarLinea(colorcito, 300, yi, xf, 0);
  l = l + 1;
  yi = 10 * l;
  xf = 10 * (l - 1);
  dibujarLinea(colorcito, 0, yi, xf, 300);
  yi = 10 * l;
  xf = 10 * (l - 1);
  dibujarLinea(colorcito, 0, yi, xf, 0);
  yi = 10 * l;
  xf = 10 * (l - 1);
  dibujarLinea(colorcito, 300, yi, xf, 300);
}
  dibujarLinea(colorcito, 0,0,299,1);
  dibujarLinea(colorcito,299,1,299,299);
  dibujarLinea(colorcito, 0,0,1,299);
  dibujarLinea(colorcito,1,299,299,299);
function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
