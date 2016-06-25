/**
 * Created by sks on 2016/6/24.
 */


(function () {

  /*
    //把o替换成a
    var str="Hello World";
    console.log(str.replace("o","a"));//只把第一个o替换了

/*
    //用正则替换
    var str="Hello World";
    console.log(str.replace(/o/g,"a"));//加g是查全局，把所有的o都替换成a*/


   /* //正则表达式测试邮箱
    var email="zhang@yinan.cn";
    var p=/.*@.*\..*!/;
    console.log(p.test(email));//是的话输出true，不是的话输出false*/


    //正则匹配
    var str = "Hello World Google Apple";

    var p = /.{5}\s/g;

    while (true) {
        var result = p.exec(str);   //匹配exec
        if (result) {
            console.log(result);
        } else {
            break;
        }
    }


})();
