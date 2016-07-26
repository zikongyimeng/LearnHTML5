/**
 * Created by sks on 2016/7/22.
 */

var ws=new WebSocket("ws://localhost:8888");
ws.onopen=function (e) {
    console.log(e);
    ws.send("Hello Server ........");
};