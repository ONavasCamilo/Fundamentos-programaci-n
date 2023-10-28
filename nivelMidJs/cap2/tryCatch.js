// try {
//     lasksalsla
// }
// catch(err){
//     console.log('mi pana este es el error k nos anda jodiendo >', err)
// }
// try {
//     function { }// ERROR DE SyntaxError no se cambia y si lo muestrael error navegador
// }
// catch(err){
//     console.log('mi pana este es el error k nos anda jodiendo >', err)
// }

const $id = (id) => document.getElementById(id)

const sendButton = $id('snd-nota')

sendButton.addEventListener('click', ()=>{
    let resultado, mensaje
    try{
        resultado = parseInt ($id('nota').value)
        if (isNaN(prevResultado)) {
            throw 'gracioso!'
        }
       mensaje =  definirMensaje(prevRes)
       resultado = verificarAprobacion(8, 5, prevRes)
    } catch(e){
        resultado = '¿graciosito?'
        mensaje = 'intentas hackear el sitio?'
    }
    abrirModal(resultado, mensaje)
})

const definirMensaje = (pr) => {
    let resultado
    switch (pr) {
        case 1: resultado = 'que malo de mrd'
        break;
        case 2: resultado = 'que malo de mrd un 2'
        break;
        case 3: resultado = 'que malo de mrd ya casi un 3'
        break;
        case 4: resultado = 'que malo de mrd muy mal 4'
        break;
        case 5: resultado = 'que malo de mrd vas mejor'
        break
        case 6: resultado = 'que malo de mrd sigue subiendo'
        break;
        case 7: resultado = 'que malo de mrd ey buenas a todos'
        break;
        case 8: resultado = 'gg muy buena'
        break;
        case 9: resultado = 'me estoy durmiendo'
        break;
         case 10: resultado = 'necesito descansar ya'
        break;
        default: resultado = false
    }
}

const verificarArobacion = (nota1, nota2, prevRes) => {
    promedio = (nota1 + nota2 + prevRes) / 3
    if(promedio >= 7){
        return "<span class='green'>APROBADO</span>"
    }
    return "<span class='red'>DESAPROBADO</span>"
}

const abrirModal = (res, msg)=>{
    console.log(res)
    console.log(msg)
}

