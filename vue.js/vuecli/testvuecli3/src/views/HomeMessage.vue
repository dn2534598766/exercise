<template>
  <div>
    <h2>我是首页信息</h2>
    <ul>
      <li v-for="item in message" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      message:['java','python','javascript','c++','golang']
    }
  }
}
</script>

<style>

</style>