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
    <!-- <router-link :to="'/user/'+userId">用户</router-link>
    <router-link :to="{path:'/introduction',query:{name:'cuiyu',age:21,sex:'man'}}">简介</router-link> -->
    <button @click="userClick">用户</button>
    <button @click="introductionClick">简介</button>
    <!-- keep-alive可以有include跟exclude属性，include设置只有符合要求的组件会被缓存，exclude设置哪些组件不会缓存 -->
    <keep-alive exclude="Home">
      <router-view/>
    </keep-alive>
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
    },
    userClick(){
      this.$router.push('/user/'+this.userId)
    },
    introductionClick(){
      this.$router.push({
        path:'/introduction',
        query:{name:'rico',age:24,sex:'男'}
      })
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
