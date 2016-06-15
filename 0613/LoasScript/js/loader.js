/**
 * Created by sks on 2016/6/14.
 */

//重看
/*(function () {
    var files=["hello.js","app.js"];

    files.forEach(function (haha) {
        var scriptTag=document.createElement("script");//创建script节点
        scriptTag.async=true;
        scriptTag.src=haha;
        document.body.appendChild(scriptTag);//添加孩子节点
    })
}());*/


(function () {


    var files = ["../js/hello.js", "../js/app.js"];//一定要注意路径

    files.forEach(function (haha) {
        var scriptTag = document.createElement("script");
        scriptTag.async = false;//啥意思
        scriptTag.src = haha;
        document.body.appendChild(scriptTag);
    });
}());


