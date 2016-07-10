/**
 * Created by sks on 2016/7/8.
 */

(function () {
    
    /*$.get("/json").done(function (data) {
        console.log(data);
    });*/

    /*//这里用web打开的话会出错，因为端口地址不一样
    $.get("http://localhost:3000/json").done(function (data) {
        console.log(data);
    });*/

    //jsonp解析json文件，以对象方式输出  跨域通信，后端也要用jsonp
    $.ajax("http://localhost:3000/json1", {dataType: "jsonp"}).done(function (data) {
        console.log(data);
    });
})();