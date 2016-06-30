/**
 * Created by sks on 2016/6/28.
 */

(function () {

    function Main() {

        this._context2d=document.getElementById("canvas").getContext("2d");

        var img=new Image();
        img.onload=function () {
            this.draw(img);
        }.bind(this);
        img.src="photo.jpg";

    }

    Main.prototype.draw=function (img) {
        var h=this._context2d;

        h.beginPath();
        h.arc(120,90,75,0,Math.PI*2);
        h.fill();
        h.closePath();
        h.clip();//遮罩，只把绘制的区域里的内容呈现出来

        h.drawImage(img,0,0);//呈现原图
    }


    new Main();
})();