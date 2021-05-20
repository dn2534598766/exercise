<template>
  <div  id="home">
    <nav-bar class="home-bar">
      <div slot="center">购物街</div>
    </nav-bar>

    <home-swiper :banner="banner"></home-swiper>
    <!-- <div>
     <el-carousel >
      <el-carousel-item v-for="item in banner" :key="item.link">
        <a :href="item.link" >
          <img :src="item.image" style="width:100%;height:300px;"/>
        </a>
      </el-carousel-item>
     </el-carousel>
    </div> -->
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata} from 'network/home'
import HomeSwiper from './ChildComps/HomeSwiper'


export default {
  name:"Home",
  components:{
    NavBar,
    HomeSwiper
  },
  data(){
    return {
      banner:[],
      recommend:[]
    }
  },
  created(){
    getHomeMultidata().then(res => {
      console.log(res)
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
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