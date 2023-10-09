
const clock = () => {

const currentMoment = new Date()

let hour = currentMoment.getHours()
let minute = currentMoment.getMinutes()
let second = currentMoment.getSeconds()

// console.log(second) 

let str_segundo = new String (second)
if (str_segundo.length == 1){
   second = "0" + second
}

let str_minuto = new String (minute)
if (str_minuto.length == 1){
   minute = "0" + minute
}

let str_hora = new String (hour)
if (str_hora.length == 1){
   hour = "0" + hour
}


 printableHours = `${hour}:${minute}:${second}`

document.form_reloj.reloj.value = printableHours

setTimeout("clock()", 1000);
}

let f = new Date();
// document.write(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());