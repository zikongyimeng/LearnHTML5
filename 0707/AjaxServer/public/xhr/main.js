/**
 * Created by sks on 2016/7/7.
 */
(function () {

    var xhr,form,result;

    function addListeners() {
        form.onsubmit=function (event) {
            event.preventDefault();

            connectServer({name:form['name'].value});
        }
    }

    //连接服务器
    function connectServer(data) {
        xhr.onload=function () {
            result.innerHTML="Result:"+xhr.responseText;
        };

        var paramsStr="";
        for (var key in data){
            paramsStr+=key+"="+data[key]+"&";
        }

        /*//get方式,别忘了更改helloserver.js中的方式
        xhr.open("get","/helloserver?"+paramsStr);
        xhr.send();*/

        //post方式  ，别忘了更改helloserver.js中的方式
        xhr.open("post","/helloserver");
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");//post方式，加上这句话才能解析参数
        xhr.send(paramsStr);
    }

    function getElements() {
        form = document.querySelector("#form");
        result = document.querySelector("#result");
    }


    function init() {
        xhr=new XMLHttpRequest();//创建对象

       /* xhr=new XMLHttpRequest();//创建对象
        xhr.onload=function () {
            // console.log(xhr.responseText);  //输出txt文件中的内容
            // console.log(JSON.parse(xhr.responseText));//把json格式解析成对象输出
            console.log(xhr.responseXML);//输出xml文件中的内容
        };
        // xhr.open("get","data.txt");//打开data.txt文件，以get的方式向服务器发送
        // xhr.open("get","data.json");//打开data.json文件
        xhr.open("get","data.xml");//打开data.xml文件

        xhr.send();//发送到服务器*/


        getElements();
        addListeners();
    }
    init();
})();