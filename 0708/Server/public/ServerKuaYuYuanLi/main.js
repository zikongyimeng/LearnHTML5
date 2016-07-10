/**
 * Created by sks on 2016/7/8.
 */

(function () {

    window.ondataLoaded=function (result) {
        console.log(result);
    }

    function init() {
        var script = document.createElement("script");
        script.src = "http://localhost:3000/json?callback=ondataLoaded";//字符串传参数用“？”，后面是传的参数
        document.body.appendChild(script);
    }
    init();
})();