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
tree.reco()
console.log(tree)

let n = 10


class ArbolBinario{
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }

    add(){
        if(this.value > value){
            if(this.left = null) this.left = new ArbolBinario(value)
            else this.left.add(value)
        }
    }
}
