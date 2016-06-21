/**
 * Created by sks on 2016/6/20.
 */


(function () {
    
    function Main() {

        this._canvas=document.getElementById("canvas");
        this._context2d=this._canvas.getContext("2d");//这个方法返回一个环境对象，该对象导出一个二维绘图 API
        
        this._rect=new Rect(this._context2d);
        this._rect.draw();
        
        setTimeout(function () {
            this._rect.color="red";
        }.bind(this),2000);    //绑定this

    }
    new Main();
})();