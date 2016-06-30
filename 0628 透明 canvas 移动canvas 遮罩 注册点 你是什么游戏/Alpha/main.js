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
        var g=this._context2d;

        g.drawImage(img,0,0);

        g.save();
        g.fillStyle="#0000ff";
        g.globalAlpha=0.5;  //透明度为0.5
        g.beginPath();
        //g.fillRect(0,0,300,300);//圆里有蓝色
        g.rect(0,0,300,300);//圆里没蓝色
        g.arc(100,100,80,0,Math.PI*2);
        g.closePath();
        g.fill("evenodd");
        g.restore();
    };

    new Main();
})();