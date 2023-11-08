import { calculadora, pantallaSpan } from "./const.js";

let ultimoSigno = null

calculadora.addEventListener('click', (e) => {
    let target = e.target
    if (target.matches('.boton__c')) pantallaSpan.textContent = '0'

     else if (target.matches('.boton__dividir')) {
          if (pantallaSpan.textContent === '0') pantallaSpan.textContent = '÷'
          else if (pantallaSpan.textContent.length >= 1) pantallaSpan.textContent += '÷'
        }

     else if (target.matches('.boton__multiplicar')) {
         if (pantallaSpan.textContent === '0') pantallaSpan.textContent = '×'
        else if (pantallaSpan.textContent.length >= 1) pantallaSpan.textContent += target.textContent
     }

     else if(target.matches('.boton__borrar')) {
        if (pantallaSpan.textContent === '0') return

     }
})