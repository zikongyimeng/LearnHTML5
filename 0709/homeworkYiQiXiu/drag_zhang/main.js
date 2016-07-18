/**
 * Created by sks on 2016/7/9.
 */
(function () {
    var haha=0;
    
    Main.prototype.start=function () {
        $(document).on("touchstart", function (event) {
            event.preventDefault();
            // console.log("start"+event.originalEvent.changedTouches[0].clientY);
            this.start = event.originalEvent.changedTouches[0].clientY;
        }.bind(this));
    };
    Main.prototype.move=function () {
        $(document).on("touchmove", function (event) {
            event.preventDefault();
            // console.log(event.originalEvent.changedTouches[0].clientY);
            this.move=event.originalEvent.changedTouches[0].clientY;
            this.crrentheight=this.start-this.move;
            // console.log("currentheight"+this.crrentheight);
            var  page1=$("#page1")[0];
            page1.style.marginTop=-this.crrentheight+-haha*640+"px";
            page1.style.transition="0s";

        }.bind(this));
    };
    Main.prototype.end=function () {
        $(document).on("touchend", function (event) {
            event.preventDefault();
            // console.log("end"+event.originalEvent.changedTouches[0].clientY);
            this.end=event.originalEvent.changedTouches[0].clientY;
            this.height=this.start-this.end;
            var img=$(".img");
            // console.log(img);
            var  page1=$("#page1")[0];
            if(this.height>3&&img.length>=haha-1&&haha<img.length-1){
                haha=haha+1;
                page1.style.marginTop=-haha*640+"px";
                page1.style.transition="1s";
                console.log("上"+haha);
                console.log("img"+img.length);
            }
            else if(haha>=img.length-1&&this.height>3){
                console.log("最后"+haha);
                page1.style.marginTop=-(img.length-1)*640+"px";
                page1.style.transition="1s";

            }
           else if(this.height<-3&&haha>=1&&haha<=img.length){
                page1.style.marginTop=-(haha-1)*640+"px";
                page1.style.transition="1s";

                haha=haha-1;
                console.log("下"+haha);
                // haha=haha+1;
            }
            else if(haha=1){
                page1.style.marginTop="0px";
                page1.style.transition="1s";
                haha=haha-1;
                console.log(haha);
            }

        }.bind(this));
    };
    function Main() {
        Main.prototype.start();
        Main.prototype.move();
        Main.prototype.end();
    }
    Main();

})();