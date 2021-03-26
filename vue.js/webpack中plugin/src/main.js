const {sum,sub} =require('./js/a.js')
import {sum2,sub2} from './js/es6.js'
console.log(sum(30,20))
console.log(sub(30,10))
console.log(sum2(100,200))
console.log(sub2(50,10))
require('./css/a.css')
require('./css/splice.less')
document.writeln('<p>你好啊!</p>')

import Vue from 'vue'
// const App = {
//   template:`
//     <div>
//       <h2>Talk is cheap,show me the code.</h2>
//       <p>{{message}}</p>
//     </div> `
//   ,
//   data(){
//     return {
//       message:'我是vue实例'
//     }
//   }
// }
import App from './vue/App.vue'
 new Vue({
  el:'#app',
  template:'<App></App>'
  ,
  components:{
    App
  }
})