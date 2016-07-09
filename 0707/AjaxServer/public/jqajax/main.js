/**
 * Created by sks on 2016/7/7.
 */
(function () {

    /*$.get("data.txt").done(function (data) {   //用get获取要加载的文件
        console.log(data);
    });*/

    $.ajax("data.txt",{
        error:function () {
            console.error("加载数据时出错");
        },
        complete:function (xhr) {
            console.log(xhr.responseText);//responseText返回数据给前台
        }
    });


})();