/**
 * Created by sks on 2016/6/28.
 */


(function () {

    function Main() {

        this._canvas=document.getElementById("canvas");
        this._context2d=this._canvas.getContext("2d");
        
        this.drawRect();
    }
    
    Main.prototype.drawRect=function () {
        
        /*
        //this._context2d.translate(100,100);//移动，移动到的位置
        //this._context2d.rotate(Math.PI/4);//旋转
        this._context2d.save();//保存
        this._context2d.scale(2,1);//缩放，分别沿x轴和y轴
        this._context2d.fillStyle="red";
        this._context2d.fillRect(0,0,100,100);//绘制方形
        this._context2d.restore();//重置

        //this._context2d.scale(0.5,1);
        //加上保存与重置就不再受以上设置的影响
        this._context2d.save();
        this._context2d.fillStyle="blue";
        this._context2d.fillRect(0,150,50,50);
        this._context2d.restore();
        */
        
        
        this._context2d.save();
        //这里相当于父级
        this._context2d.translate(50,0);//在x轴上移动50
        this._context2d.fillRect(0,0,100,100);

        //这段在父级的基础上执行
        this._context2d.save();
        this._context2d.translate(150, 0);
        this._context2d.fillRect(0, 0, 100, 100);
        this._context2d.restore();

        //这段在父级的基础上执行
        this._context2d.save();
        this._context2d.fillStyle = "#ff0000";
        this._context2d.translate(300, 50);
        this._context2d.beginPath();
        this._context2d.arc(0, 0, 50, 0, Math.PI * 2);
        this._context2d.closePath();
        this._context2d.fill();//填充
        this._context2d.restore();

        this._context2d.restore();//与上面的this._context2d.save();对应

        //这段与父级没有关系
        this._context2d.save();
        this._context2d.translate(150, 0);
        this._context2d.fillText("Hello World", 0, 10);
        this._context2d.restore();
        
        
    }
    new Main();
})();