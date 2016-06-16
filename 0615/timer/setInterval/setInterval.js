/**
 * Created by sks on 2016/6/15.
 */

(function () {

    var intervalId;   //声明函数

    function init() {

        var count=0;
        intervalId=setInterval(function () {   //setInterval里面包含函数
            count++;
            console.log(count);

            if(count>=10){
                clearInterval(intervalId);   //如果数大于10就清空，就是不再显示
            }
        },1000);//延时时间1秒
        
    }
    init();
}());