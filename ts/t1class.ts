namespace  ticlass{
    class Animal{
        private name:string
        protected legs:number
        price:number
        move(d:number){
            console.log(`move ${d} meter.`)
        }
        constructor(theName:string){
            this.name=theName
        }
        
    }

    class Dog extends Animal{
        bark(){
            console.log('wangwang')
        }
        changeLeg(legs:number){
            this.legs=legs
        }
        showleg(){
            console.log(this.legs)
        }
    }

    let dog1:Dog=new Dog('dog1')
    dog1.price=100
    dog1.bark()

    dog1.changeLeg(4)
    dog1.showleg()
    let dog2:Dog=new Dog('dog2')
}