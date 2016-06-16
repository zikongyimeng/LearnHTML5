/**
 * Created by sks on 2016/6/15.
 */


(function () {
    
    var count=0;    //声明
    
    function timer() {
        count++;          //累加
        console.log(count);
        
        if(count<10){              //循环，只输出10以内的
            setTimeout(timer,1000);//setTimeout是延时执行，每隔一秒执行一次
        }
    }
    
    function init() {
        timer();         //调用timer函数
    }
    init();
}());