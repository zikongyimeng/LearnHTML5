/**
 * Created by sks on 2016/7/6.
 */
(function () {

    var btnAddClass,div;
    
    function init() {
        
        btnAddClass=$("#btnAddClass");
        div=$("#div");
        
        btnAddClass.click(function (event) {
            // div.addClass("rect");//添加类

            div.toggleClass("rect");//有则移除，没有则添加
        })

        /*//点击移除类
        div.click(function (event) {
            $(this).removeClass("rect");
        });*/
    }
    init();
})();