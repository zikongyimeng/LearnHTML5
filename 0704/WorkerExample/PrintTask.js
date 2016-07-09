/**
 * Created by sks on 2016/7/5.
 */

(function () {

    var max=500000000;

    for (var i=0;i<max;i++){
        if (i%1000000==0){
            postMessage(Math.round(i/max*100)+"%");//完成进度百分比，Math.round四舍五入
        }
    }
    postMessage("完成");
})();