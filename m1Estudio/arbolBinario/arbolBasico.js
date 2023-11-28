// function Tree(value){
//     this.data = value
//     this.right = null
//     this.left = null
// }

// Tree.prototype.add = function(value){
//     if(value < this.data){
//         if(this.left === null){
//             this.left = new Tree(value)
//         } else {
//             this.left.add(value)
//         }
//     } else if (value > this.data){
//         if(this.right === null){
//             this.right = new Tree(value)
//         } else {
//             this.right.add(value)
//         }
//     }
// }

// let tree = new Tree(50)
// tree.add(20)
// tree.add(70)
// tree.add(30)
// tree.add(65)
// tree.add(20)
// tree.add(70)
// tree.add(30)
// tree.add(65)

// console.log(tree)


function Tree(value){
    this.value = value
    this.left = null
    this.right = null
}

Tree.prototype.add = function(value){
    if (this.value > value) {
        if(!this.left) this.left = new Tree(value)
        else this.left.add(value)
    } else {
        if(!this.right) this.right = new Tree(value)
        else this.right.add(value)
    }
}

Tree.prototype.reco = function(){
    contenedor.push(this.value)
    if(this.left) this.left.reco()
    if(this.right) this.right.reco()
}

let tree = new Tree(50)
tree.add(23)
tree.add(25)
tree.add(60)
tree.add(58)
tree.add(2)
tree.add(5)
tree.add(65)
// tree.reco()
// console.log(tree)

let n = 10


class ArbolBinario{
    constructor(value = null){
        this.value = value
        this.right = null
        this.left = null
    }

    add(value){
        if(this.value === null) return this.value = value

        if(value === this.value) {
            console.log('El valor ya existe en el arbol')
            return
        }

        if(this.value > value){
            if(this.left === null) this.left = new ArbolBinario(value)
            else this.left.add(value)
        } else {
            if(this.right === null) this.right = new ArbolBinario(value)
            else this.right.add(value)
        }
    }

    reco(){
        const contenedor = []
        this.recoHelper(contenedor)
        return contenedor
    }

    recoHelper(contenedor){
    contenedor.push(this.value)
    if(this.left) this.left.recoHelper(contenedor)
    if(this.right) this.right.recoHelper(contenedor)
    }

    // preOrderTraversal(node) { //gpt
    //     if (node !== null) {
    //         // Paso 1: Visitar el nodo actual
    //         console.log(node.value);
    
    //         // Paso 2: Recorrer el subárbol izquierdo en preorden
    //         preOrderTraversal(node.left);
    
    //         // Paso 3: Recorrer el subárbol derecho en preorden
    //         preOrderTraversal(node.right);
    //     }
    // }

}

let arbolito = new ArbolBinario()

arbolito.add(1)
arbolito.add(10)
arbolito.add(40)
arbolito.add(12)

// console.log(arbolito)
// console.log(arbolito.reco())


function BinarySearchTree(value){
    this.value = value
    this.left = null
    this.right = null
}

BinarySearchTree.prototype.insert = function(value){
    if(this.value > value){
        if(this.left) this.left.insert(value)
        else this.left = new BinarySearchTree(value)
    } else {
        if(this.right) this.right.insert(value)
        else this.right = new BinarySearchTree(value)
    }
}

BinarySearchTree.prototype.contains = function(value){
    if(this.value === value) return true
    if(this.value > value){
        if(this.left) return this.left.contains(value)
        // if(this.left.value === value) return true
      else return false 
 } else {
    if(this.right) return this.right.contains(value)
    else return false
 }
   
}

BinarySearchTree.prototype.size = function(){
    if(!this.left && !this.right) return 1
    if(!this.left && this.right) return 1 + this.right.size()
    if(this.left && !this.right) return 1 + this.left.size()
    if(this.left && this.right) return 1 + this.left.size() + this.right.size()
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
    switch(order){
        case "post-order": 
       // izq - der - root
        if(this.left) this.left.depthFirstForEach(cb, order)
        if(this.right) this.right.depthFirstForEach(cb, order)
        cb(this.value)
       break;
            case "pre-order":
        // root - izq - der
        cb(this.value)
        if(this.left) this.left.depthFirstForEach(cb, order)
        if(this.right) this.right.depthFirstForEach(cb, order)

       break;
                default:   
        // in-order izq - root - der
        if(this.left) this.left.depthFirstForEach(cb, order)
        cb(this.value)
        if(this.right) this.right.depthFirstForEach(cb, order)
        break;
    }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = []){
    cb(this.value)
    if(this.left) array.push(this.left)
    if(this.right) array.push(this.right)
    
    if(array.length) {
        array.shift().breadthFirstForEach(cb, array)
    }
}