/**
 * Created by sks on 2016/7/6.
 */

(function () {
    
    function init() {
        
        $("#rect").click(function () {
            //slide left
            $(this).animate({margin:200,width:0},1000,function () {   //animate后是想要达到的效果
                $(this).hide();
            });
        });
    }
    init();
})();

