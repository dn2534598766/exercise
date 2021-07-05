const fs = require('fs')

// fs.mkdir('./a/b',{recursive:true},err=>{
//     if(err) throw err
//     console.log('创建文件夹成功!')
// })


// fs.readdir('./',{withFileTypes:true},(err,file)=>{
//     if(err) throw err
//     console.log(file)
// }) 

fs.rmdir('./a',{recursive:true},err=>{
    if(err) throw err
    console.log('删除文件夹成功!')
})