namespace t1{
    class Person{
        name:string
        play(){
            console.log('我喜欢运动')
        }
        eat(){
            console.log('吃吃')
        }
        constructor(theName:string){
            this.name=theName
        }
    }
    let p1=new Person('1243')
    p1.play()
    console.log(p1.name)
}
//ts-node