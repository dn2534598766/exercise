const obj = {
  a(){
      setTimeout(function(){
        console.log(this)   //window
        setTimeout(()=>{
          console.log(this)  //window
        });
        setTimeout(function(){
          console.log(this) //window
        });
      });
      setTimeout(()=>{
        console.log(this)   //obj
        setTimeout(()=>{
          console.log(this) //obj
        });
        setTimeout(function(){
          console.log(this)   //window
        });
      } );
    }
}
obj.a()