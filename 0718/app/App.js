/**
 * Created by sks on 2016/7/18.
 */
var App = (function () {
    function App() {
    }
    App.prototype.sayHello = function () {
        console.log("Hello World");
    };
    return App;
}());
var app = new App();
app.sayHello();
//# sourceMappingURL=App.js.map