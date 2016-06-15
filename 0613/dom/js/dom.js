/**
 * Created by sks on 2016/6/13.
 */

(function () {
    function init() {
        var oDiv=document.getElementById("containter");//获取节点
             //oDiv.innerHTML="Hello";//添加内容
            //oDiv.innerHTML="<h1>Page Title</h1>";//添加内容
        
        var h2=document.createElement("h2");//创建节点（createElement）
            h2.innerHTML="Ni Hao";//添加内容
        oDiv.appendChild(h2);//添加孩子节点

        //点击Ni Hao控制台显示h2 被点击了
        h2.onclick=function () {
            console.log("h2 被点击了")
        }
    }
    init();


   window.btnClickedHandler=function () {
       if(h2) {
           oDiv.removeChild(h2);//移除节点
           h2 = null;
       }
    };
}())