/**
 * Created by sks on 2016/8/1.
 */
(function () {

/*
    /!*这种写法有错，输出是4，正确应该加闭包*!/
    for(var i=1;i<=3;i++){
            setTimeout(function () {
                console.log(i);
            },1);
    }

*/


    /*加闭包的正确写法，传入参数*/
        for(var i=1;i<=3;i++){
            (function (a) {
                setTimeout(function () {
                    console.log(a);
                },1);
            })(i);
        }

})();