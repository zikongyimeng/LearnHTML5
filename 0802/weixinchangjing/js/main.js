/**
 * Created by sks on 2016/8/2.
 */
(function () {

    var mySwiper = new Swiper('.swiper-container', {
        direction:'vertical',
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素 
            swiperAnimate(swiper); //初始化完成开始动画

        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画		

            // if(swiper.activeIndex==1){
            // 	wasStar.style.animation = "sildeInRightTop 3s 0.4s linear forwards";
            // }
        }
    });



    function Main() {

        this.onLight();

    }

    /*点灯换页面*/
    Main.prototype.onLight=function () {
        var slide4_lightOffDiv=$(".slide4_lightOffDiv")[0];
        var slide4_chu=$(".slide4_chu")[0];
        var slide4_zhong=$(".slide4_zhong")[0];

        slide4_lightOffDiv.addEventListener("click",function () {
            // console.log("123");
            $(slide4_chu).css({
                display:"none"
            });
            $(slide4_zhong).css({
                display:"block"
            })
        }.bind(this));
    };

    new Main();
})();