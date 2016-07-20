/**
 * Created by sks on 2016/7/18.
 */
var cn;
(function (cn) {
    var zhang;
    (function (zhang) {
        var hello;
        (function (hello) {
            var Hello = (function () {
                function Hello() {
                }
                Hello.prototype.sayHello = function () {
                    console.log("Hello TS");
                };
                Hello.prototype.getString = function () {
                    return "Hello World";
                };
                return Hello;
            }());
            hello.Hello = Hello;
        })(hello = zhang.hello || (zhang.hello = {}));
    })(zhang = cn.zhang || (cn.zhang = {}));
})(cn || (cn = {}));
/**
 * Created by sks on 2016/7/18.
 */
var cn;
(function (cn) {
    var zhang;
    (function (zhang) {
        var Hello = cn.zhang.hello.Hello;
        var Main = (function () {
            function Main() {
                // var h=new cn.zhang.hello.Hello();
                var h = new Hello();
                h.sayHello();
            }
            return Main;
        }());
        zhang.Main = Main;
    })(zhang = cn.zhang || (cn.zhang = {}));
})(cn || (cn = {}));
new cn.zhang.Main();
