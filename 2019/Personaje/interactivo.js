alert("Presta mucha atención y recuerda respondar cada pregunta teniendo en cuenta que:\n -Número 1 es SÍ\n -Número 2 es NO");
var sombrero = prompt("1.Primera pregunta\n¿Quieres que tu personaje lleve sombrero?\n-Responde con números\n 1=SÍ\n 2=NO");
var zapatos = prompt("2.Segunda pregunta\n¿Quieres que tu personaje lleve zapatos?\n-Responde con números\n 1=SÍ\n 2=NO");
var jeje = document.getElementById("personajes");
var lineas = jeje.getContext("2d");
if(sombrero == 1)
{
  lineas.beginPath();
  lineas.fillStyle = "red";
  lineas.fillRect(180,25,90,45);//supuesto sombrero
  lineas.stroke();
  lineas.closePath()//termina sombrero
  lineas.beginPath();
  lineas.fillStyle = "black";
  lineas.fillRect(200,70,50,50);//cabeza
  lineas.stroke();
  lineas.closePath();//termina la cabeza...
  lineas.beginPath();
  lineas.fillStyle = "black";
  lineas.fillRect(215,120,20,26);//cuello
  lineas.stroke();
  lineas.closePath();//termina cuello
  lineas.beginPath();
  lineas.fillStyle = "black";
  lineas.fillRect(176,140,100,130);//cuerpo
  lineas.stroke();
  lineas.closePath();//termina cuerpo
  lineas.beginPath();
  lineas.fillStyle = "black";
  lineas.fillRect(198,270,23,40);//pierna izquierdo
  lineas.stroke();
  lineas.closePath();//termina pierna izquierdo
  lineas.beginPath();
  lineas.fillStyle = "black";
  lineas.fillRect(233,270,23,40);//pierna derecha
  lineas.stroke();
  lineas.closePath();//termina pierna derecha
}
else if(sombrero == 2)
{
  lineas.beginPath();
  lineas.fillStyle = "black";
  lineas.fillRect(200,70,50,50);//cabeza
  lineas.stroke();
  lineas.closePath();//termina la cabeza...
  lineas.beginPath();
  lineas.fillStyle = "black";
  lineas.fillRect(215,120,20,26);//cuello
  lineas.stroke();
  lineas.closePath();//termina cuello
  lineas.beginPath();
  lineas.fillStyle = "black";
  lineas.fillRect(176,140,100,130);//cuerpo
  lineas.stroke();
  lineas.closePath();//termina cuerpo
  lineas.beginPath();
  lineas.fillStyle = "black";
  lineas.fillRect(198,270,23,40);//pierna izquierdo
  lineas.stroke();
  lineas.closePath();//termina pierna izquierdo
  lineas.beginPath();
  lineas.fillStyle = "black";
  lineas.fillRect(233,270,23,40);//pierna derecha
  lineas.stroke();
  lineas.closePath();//termina pierna derecha
}
else{
document.write("TE DIJE QUE PUSIERAS NÚMEROS N Ú M E R O S");
}
if(zapatos == 1)
{
  lineas.beginPath();
  lineas.fillStyle = "red";
  lineas.fillRect(233,280,23,30);//zapatos derecho
  lineas.stroke();
  lineas.closePath();//termina zapatos
  lineas.beginPath();
  lineas.fillStyle = "red";
  lineas.fillRect(198,280,23,30);//zapatos izquierdo
  lineas.stroke();
  lineas.closePath();
}
else if(zapatos == 2)
{
  lineas.beginPath();
  lineas.fillStyle = "black";
  lineas.fillRect(200,70,50,50);//cabeza
  lineas.stroke();
  lineas.closePath();//termina la cabeza...
  lineas.beginPath();
  lineas.fillStyle = "black";
  lineas.fillRect(215,120,20,26);//cuello
  lineas.stroke();
  lineas.closePath();//termina cuello
  lineas.beginPath();
  lineas.fillStyle = "black";
  lineas.fillRect(176,140,100,130);//cuerpo
  lineas.stroke();
  lineas.closePath();//termina cuerpo
  lineas.beginPath();
  lineas.fillStyle = "black";
  lineas.fillRect(198,270,23,40);//pierna izquierdo
  lineas.stroke();
  lineas.closePath();//termina pierna izquierdo
  lineas.beginPath();
  lineas.fillStyle = "black";
  lineas.fillRect(233,270,23,40);//pierna derecha
  lineas.stroke();
  lineas.closePath();//termina pierna derecha
}
