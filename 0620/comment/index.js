/**
 * Created by sks on 2016/6/20.
 */


(function () {

    /**
     * 用于求出两个数字的最大值
     * @param a {number} 传入的第一个数字
     * @param b {number} 传入的第二个数字
     * @returns {number}
     */

    //返回最大值
    function max(a,b) {
        return a>b?a:b;   //返回最大值
    }
    
    function Main() {
        var h=new Hello();
        h.sayHello();
        h.sayHi();
    }
    new Main();
        
})();