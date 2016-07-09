/**
 * Created by sks on 2016/7/6.
 */
(function () {
    
    var div;
    
    function init() {
        div=$("#div");
        /*
        div.css("width","100px");
        div.css("height","100px");
        div.css("backgroundColor","red");*/


        div.css({
            width:"100px",
            height:"100px",
            backgroundColor:"red"
        });
    }
    init();
})();