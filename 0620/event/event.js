/**
 * Created by sks on 2016/6/20.
 */


(function () {
    
    function Main() {
        this.findElements();
        //this.addListeners1();
        this.addListeners2();
    }

        Main.prototype.findElements=function () {
            this._linkClickMe=document.getElementById("link-clicked");
        };


        //用onclick添加侦听事件只能添加一个，显示最后一个的结果
        Main.prototype.addListeners1=function () {
            this._linkClickMe.onclick=function (event) {
                console.log(event);

                this._linkClickMe.onclick=null;//移除事件，点击不再将执行
            }.bind(this);
        };


        //用addEventListener添加侦听事件可以同时显示所有的，注意不再用onclick,而用click
        Main.prototype.addListeners2 = function () {
            this._linkClickMe.addEventListener("click", function (event) {
                console.log("link clicked 1");

               event.target.removeEventListener("click", arguments.callee);
            });              //移除事件

             this._linkClickMe.addEventListener("click", function (event) {
                 console.log("link clicked 2");
             });
        };

    new Main();
})();