import axios from 'axios'

// export function request(config){
//   const instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })

//   return instance(config)
// }

export function request(config,success,error){
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })

  instance(config).then({
    success()
  }).catch({
    error()
  })
}