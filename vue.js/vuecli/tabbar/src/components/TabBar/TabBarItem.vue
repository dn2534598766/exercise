<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot name="img" v-if="!isActive"></slot>
    <slot name="img-active" v-else></slot>
    <div :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      
    }
  },
  props:{
    path:String,
    color:{
      type:String,
      default:'red'
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path)
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    },
    activeStyle(){
      return this.isActive?{color:this.color}:{}
    }
  }
}
</script>

<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img{
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

</style>