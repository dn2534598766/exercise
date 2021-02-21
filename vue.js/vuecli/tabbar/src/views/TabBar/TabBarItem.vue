<template>
  <div class="tab-bar-item">
    <slot name="img" v-if="isActive"></slot>
    <slot name="img-active" v-else></slot>
    <div :class="{active:!isActive}"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isActive:true
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
.active{
  color:red
}
</style>