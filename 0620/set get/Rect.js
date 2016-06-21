/**
 * Created by sks on 2016/6/20.
 */


(function () {

    function Rect(context) {
        this._color="yellow";
        this._context2d=context;
    }
    
    Rect.prototype.draw=function () {
        this._context2d.fillStyle=this._color;//fillStyle 属性设置或返回用于填充绘画的颜色、渐变或模式
        this._context2d.fillRect(0,0,100,100);//fillRect() 方法绘制矩形,context.fillRect(x,y,width,height);
    };
    Object.defineProperty(Rect.prototype,"color",{
        get:function () {
            return this._color;
        },
        set:function (value) {
            this._color=value;
            this.draw();
        }
    });
    
    window.Rect=Rect;
})();