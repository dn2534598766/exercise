const STORAGE ='storage'

export default {
  add(){
    return JSON.parse(window.sessionStorage.getItem(STORAGE) || '[]')
  },
  save(item){
    window.sessionStorage.setItem(STORAGE,JSON.stringify(item))
  }
}

