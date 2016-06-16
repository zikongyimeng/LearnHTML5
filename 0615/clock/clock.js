/**
 * Created by sks on 2016/6/15.
 */

(function () {

    var divClock;//声明一个变量，下面就不用再写var


    function formatTime(num) {
        return (num>=10?"":"0")+num;//数字如果大于10 则输出空字符加数字，如果数字小于10，则输出0加数字
    }

//时间的显示
    function showTime() {
        var date=new Date();
        divClock.innerHTML=formatTime(date.getHours())+":"         //时
                            +formatTime(date.getMinutes())+":"      //分
                            +formatTime(date.getSeconds());        //秒

    }

    //初始函数
    function init() {
        divClock=document.getElementById("clock");//最上面已经声明这个变量
        showTime();//调用函数，立即执行一次
        setInterval(showTime,1000);//每隔一秒执行一次
    }
    init();

}());