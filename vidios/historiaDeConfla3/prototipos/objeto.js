class Animal {
    constructor(especie, edad, color) {
        this.especie = especie
        this.edad = edad
        this.color = color
        this.informacion = `soy ${this.especie} tengo ${this.edad} 
        y soy de color ${color}`
    }
    verInfo() {
        document.write(this.informacion + '<br> ')
    }
}

class Perro extends Animal {
    constructor(especie, edad, color, raza) {
        super(especie, edad, color)
        this.raza = null
    }
    // static ladrar(){

    // }
    set setRaza(newName) {
        this.raza = newName
    }
    get getRaza(){
        return this.raza
    }
}
const perro = new Perro('perro', '5', 'marron', 'doberman')
const gato = new Animal('gato', '5', 'rojo')
const pajaro = new Animal('pajaro', '8', 'amarillo')


// document.write(perro.informacion + '<br>')
// document.write(gato.informacion + '<br>')
// document.write(pajaro.informacion + '<br>')

perro.setRaza = 'pedro'
document.write(perro.getRaza)

// Perro.ladrar()
// gato.verInfo()
// pajaro.verInfo()