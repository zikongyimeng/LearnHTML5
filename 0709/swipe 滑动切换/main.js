/**
 * Created by plter on 7/9/16.
 */


(function () {
    //
    // $(document).on("touchstart", function (event) {   //开始点击触发
    //     console.log(event);
    // });
    // $(document).on("touchend", function (event) {    //点击结束时触发
    //     console.log(event);
    // });
    // $(document).on("touchmove", function (event) {       //鼠标移动时触发
    //     console.log(event.originalEvent.touches);
    // });

    $(document).on("scrollstop", function () {        //鼠标停止滚动时触发
        console.log("scrollstop");
    });

    // console.log(window.innerWidth, window.innerHeight);       //输出屏幕的宽   高
})();