<template>
  <div  id="home">
    <nav-bar class="home-bar">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata} from 'network/home'

export default {
  name:"Home",
  components:{
    NavBar
  },
  data(){
    return {
      result:null
    }
  },
  created(){
    getHomeMultidata().then(res => {
      console.log(res)
      this.result=res
    })
  }
}
</script>

<style>
.home-bar{
  background-color: var(--color-tint);
  color: white;
}
</style>