/**
 * Created by sks on 2016/7/6.
 */
(function () {
    
    var rect;
    function init() {
        rect=$("#rect");
        
        function toggleSlide() {
            rect.slideToggle(1000,toggleSlide);
        }
        toggleSlide();
        
        
        
        rect.hide();   //div隐藏
        $("#btnshow").click(function () {
            // rect.show(3000);  //div通过1秒出现
            // rect.toggle();  //有的话就消失，没有的话就出现，自动检测切换
            // rect.fadeIn(2000);  //2秒内淡入
            // rect.fadeToggle(2000);//切换，有的话就消失，没有就出现
            // rect.slideDown(1000);//3秒内滑入
            // rect.slideToggle();//切换，有的话就消失，没有就出现
        })
        rect.click(function () {
            // $(this).hide(3000); //div通过1秒消失
            // $(this).fadeOut(2000);//2秒内淡出
            /*$(this).slideUp(1000,function () {
                alert("图形消失了");
            });//3秒内消失*/
        })
    }
    init();
})();