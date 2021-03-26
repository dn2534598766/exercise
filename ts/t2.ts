let num1:number
num1=100
let str1:string
str1='hello'
str1="hello"
str1=`${num1}hello`
console.log(str1)

let arr1:number[]=[1,2,3]
let arr2:Array<number>=[1,2,3]
//元组 turple 固定长度类型不同的一组值
let turple1:[number,string]
turple1=[1,'hello']
//枚举enum
enum enumColor {Red,Green,Blue}
let color1:enumColor
color1=enumColor.Red
enum enumColor2 {Red=0,Green=2,Blue=4}
let color2:enumColor2=enumColor2.Blue
console.log(color2)
enum enumColor3 {Red="red color",Green='green'}
let color3:enumColor3=enumColor3.Green
console.log(color3)

//任意类型any
let any1:any
any1=1
any1='hello'

function f1():void{
    console.log('hhhhh')
}
//let v1:string=null
//never
function f2():never{
    while(true){

    }
}
let vv:any='hello'
let v2:number=(<string>vv).length
v2=(vv as string).length