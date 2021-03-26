<template>
  <tab-bar>
      <tab-bar-item path="/home">
        <img src="~assets/img/home.svg" slot="img"/>
        <img src="~assets/img/home_active.svg" slot="img-active">
        <div slot="text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/sort">
        <img src="~assets/img/sort.svg" slot="img"/>
        <img src="~assets/img/sort_active.svg" slot="img-active">
        <div slot="text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img src="~assets/img/cart.svg" slot="img"/>
        <img src="~assets/img/cart_active.svg" slot="img-active">
        <div slot="text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img src="~assets/img/profile.svg" slot="img"/>
        <img src="~assets/img/profile_active.svg" slot="img-active">
        <div slot="text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/TabBar/TabBar'
import TabBarItem from 'components/TabBar/TabBarItem'
export default {
  components:{
    TabBarItem,
    TabBar
  }
}
</script>

<style>

</style>