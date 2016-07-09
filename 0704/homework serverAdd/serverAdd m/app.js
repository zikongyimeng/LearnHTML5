/**
 * Created by sks on 2016/7/4.
 */

var http=require("http");

var fs=require("fs");

http.createServer(function (request,response) {

    if (request.url=="/index.html"){
        response.end(fs.readFileSync("index.html"));
    }else if (request.url.match(/\/server/)){
        var pKv=/(\?|\&)([^=]+)=([^&]+)/g;
        var params={};
        while (true){
            var result=pKv.exec(request.url);
            if (result){
                params[result[2]]=result[3];
            }else {
                break;
            }
        }

        response.end("<!DOCTYPE html><html><head><meta charset='UTF-8'></head><body> "+(parseInt(params['name1'])+parseInt(params['name2']))+ "</body></html>");

    }else {
        response.end("<h1>路径有错</h1>");
    }
    // response.end("<h1>Hello NodeJs</h1>");
}).listen(8050);