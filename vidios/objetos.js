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
console.log(camilo.hasOwnProperty('nombre'))
console.log(camilo.hasOwnProperty('nacimiento'))