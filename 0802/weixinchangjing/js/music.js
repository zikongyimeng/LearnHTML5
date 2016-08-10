/**
 * Created by sks on 2016/8/2.
 */
(function () {

    var musicBtn=document.getElementsByClassName("musicBtn");
    var audio=document.getElementsByTagName("audio")[0];
    this.i=0;
    
    function Main() {

       /* var musicBtn=document.getElementsByClassName("musicBtn");
         var audio=document.getElementsByTagName("audio")[0];
         this.i=0;*/

        // console.log(this.i);
        /*musicBtn.onclick=function () {
            if(this.i==1){
                audio.play();
                musicBtn.style.background="url(img/musicBtn.png) no-repeat";
                this.i=0;
            }else {
                audio.pause();
                musicBtn.style.background="url(img/musicBtnOff.png) no-repeat";
                this.i=1;
            }
        }.bind(this);*/


       /* musicBtn.onclick=function () {
            console.log("....");
            if(this.i==0){
                audio.pause();
                musicBtn.style.background="url(img/musicBtnOff.png) no-repeat";
            }
        };*/



    function loadMp3(src) {
//        alert(src)
//        if(!app.getUa.weixin && app.getUa.android){
//            $('<audio preload><source src="'+src+'" /></audio>').appendTo('body');//.on('canplaythrough', setMp3);
//        }
//        else{
        $('<audio loop preload><source src="' + src + '" /></audio>').appendTo('body');//.on('canplaythrough', setMp3);
//        }
        setMp3();
    }

    function setMp3() {
        document.addEventListener("WeixinJSBridgeReady", function () {
            WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                $('audio')[0].play();
            });
        }, false);
        $('audio')[0].play();
        $('.musicBtn').on('click', playOrPaused);
    }
    loadMp3("img/music.mp3");

    function playOrPaused() {
        $('.musicBtn').removeClass('active');
        setTimeout(function () {
            $('.musicBtn').addClass('active')
        }, 0);
        var audio = $('audio')[0];
        var _this = $(this);
        if (audio.paused) {
            _this.removeClass('off');
            audio.play();
            return;
        }
        _this.addClass('off');
        audio.pause();
    }


    }

    new Main();
})();