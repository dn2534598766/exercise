// let obj = require('./index')

// obj.add(5,2)
// obj.sub(5,2)
// console.log(a)

// let a = Buffer.allocUnsafe(20)

// console.log(a.fill('eric',5))
const a = Buffer.from('test')
const b = Buffer.from('djaid')
console.log(a.toString())
console.log(a.toJSON())
a.copy(b)
console.log(b.toString())