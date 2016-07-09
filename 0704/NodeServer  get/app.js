/**
 * Created by sks on 2016/7/4.
 */

var http=require("http");//require用于引入http模块

var fs=require("fs");  //引入fs模块

http.createServer(function (request,response) {   //创建服务器    request客户端请求对象  response客户端给服务器的返回响应

    if (request.url=="/index.html"){
        response.end(fs.readFileSync("index.html"));//结束服务器响应，把值返给前端
    }else if (request.url.match(/\/server/)){
        var pKv=/(\?|\&)([^=]+)=([^&]+)/g;//正则
        var params={};
        while (true){
            var result=pKv.exec(request.url);//正则匹配路径url
            if (result){
                params[result[2]]=result[3];
            }else {
                break;
            }
        }
        response.end("<!DOCTYPE html><html><head><meta charset='UTF-8'></head><body>Hello "+decodeURI(params['name'])+"</body></html>");//使用 decodeURI() 对一个编码后的 URI 进行解码,防止乱码

    }else {
        response.end("<h1>101</h1>");
    }
    // response.end("<h1>Hello NodeJs</h1>");
}).listen(8010);