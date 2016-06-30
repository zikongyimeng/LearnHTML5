/**
 * Created by sks on 2016/6/28.
 */

(function () {

    function Main() {
        this._canvas=document.getElementById("canvas");
        this._context2d=this._canvas.getContext("2d");

        this.addRect();
        this.render();
        this.addListeners();
    }
    Main.prototype.addRect=function () {
        this._rect=new zhang.Rect(100,100);//传入Rect.js文件
        this._rect.color="#0000ff";//修改颜色
    }
    //添加侦听事件
    Main.prototype.addListeners=function () {
        
        //鼠标按下事件
        this._canvas.onmousedown=function (e) {
            if (this.hitTest(this._rect,e.layerX,e.layerY)){    //e.layerX,e.layerY是获取鼠标的位置

                //图形的起始位置与鼠标的位置差，计算位置差是为了在移动过程中固定鼠标在图形上的位置
                this._rectOffsetX=this._rect.x-e.layerX;
                this._rectOffsetY=this._rect.y-e.layerY;

                //鼠标移动事件
                this._canvas.onmousemove=function (event) {

                    this._rect.x=event.layerX+this._rectOffsetX;
                    this._rect.y=event.layerY+this._rectOffsetY;
                }.bind(this);
            }
        }.bind(this);
        //鼠标弹起注销鼠标移动事件
        window.onmouseup=function () {
            this._canvas.onmousemove=null;
        }.bind(this);
    };
    
    Main.prototype.render=function (time) {
        this._context2d.clearRect(0,0,this._canvas.width,this._canvas.height);//在每次绘制前先清除之前的图形
        
        this._rect.draw(this._context2d);
        requestAnimationFrame(this.render.bind(this));//跟随屏幕刷新
    };
    
    //这里是在移动过程中让鼠标在图形上固定位置
    Main.prototype.hitTest=function (rect,mouseX,mouseY) {
        //让鼠标始终在图形上
        return mouseX>rect.x&&
                mouseX<rect.x+rect.width&&
                mouseY>rect.y&&
                mouseY<rect.y+rect.height;
    };
    new Main();
})();