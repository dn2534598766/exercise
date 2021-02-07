<template>
  <div>
    <h2 class="title">Talk is cheap,show me the code.</h2>
    <p>{{message}}</p>
    <Cpn></Cpn>
  </div> 
</template>

<script>
  import Cpn from './Cpn.vue'
  export default {
    name:'App',
    data(){
      return {
        message:'我是vue实例,哈哈哈'
      }
    },
    components:{
      Cpn
    }
  }
</script>

<style scoped>
.title{
  color:green
}
</style>