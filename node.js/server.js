var http = require("http");
var qs = require("querystring");
function onRequest(req,resp){
  var currentData = "";
  req.on("data",function(data){
    currentData += data;
    var obj=qs.parse(currentData).result
    var obj=JSON.parse(obj)
    console.log(obj)
    var str=''
    for(let key in obj){
      str+=obj[key]+','
    }
    
    resp.end(str+'订单号已收到');
  });
  resp.writeHead(200,{"ContentType":"text/html;charset=utf-8"});
  
}

http.createServer(onRequest).listen(8000); 