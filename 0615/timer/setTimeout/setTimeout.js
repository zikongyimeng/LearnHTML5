/**
 * Created by sks on 2016/6/15.
 */


(function () {

    var btnStopTimer,currentTimerId=-1;
    
    function findTags() {
        btnStopTimer=document.getElementById("btnStopTimer");
        btnStopTimer.onclick=function () {
            if(currentTimerId !=-1){
                clearTimeout(currentTimerId);//如果currentTimer !=-1则点击按钮后不再输出setTimeout
            }
        };
    }


    function timeOutHander(name) {
        console.log("hello"+name);
    }

    function init() {
        findTags();
        timeOutHander(" ucai");//输出 hello ucai
        currentTimerId=setTimeout(timeOutHander,2000," zhangsan");//2s后输出 hello zhangsan
    }
    init();
}());