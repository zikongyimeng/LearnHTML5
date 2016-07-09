/**
 * Created by sks on 2016/7/6.
 */
(function () {
    
    $.fn.revolve = function () {
        if($(this).css("backgroundColor") == "rgb(255, 0, 0)") {
            $(this).animate({marginLeft: "250px",width:"0"},1000,function () {
                $(this).css({backgroundColor:"blue"}).animate({marginLeft: "0px",width:"500px"},1000);
            });
        }
        else {
            $(this).animate({marginLeft: "250px",width:"0"},1000,function () {
                $(this).css({backgroundColor:"red"}).animate({marginLeft: "0px",width:"500px"},1000);
            });
        }
    }
    
})();