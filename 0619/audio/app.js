/**
 * Created by sks on 2016/6/19.
 */


(function () {

    var audio,btnPlay,btnStop,btnGetCurrentTime;

    function findComponents() {
        audio=document.getElementById("audio");
        btnPlay=document.getElementById("btn-play-sound");
        btnStop=document.getElementById("btn-stop-sound");
        btnGetCurrentTime=document.getElementById("btn-get-current-time");
    }

    function addListeners() {
        btnPlay.addEventListener("click",function (event) {
            audio.play();//点击音频开始播放（play）
        });
        btnStop.addEventListener("click",function (event) {
            audio.pause();//点击音频停止播放（pause）
        });
        btnGetCurrentTime.addEventListener("click",function (event) {
            console.log(audio.currentTime);//获取播放的当前位置（currentTime）
        });
    }


    function init() {

        findComponents();
        addListeners();
    }
    init();
})();