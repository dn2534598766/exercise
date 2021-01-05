namespace tlinterface{
    interface Iperson{
        name:string
        id:number
        age:number
        readonly gender:string
        salary?:number
    }

    let p1:Iperson
    p1={
        name:'york',
        id:1,
        age:18,
        gender:'男'
    }
    p1.name='宇'
    //p1.gender='女'
    console.log(p1)
    
    interface Ifunc1{
        (v1:number,v2:string):string
    }
    const f1:Ifunc1=function(v:number,vv:string){
        return v+vv
    }

    class HappyPerson implements Iperson{
        name:string
        id:number
        age:number
        gender:string

    }

    interface Alarm{
        alarm():any
    }

    interface Light{
        lightOn()
        lightOff()
    }

    class CarAlarm implements Alarm,Light{
        alarm(){

        }
        lightOn(){

        }
        lightOff(){

        }
    }

    //接口可以继承接口
    interface IBigAlarm extends Alarm{
        bigalarm()
    }

    let bl:IBigAlarm={
        bigalarm(){

        }
        
    }

    interface  Imulti{
        (v1:number,v2:string):boolean
        pro1:number
        fun1()
    }

    function mulit():Imulti{
        let m=<Imulit>function(v1:number,v2:string)
    }
}