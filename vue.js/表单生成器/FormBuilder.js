var elements=[{
    tag:'input',
    text:'姓名',
    attr:{type:'text',name:'user'},
    option:null
},
{
    tag:'input',
    text:'性别:',
    attr:{type:'radio',name:'gender'},
    option:{m:'男',w:'女'}
}
]
for(var k in elements){
    var item={tag:'',text:'',attr:{},option:null};
    
    for(var n in elements[k]){
        
        
        item[n]=elements[k][n];
        console.log(item[n])
    }
}