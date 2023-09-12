class Pakiman{
    constructor(n, v, a){
        this.nombre = n
        this.vida = v
        this.ataque = a 
        this.tipo = 'nombre'
    }
}

var cauchin  = new Pakiman('cauchin', 100, 30)
var pokacho = new Pakiman('Pokacho', 70, 20)
console.log(cauchin)
console.log(pokacho)