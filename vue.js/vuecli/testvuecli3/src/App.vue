<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace active-class="active">这是home</router-link>
    <router-link to="/about" tag="button" replace active-class="active">这是about</router-link> -->
    <!-- <router-link to="/home" tag="button" replace>这是home</router-link>
    <router-link to="/about" tag="button" replace>这是about</router-link> -->
    <!-- <button @click="home">首页</button>
    <button @click="about">关于</button> -->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/'+userId">用户</router-link>
    <router-link :to="{path:'/introduction',query:{name:'cuiyu',age:21,sex:'man'}}">简介</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods:{
    home(){
      this.$router.replace('/home')
      console.log('home')
    },
    about(){
      this.$router.push('/about')
      console.log('about')
    }
  },
  data(){
    return {
      userId:'lisi'
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.active{
  color: red;
}
</style>
