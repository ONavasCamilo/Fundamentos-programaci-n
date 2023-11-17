function nFactorial(n) {
    // if(Math.sign(n) === -1) throw `${n}: no se pueden números negativos`
    if(Math.sign(n) === -1) new Error `${n}: no se pueden números negativos`
    if(n > -1 && n < 2) return n
    return n * nFactorial(n - 1)
}

// console.log(nFactorial(1))

function nFibonnaci(n) {
    if(n === 0 || n === 1) return n
    return nFibonnaci(n-2) + nFibonnaci(n-1)
}

// console.log(nFibonnaci(6))

function Queue() {
    this.array = []
}

Queue.prototype.enqueue = function(value) {
    this.array.push(value)
}

Queue.prototype.queue = function() {
    return this.array.shift()
}

Queue.prototype.size = this.array.length