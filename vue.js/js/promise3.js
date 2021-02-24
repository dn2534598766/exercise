Promise.all([
  new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('hello')
    },1000)
  }).then(data=>{
    console.log(data)
  },err=>{
    console.log(err)
  }),
  new Promise((resolve,reject)=>{
    setTimeout(()=>{
      reject('err message')
    },2000)
  }).then(data=>{
    console.log(data)
  },err=>{
    console.log(err)
  })
])