function add(a,b){
    console.log(a+b)
}

function sub(a,b){
    console.log(a-b)
}

//global 是全局变量，可以被直接访问,与var声明的变量不冲突
// var a = 1
// global.a =2
// console.log(a)
// console.log(global.a)
module.exports = {
    add,
    sub
}