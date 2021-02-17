<template>
  <div class="home">
    <h2>我是首页</h2>
    <router-link to="/home/message" tag="button">首页信息</router-link>
    <router-link to="/home/news" tag="button">首页新闻</router-link>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'Home'
}
</script>
