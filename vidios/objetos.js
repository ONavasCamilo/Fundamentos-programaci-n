let a = new String('hola')
// console.log(a)

const b = {}
// console.log(b)

const c = new Object()
// console.log(b)

// DENTRO DE UN OBJETO A LAS VARIABLES SE LE VAN A LLAMAR ATRIBUTOS/PROPIEDADES
// Y A LAS FUNCIONES METODOS
const camilo = {
    nombre: 'Camilo',
    apellido: 'Navas',
    edad: 21,
    pasatiempos: ['Jugar valorant', 'Comer rico', 'Aprender programación'],
    soltero: false,
    contacto: {
        email: 'navasochoa@hotmail.com',
        twitter: '@Nyzlow',
        celular: '3105554315'
    },
    // FUNCIÓN DENTRO DE OBJETO ES UN METODO
    saludar: function () {
        console.log('hola:)')
    },
    decirMiNombre: function () {
        console.log(`Mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años. Puedes
        seguirme como ${this.contacto.twitter} en twitter
        `)
    }
}

// console.log(camilo)
// console.log(camilo['nombre'])
// console.log(camilo['apellido'])
// console.log(camilo.nombre)
// console.log(camilo.apellido)
// console.log(camilo.edad)
// console.log(camilo.soltero)
// console.log(camilo.pasatiempos)
// console.log(camilo.pasatiempos[1])
// console.log(camilo.contacto)
// console.log(camilo.contacto.twitter)
// camilo.saludar()
// camilo.decirMiNombre()


// console.log(Object.keys(camilo))
// console.log(Object.values(camilo))
// console.log(camilo.hasOwnProperty('nombre'))
// console.log(camilo.hasOwnProperty('nacimiento'))




let pc = {
    nombre: 'NavasPc',
    procesador: 'Ryzen 7',
    ram: '8GB',
    espacio: '1TB',
    color: 'negro',
    aplicaciones: ['Rave', 'Visual Studio Code', 'Google Chrome', 'Zoom', 'AnyDesk', 'Steam',
        'UTorrent', 'RabbitVPN', 'Riot Client', 'Blitz'],
    juegos: ['Valorant', 'League Of Legends', 'Genshin Impact', 'Minecraft', 'FIFA 22', 'Fall Guys',
        'The Sims4', 'Crab Game', 'World Of Warcraft', 'Roblox', 'CSGO', 'Assasin Creed', 'Rocket League',
        'Aim Lab', 'Stumble Guys', 'Half Life 2', 'GTA V'],
    escritorio: {
        instalado: ['Archivos', 'Edge', 'Filmora 11', 'Security Defender Windows'],
        cursoJavas: ['Arrays', 'borradorEjercicios', 'bucles', 'controlDeFlujos', 'funciones',
            'funciones 2', 'objetos', 'operadores', 'operadoresDeComparacion', 'operadoresLogicos',
            'variables'],
        cursoYT: {
            platzi: ['copyCanvas', 'cuantasLineasQuieres', 'fizzBuzz', 'pokemones', 'villaPlatzi',
                'teclas', 'primerPasoCanvas', 'htmlYJsUnion', 'forNumeroAleatorio'],
            vidios: {
                historiaDeCofla: ['cofla', 'coflon'],
                sueltos: ['arraysMapReduce', 'bucleFor', 'objetos'],
            }
        }
    }
}

console.log(pc.escritorio.cursoYT.vidios.sueltos)