/**
 * Created by sks on 2016/6/29.
 */

(function () {
    function Main() {

        this._MAX_VALUE=100;//定义常量
        this._data=[10, 11, 13, 20, 16, 18, 23, 20, 30, 25, 20, 35];//存储数据
        
        this._context2d=document.getElementById("canvas").getContext("2d");
        this.drawData();
    }
    Main.prototype.drawData=function () {
        /*
        //绘制折线图
        var p=this.getPositionByIndex(0);
        this._context2d.moveTo(p.x,p.y);//鼠标移动到的位置，开始划线

        for (var i=1;i<this._data.length;i++){           //循环遍历
            p=this.getPositionByIndex(i);
            this._context2d.lineTo(p.x,p.y);
        }
        this._context2d.stroke();
        */

        //绘制柱形图
        this.drawRect(this.getPositionByIndex(0));
        for (var i=1;i<this._data.length;i++){
            this.drawRect(this.getPositionByIndex(i));
        }
        this._context2d.stroke();
        };
        Main.prototype.drawRect=function (p) {
            this._context2d.fillRect(p.x,p.y,10,400-p.y);
        };
        
        
        
    Main.prototype.getPositionByIndex=function (index) {
        var y=400*(1-this._data[index]/this._MAX_VALUE);
        var x=(400/12)*index+20;
        return{x:x,y:y};
        
    };
    new Main();
})();