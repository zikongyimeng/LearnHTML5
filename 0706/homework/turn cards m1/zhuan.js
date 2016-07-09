/**
 * Created by sks on 2016/7/6.
 */


(function () {
    
    $.fn.zhuan1=function () {
        $(this).animate({marginLeft:100,width:0},1000,function () {
            $(".div2").animate({marginLeft:0,width:200},1000);
        })
    };
    $.fn.zhuan2=function () {
        $(this).animate({marginLeft:100,width:0},1000,function () {
            $(".div1").animate({marginLeft:0,width:200},1000);
        })
    }
    
})();