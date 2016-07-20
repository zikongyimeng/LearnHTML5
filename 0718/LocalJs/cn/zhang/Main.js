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
//# sourceMappingURL=Main.js.map