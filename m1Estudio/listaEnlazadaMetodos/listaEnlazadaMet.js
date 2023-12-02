function Lista() {
    this.head = null
}

function Nodo(value) {
    this.value = value
    this.next = null
}

Lista.prototype.add = function (value) {
    if (this.head === null) this.head = new Nodo(value)
    else {
        let refe = this.head
        while (refe.next) {
            refe = refe.next
        }
        refe.next = new Nodo(value)
    }
}

Lista.prototype.search = function (value) { 
    if(!this.head) return false
    else {
        let refe = this.head
        while(refe){
            if(refe.value === value) return true
            refe = refe.next
        }
    }
    return false
}

// Lista.prototype.search = function(value) {
//     if (this.head.value === value) return true
//     else {
//         let refe = this.head
//         while(refe.next !== null) {
//             if(refe.next.value === value) return true
//             refe = refe.next
//         }
//     }
//     return false
// }

Lista.prototype.combine = function(lista1, lista2){
    let arr = [lista1.head.value, lista2.head.value]
    let refe = lista1.head
    let refe2 = lista2.head
    while(refe.next !== null){
        arr.push(refe.next.value)
        arr.push(refe2.next.value)
        refe2 = refe2.next
        refe = refe.next
    }
    let listaCombine = new Lista()
    for(let i = 0; i < arr.length; i++){
        listaCombine.add(arr[i])
    }
    return listaCombine
}

Lista.prototype.substitution = function(value, newValue){
    if(this.head.value === value) return this.head.value = newValue
     else {
        let refe = this.head
        while(refe.next){
            if(refe.next.value === value){
               return refe.next.value = newValue
            } else {
                refe = refe.next
            }
        }
    }
    return 'el dato no existe'
}


Lista.prototype.substitutionNodos = function(value, newNodo){
    if(this.head.value === value) {
        let refe = this.head.next
        this.head = newNodo
        this.head.next = refe
    } else {
        let refe = this.head
        while(refe.next !== null){
            if(refe.next.value === value) {
                let refe2 = refe.next.next
                refe.next = newNodo
                refe.next.next = refe2
            } else {
                refe = refe.next
            }
        }
    }
}


let nodo = new Nodo()

let list = new Lista()
list.add('Alfred')
list.add('Tom')
list.add('Dario')
list.add('Gabriel')
list.add('Lobo')
// list.substitution('Dario', [5,6,7,8])
// list.substitution('Alfred', nodo)
// list.substitutionNodos('Alfred', nodo)
list.substitutionNodos('Gabriel', nodo)


let list2 = new Lista()
list2.add('Joselito')
list2.add('Rolando')
list2.add('Maicol')
list2.add('David')
list2.add('Cou')

// console.log(list)
console.log(JSON.stringify(list, null, 2))
// console.log(list.search('Tom'))

// let resultado = list.combine(list, list2)
// console.log(JSON.stringify(resultado, null, 2))