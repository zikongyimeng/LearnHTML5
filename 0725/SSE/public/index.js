/**
 * Created by sks on 2016/7/25.
 */
(function () {
    var es=new EvenSource("sse");
    /*侦听无类型事件用onmessage*/
   /* es.onmessage=function (event) {
        console.log(event);
    }*/
    /*侦听有类型事件用addEventListener*/
    es.addEventListener("hello", function (e) {
        var result = JSON.parse(e.data);
        console.log(result, e);
    })
})