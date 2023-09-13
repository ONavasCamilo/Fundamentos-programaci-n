// funcion constructora

function Animal(nombre, genero) {
    this.nombre = nombre
    this.genero = genero
}
    //metodos agregados al propotito de la funcion constructora
    Animal.prototype.sonar = function () {
        console.log('hago sonidos porque estoy vivo')
    }

    Animal.prototype.saludar = function(){
        console.log(`Hola me llamo ${this.nombre}`)
    }


// HERENCIA PROTOTIPICA
function Perro(nombre, genero, tamanio){
        this.super = Animal
        this.super(nombre, genero)
        this.tamanio = tamanio

}


//perro esta heredando de Animal
Perro.prototype = new Animal()
Perro.prototype.constructor = Perro

// sobreescritura de metodos del prototipo padre en el hijo

Perro.prototype.sonar = function(){
    console.log('soy un perro y mi sonido es un ladrido')
}

Perro.prototype.ladrar = function(){
    console.log('guau guau')
}

const snoopy = new Perro('snoopy', 'macho', 'mediano')
lolaBunny = new Animal('Lola Bunny', 'hembra')

// console.log(snoopy)
// console.log(lolaBunny)

snoopy.sonar()
snoopy.ladrar()
snoopy.saludar()

lolaBunny.saludar()
lolaBunny.sonar()


