/**
 * Created by sks on 2016/7/10.
 */
(function () {

    var videoDialog;

    function init() {
        $("#btnopenvideo").button().click(function () {
            videoDialog.dialog("open");
        });
        videoDialog=$("#videodialog").dialog({
            autoOpen:false,   //默认是自动打开，设为false则不再自动打开
            close:function (event,ui) {
                var videoPlayer=$(this).find(".videoplayer");
                var vpElement=videoPlayer[0];
                vpElement.pause();  //暂停
            }
        });
    }
    init();
})();