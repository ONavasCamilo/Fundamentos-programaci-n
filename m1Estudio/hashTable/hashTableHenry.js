function hashTable() {
    this.numBuckets = 35
    this.cajones = []
    this.hash = function(value) {
        let acc = 0
        for (let i = 0; i < value.length; i++) {
            acc = acc + value.charCodeAt(i)
        }
        return acc % this.numBuckets 
    }
}