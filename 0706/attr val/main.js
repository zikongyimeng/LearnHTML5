/**
 * Created by sks on 2016/7/6.
 */
(function () {

    var form;

    function init() {
        form = $("#form");

        form.on("submit", function (event) {
            // console.log($("#blank").val());  //val()方法返回或设置被选元素的值；这里是返回值

            console.log($("#blank").attr("type"));//arrt() 方法设置或返回被选元素的值；这里是返回值

            event.preventDefault();
        });
        // $("#blank").val(212);//这里是设置

        $("#blank").attr("type", "4");//这里是设置属性值
    }

    init();
})();