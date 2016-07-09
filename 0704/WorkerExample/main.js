/**
 * Created by sks on 2016/7/5.
 */
(function () {

    var btnPrint,progressContainer;

    function init() {
        progressContainer=document.getElementById("progresscontainer");

        btnPrint=document.getElementById("btnprint");
        btnPrint.onclick=function () {
            var worker=new Worker("PrintTask.js");//new worker
            //event 参数中有 data 属性，就是子线程中返回的结果数据
            worker.onmessage=function (event) {
                // 把子线程返回的结果添加到 div 上
                progressContainer.innerHTML=event.data;
            }
        };
    }
    init();
})();
// Web Workers 就可以通过 postMessage 向任务池发送任务请求，执行完之后再通过 postMessage 返回消息给创建者指定的事件处理程序 ( 通过 onmessage 进行捕获 )。