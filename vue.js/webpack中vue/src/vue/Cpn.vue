<template>
  <div>
    <h2 class="title">我是Cpn实例</h2>
    <p>{{message}}</p>
    <button @click="btnClick"></button>
  </div>
</template>

<script>
  export default {
    name:'Cpn',
    data(){
      return {
        message:'hello'
      }
    },
    methods:{
      btnClick(){
        console.log('我是Cpn实例')
      }
    }
  }
</script>

<style scoped>
  .title{
    color:red
  }
</style>