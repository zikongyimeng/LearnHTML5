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
//# sourceMappingURL=Hello.js.map