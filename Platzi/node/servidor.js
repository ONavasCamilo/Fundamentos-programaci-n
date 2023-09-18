var cafecito = require('express')
var aplicacion = cafecito()

aplicacion.get('/', inicio)
aplicacion.get('/cursos', cursos)

function inicio(peticion, resultado){
    resultado.send('este es el <strong>home<strong>')
}

function cursos(peticion, resultado){
resultado.send('estos son los <strong>cursos<strong>')
}

aplicacion.listen(8989)