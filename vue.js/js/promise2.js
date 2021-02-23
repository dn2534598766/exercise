new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('message')
  },1000)
}).then(data=>{
  console.log(data+' data')
},err=>{
  console.log(err+' err')
})