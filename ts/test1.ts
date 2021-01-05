namespace c1function{
    function fun(x,y){
        return x+y
    }
    let f1=function(x,y){
        return x+y
    }
    let f2=(x,y)=>{
        console.log(x)
        return x+y
        
    }
    console.log(fun(1,2))
    console.log(f1(1,2))
    console.log(f2(1,2))
    function tsf1(x:number,y:number):number{
        return x+y
    }
    function tsf2(x:number,y:number)=>number{
        return 
    }
    console.log(tsf1(1,2))
    
}