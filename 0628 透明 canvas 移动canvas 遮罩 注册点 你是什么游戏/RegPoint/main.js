/**
 * Created by sks on 2016/6/28.
 */


(function () {
    
    function Main() {
        this._canvas=document.getElementById("canvas");
        this._context2d=this._canvas.getContext("2d");
        this._infoDiv=document.getElementById("info");
        
        this._currentTime=0;
        
        this._r=new zhang.Rect(100,100);  //传入Rect.js文件
        //重置起始点的x、y坐标值
        this._r.x=200;
        this._r.y=200;
        //重置regX、regY的值
        this._r.regX=50;
        this._r.regY=50;
        
        this.render(this._currentTime);
    }
    
    Main.prototype.render=function (time) {
        var deltaTime=time-this._currentTime;  //每帧的时间
        this._infoDiv.innerHTML=Math.round(1000/deltaTime)+"fps";//这里算的是每秒多少帧，Math.round是四舍五入
        this._currentTime=time;

        //clear canvas
        this._context2d.clearRect(0,0,550,400);//在每次刷新之前都清空之前的图形
        
        this._r.rotation+=0.01;  //旋转弧度
        
        this._r.draw(this._context2d);
        
        requestAnimationFrame(this.render.bind(this));
    };
    new Main();
})();