<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <input type="text" v-model="itemNews" @keyup.enter="enter">
    <ul>
      <li v-for="(item,index) in items" :key="index" @click="liClick(item)" :class="{isStudent:item.student}">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import Storage from './js/storage'
export default {
  name: 'app',
  data(){
    return {
      items:Storage.add(),
      msg:'Type name and mark who is student',
      itemNews:''
    }
  },
  methods:{
    enter(){
      this.items.push({
        name:this.itemNews,
        student:false
      })
      this.itemNews=null
    },
    liClick(item){
      item.student=!item.student
    }
  },
  watch:{
  	items:{
	  	 handler: function (items) {
	      Storage.save(items);
	    },										
	  	deep:true							
  	}
  }
}
</script>

<style>
.isStudent {
	color: red;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
