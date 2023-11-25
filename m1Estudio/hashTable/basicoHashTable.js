

    function moveBytes(i, buf, charCode, mult){
        buf[i] = (buf[i] + charCode * mult) << 1
        buf[i] = (buf[i] + mult) >> 3
    }

    function _hash(value) {
        let buf = new ArrayBuffer(buflen)
        let i
        let mult
        let charCode

        for (let c of value) {
            charCode = c.charCodeAt()

            for ( i = 0; i < buflen; i++) {
                mult = baseMult * (i + 1)
                moveBytes(i, buf, chardCode, mult)
            }
        }
        return buf
    }
    function hash(value) {
    let buflen = 32
    let baseMult = (buflen + value.length) / 5.73

    return _hash(value).toString('hex')
}

class HashTable{
 constructor() {
    this.table = {}
 }

 hash(value) {
    return hash(value)
 }
 insert(value) {
    let _hash = this.hash(`${value}`)
    this.table[_hash] = value
 }

 get() {
    
 }
}

const hashTable = new HashTable()
console.log(hashTable.hash('Hola'))