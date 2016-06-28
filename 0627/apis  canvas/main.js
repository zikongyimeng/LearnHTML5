/**
 * Created by sks on 2016/6/27.
 */


(function () {

    function Main() {
        /**
         *
         * @type {HTMLCanvasElement}
         * @private
         */
        this._canvas=document.getElementById("canvas");
        this._context2d=this._canvas.getContext("2d");

        //this.drawReg();
        //this.drawCircle();
        //this.drawLines();
        //this.drawText();
        this.drawImage();
    }

    Main.prototype.drawReg=function () {
        //绘制方形
        this._context2d.fillStyle="#ff0000";//填充颜色
        this._context2d.fillRect(10,10,200,100);//方形设置，四个值分别代表：起始x位置、起始y位置，宽、高

        //边框
        this._context2d.lineWidth=10;//边框的宽度
        this._context2d.strokeRect(10,10,200,100);//边框设置，四个值分别代表：起始x位置、起始y位置，宽、高
    }

    //绘制圆
    Main.prototype.drawCircle=function () {
        /*this._context2d.arc(100,100,50,0,Math.PI*2);//五个值分别代表：起始x位置、起始y位置、半径、
                                                     // 起始角度（弧度）、结束位置弧度；默认是顺时针，若最后加上true，则是逆时针
        this._context2d.stroke();//绘制出来*/
        
        //绘制两个独立图形加beginPath和closePath,不加的话第二个图形以第一个图形的结束为开始
        this._context2d.beginPath();//开始
        this._context2d.arc(100,100,50,0,Math.PI*2);
        this._context2d.stroke();
        this._context2d.closePath();//结束
        
        this._context2d.beginPath();
        this._context2d.arc(200,200,50,0,Math.PI);
        this._context2d.stroke();
        this._context2d.closePath();


        //闭合路径，把this._context2d.closePath()写在this._context2d.stroke()的上面
        this._context2d.beginPath();
        this._context2d.arc(300,300,50,0,Math.PI);
        this._context2d.closePath();
        this._context2d.stroke();


        //绘制扇形,用moveto移动圆心
        this._context2d.beginPath();
        this._context2d.moveTo(400,400);
        this._context2d.arc(400,400,50,0,Math.PI/2);
        this._context2d.closePath();
        this._context2d.stroke();
    }

    //绘制二次贝塞尔曲线
    Main.prototype.drawLines=function () {
        this._context2d.moveTo(400,500);
        this._context2d.quadraticCurveTo(450,400,600,700);//前两个值代表第一个控制点的位置，后两个值代表第二个控制点的位置
        this._context2d.stroke();


        /*//绘制多条线段，可多次往下写lineto
         this._context2d.beginPath();
         this._context2d.moveTo(100, 100);
         this._context2d.lineTo(100, 200);
         this._context2d.lineTo(200, 200);
         //this._context2d.closePath();//加上首尾就闭合不加就不闭合
         this._context2d.stroke();*/


    }

    //绘制文本
    Main.prototype.drawText=function () {
        this._context2d.font="bold 32px Courier";//加粗、字号、字体
        this._context2d.fillStyle="red"; //颜色
        this._context2d.fillText("Hello World",0,32);//括号里的分别为  文本、放在canvas里起始的x、y位置
    }

    //绘制图片
    Main.prototype.drawImage=function () {
        var img=document.createElement("img");
        img.onload=function () {
            this._context2d.drawImage(img,0,0);//把原图放入canvas中
            //this._context2d.drawImage(img,0,0,300,100);//限制图片的大小
            //this._context2d.drawImage(img,0,0,110,110,100,100,110,110);//截取图片，设置大小
        }.bind(this);
        img.onerror=function () {
            console.error("无法加载图片");
        };
        img.src="picture.jpg";
    };


    new Main();
})();