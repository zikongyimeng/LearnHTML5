/**
 * Created by sks on 2016/7/7.
 */
(function () {

    var form,nameInput,SERVER_URL="/helloserver";   //SERVER_URL="/helloserver"后端路径
    var resultField;

    function init() {
        nameInput=$("#nameinput");
        resultField=$("#resultfiled");

        form=$("#form");
        form.on("submit",function (event) {
            event.preventDefault();

            resultField.html("Loading...");
            $.post(SERVER_URL,{name:nameInput.val()},function (data) {    //向后端请求和传输数据
                resultField.html(data);
            });
        });
    }
init();
})();