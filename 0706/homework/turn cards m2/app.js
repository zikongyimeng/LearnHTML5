/**
 * Created by sks on 2016/7/6.
 */

(function () {

    var oDiv = $(".div");
    oDiv.css({
        width: "500px",
        height: "300px",
        backgroundColor: "red"
    });
    
    function init(){

        oDiv.click(function () {
            $(this).revolve();
        });
    }

    init();
})();