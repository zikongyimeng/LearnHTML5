/**
 * Created by sks on 2016/7/7.
 */
(function () {

    var container=$("#container");

    container.html("Loading...");
    container.load("content.htm",function (data,status) {   //lond 加载content.htm文件
        if(status=="error"){
            container.html("加载内容失败");
        }
    });

})();