const app = new Vue({
  el:'#app',
  data:{
    books:[
      {
        id:1,
        name:'算法导论',
        date:'2006-9',
        price:85.00,
        count:1
      },
      {
        id:2,
        name:'UNIX编程艺术',
        date:'2006-2',
        price:59.00,
        count:1
      },
      {
        id:3,
        name:'javaScript高级程序设计',
        date:'2006-10',
        price:129.00,
        count:1
      },
      {
        id:4,
        name:'代码大全',
        date:'2006-3',
        price:128.00,
        count:1
      }
    ]
  },
  methods:{
    decrease(index){
      this.books[index].count--
    },
    increase(index){
      this.books[index].count++
    },
    clear(index){
      this.books.splice(index,1)
    }
  },
  filters:{
    showPrice(price){
      return '￥'+price.toFixed(2)
    }
  },
  computed:{
    totalPrice(){
      let result=0
      // for(let i=0;i<this.books.length;i++){
      //   result+=this.books[i].count*this.books[i].price
      // }
      // return result

      // for(let i in this.books){
      //   result+=this.books[i].count*this.books[i].price
      // }
      // return result

      //   for(let i of this.books){
      //     result+=i.count*i.price
      //   }
      //   return result

      return this.books.reduce((sum,every)=>{
        return sum+every.count*every.price
      },0)
    }
  }
})