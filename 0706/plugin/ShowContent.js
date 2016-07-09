/**
 * Created by sks on 2016/7/6.
 */

(function () {
    
    $.fn.showContent=function () {  //给jQuery添加showContent函数
        alert($(this).html());  //弹出html中的内容
    }
    
})();