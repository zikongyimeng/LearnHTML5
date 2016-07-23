/**
 * Created by sks on 2016/7/19.
 */

    // const fs=require("fs");   /*引用node.js中的文件系统库（fs模块）*/
class Main{
    constructor(){

        /*输出当前文件夹里所有的文件夹名字*/
        /*fs.readdir("/",function () {
            console.log(arguments)
        });*/

       /* 输出百度首页的数据*/
        $.get("http://www.baidu.com").done(function (data) {
            console.log(data);
        });
    }
}
new Main();