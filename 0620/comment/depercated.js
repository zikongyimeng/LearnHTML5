/**
 * Created by sks on 2016/6/20.
 */


(function () {
    
    function Hello() {
        
    }

    /**
     * @deprecated  使用sayHi方法替代
     */
    Hello.prototype.sayHello=function () {
        console.log("Hello World");
    };
    Hello.prototype.sayHi=function () {
        console.log("Hi js");
    };
    window.Hello=Hello;
    
})();