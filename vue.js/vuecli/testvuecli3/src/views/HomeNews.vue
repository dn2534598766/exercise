<template>
  <div>
    <h2>我是首页新闻</h2>
    <ul>
      <li v-for="item in news" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      news:[
        '意大利埃特纳火山喷发',
        '加拿大多伦多地区普降大雪',
        '立陶宛庆祝独立103周年',
        'BBC对中国的卑鄙手段，实锤了！',
        '通讯：中国年货在印尼畅销'
      ]
    }
  }
}
</script>

<style>

</style>