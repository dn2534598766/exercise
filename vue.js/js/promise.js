new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve()
  },1000)
}).then(()=>{
  console.log('hello vue')
  console.log('hello vue')
  console.log('hello vue')
  console.log('hello vue')
  console.log('hello vue')

  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve()
    },1000)
  }).then(()=>{
    console.log('hello js')
    console.log('hello js')
    console.log('hello js')
    console.log('hello js')
    console.log('hello js')

    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        reject('err message')
      },1000)
    }).then(()=>{
      console.log('hello python')
      console.log('hello python')
      console.log('hello python')
      console.log('hello python')
      console.log('hello python')
    }).catch((err)=>{
      console.log(err)
    })
  })
})