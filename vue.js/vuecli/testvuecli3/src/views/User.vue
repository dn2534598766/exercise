<template>
  <div>
    <h2>我是用户界面</h2>
    <h2>{{userId}}</h2>
    <h2>{{$route.params.id}}</h2>
  </div>
</template>

<script>
export default {
  computed:{
    userId(){
      return this.$route.params.id
    }
  },
  created(){
    console.log('created')
  }
}
</script>

<style>

</style>