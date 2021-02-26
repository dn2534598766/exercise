<template>
  <div id="app">
    <h2>{{$store.state.counter}}</h2>
    <h2>大于20岁的学生信息:{{$store.getters.moreAgeStu(20)}}</h2>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
    <button @click="increaseCount(5)">+5</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    increase(){
      this.$store.commit('addCount')
    },
    decrease(){
      this.$store.commit('subCount')
    },
    increaseCount(count){
      this.$store.commit('increaseCount',count)
    }
  }
}
</script>

<style>

</style>
