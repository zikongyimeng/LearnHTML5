/**
 * Created by plter on 7/8/16.
 */

(function () {

    window.helloCallback1 = function (result) {
        console.log(result);
    };

    var script = document.createElement("script");
    script.src = "http://localhost:3000/hello?cb=helloCallback1";
    document.body.appendChild(script);
})();