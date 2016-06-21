/**
 * Created by sks on 2016/6/20.
 */

/**
 * 异步加载，调用库
 */
(function () {
    
    function init() {
        $.get("lyric.lrc").done(function (data) {
            console.log(data);
        }).fail(function () {
            console.error("加载失败");
        });
    }
    init();
})();