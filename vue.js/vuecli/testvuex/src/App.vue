<template>
  <div id="app">
    <h2>{{$store.state.counter}}</h2>
    <h2>大于20岁的学生信息:{{$store.getters.moreAgeStu(20)}}</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
    <button @click="increaseCount(5)">+5</button>
    <button @click="addStudent">添加学生信息</button>
    <button @click="addAttribute">添加属性</button>
    <button @click="deleteAttribute">删除属性</button>
    
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
    },
    // 另一种对象提交风格
    // increaseCount(count){
    //   this.$store.commit({
    //     type:'increaseCount',
    //     count
    //   })
    // },
    addStudent(){
      const student = {id:170,name:'php',age:38}
      this.$store.commit('addStudent',student)
    },
    addAttribute(){
      this.$store.commit('addAttribute')
      console.log(this.$store.state.info)
    },
    deleteAttribute(){
      this.$store.commit('deleteAttribute')
      console.log(this.$store.state.info)
    }
  }
}
</script>

<style>

</style>
