// let obj = require('./index')

// obj.add(5,2)
// obj.sub(5,2)
// console.log(a)

// let a = Buffer.allocUnsafe(20)

// console.log(a.fill('eric',5))
// const a = Buffer.from('test')
// const b = Buffer.from('djaid')
// console.log(a.toString())
// console.log(a.toJSON())
// a.copy(b) 
// console.log(b.toString())
const fs = require('fs')
// fs.readFile('a.txt',(err,data)=>{
//     console.log(data.toString())
// })
// fs.writeFile('a.txt','this is a test',err=>{
//     if(err) throw err
//     console.log('写入成功!')
// })

// const buf = Buffer.from('hello world!')
// fs.appendFile('a.txt',buf,err=>{
//     if(err) throw err
//     console.log('追加成功!')
// })

// fs.stat('a.txt',(err,stats)=>{
//     if(err) throw err 
//     console.log(stats)
//     console.log(stats.isFile())
//     console.log(stats.isDirectory()) 
// })

// fs.rename('a.txt','hello.txt',err=>{
//     if(err){
//         throw err
//     }
//     console.log('改名成功!')
// })

fs.unlink('hello.txt',err=>{
    if(err) throw err
    console.log('删除文件成功!')
})