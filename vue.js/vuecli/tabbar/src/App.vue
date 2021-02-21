<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item>
        <img src="./assets/img/home.svg" slot="img"/>
        <img src="./assets/img/home_active.svg" slot="img-active">
        <div slot="text">首页</div>
      </tab-bar-item>
      <tab-bar-item>
        <img src="./assets/img/sort.svg" slot="img"/>
        <img src="./assets/img/sort_active.svg" slot="img-active">
        <div slot="text">分类</div>
      </tab-bar-item>
      <tab-bar-item>
        <img src="./assets/img/cart.svg" slot="img"/>
        <img src="./assets/img/cart_active.svg" slot="img-active">
        <div slot="text">购物车</div>
      </tab-bar-item>
      <tab-bar-item>
        <img src="./assets/img/profile.svg" slot="img"/>
        <img src="./assets/img/profile_active.svg" slot="img-active">
        <div slot="text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './views/TabBar/TabBar'
import TabBarItem from './views/TabBar/TabBarItem'
export default {
  name: 'App',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>
@import './assets/css/base.css';
</style>
