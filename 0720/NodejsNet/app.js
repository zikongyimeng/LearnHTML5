/**
 * Created by sks on 2016/7/20.
 */
// "use strict";
var net=require("net");
// var conn=require("./Connection");  /* 引入类,这种是nodejs的用法*/
// console.log(conn);
const Connection=require("./Connection");


var server=net.createServer((socket)=>{
        // socket.end("Hello Client\n");    /*socket.end服务器强制退出*/
        socket.write("Hello Client\n");    /*socket.write服务器不退出*/

    /*实时通信*/
    /*socket.on("data",(data)=>{    /!*侦听data事件，data用于侦听前端发过来的数据*!/
        console.log(String(data));   /!*buffer类型转成字符串类型*!/
    });*/

    new Connection(socket);
    });
// serve.on("error",function () {
//     console.log(arguments);
// });

server.listen(8888);
console.log("Server started at port 8888");