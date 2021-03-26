import axios from 'axios'

// export function request(config){
//   const instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })

//   return instance(config)
// }

// export function request(config,success,failure){
//   const instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })

//   instance(config).then(res=>{
//     success(res)
//   }).catch(err=>{
//     failure(err)
//   })
// }

// export function request(config){
//   const instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })

//   instance(config.url).then(res=>{
//     config.success(res)
//   }).catch(err=>{
//     config.failure(err)
//   })
// }

export function request(config,success,failure){
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  instance.interceptors.response.use(res=>{
    return res.data
  },err=>{
    console.log(err)
  })
  instance(config).then(res=>{
    success(res)
  }).catch(err=>{
    failure(err)
  })
}

// export function request(config){
//   const instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })

//   instance(config).then(res=>{
//     config.success(res)
//   }).catch(err=>{
//     config.failure(err)
//   })
// }

// export function request(config){
//   const instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })

//   instance.interceptors.request.use(res=>{
//     return res.data
//   },err=>{
//     console.log(err)
//   })

//   instance(config.url).then(res=>{
//     config.success(res)
//   }).catch(err=>{
//     config.failure(err)
//   })
  
// }