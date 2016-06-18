/**
 * Created by sks on 2016/6/18.
 */

/*//this 指window
console.log(this);   //输出的是window

(function () {

     console.log(this);  //输出的是window

    function A() {
        console.log(this);   //输出的是window

        this.hello=function () {
            console.log("Hello");
        };
    }
    A();
    hello();   //window里的hello方法

})();*/



/*

//this 不指window
console.log(this);   //输出的是window

(function () {

    console.log(this);  //输出的是window

    function A() {
        console.log(this);   //输出的是h对象

        this.hello=function () {
            console.log("哈哈哈哈哈");
        };
    }
    var h=new A();  //创建新对象h
    h.hello();

})();
*/

/*

//未绑定
(function () {

    function A() {
        this.startTimer=function () {
            var count=0;

            setInterval(function () {
                count++;
                //console.log(count);//正常输出数字
                //console.log(this);//this指window,因为是setInterval来执行这里的this，setInterval默认的是window
            },1000);
        };
        this.hello=function () {
            console.log("XIXIIXI");
        };
    }
    var d=new A();
    d.startTimer();
    d.hello();
})();
*/


//绑定
(function () {

    function A() {

            var count=0;
        this.timerHandler=function () {   //这里的this是指a
            count++;
            console.log(count);
            console.log(this);   //不绑定的时候这里的this是window,绑定之后这里的this是a对象
        };
        this.startTimer=function () {   //这里的this是指a

            //绑定函数的目标对象
            setInterval(this.timerHandler.bind(this),1000);   //这里的两个this都是指a对象，后一个this是绑定（bind）在this.timerHandler上的
        };

        this.hello=function () {     //这里的this是指a
            console.log("XIXIIXI");
        };
    }
    var d=new A();   //a是个对象
    d.startTimer();
    d.hello();
})();