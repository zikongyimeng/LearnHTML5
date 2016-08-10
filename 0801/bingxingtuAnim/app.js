/**
 * Created by sks on 2016/8/1.
 */
(function(){

    function Main(){

        this._canvas = document.getElementById("canvas");
        this._context2d = this._canvas.getContext("2d");
        this._context2d.font = "bold 26px Courier";
        this._context2d.fillStyle = "red";
        this.i = 0;

        setInterval(function(){
            if(this.i<=Math.PI*2){
                this.drawArc();
                this.i+=0.1*Math.PI;
            }
        }.bind(this),80)

    }
    Main.prototype.drawArc = function(){

        if(this.i<=Math.PI){
            this.drawCir("#FFB6C1",0);
        }
        if(this.i>Math.PI && this.i<=Math.PI*1.5){
            this.drawCir("yellow",Math.PI);
        }
        if(this.i>Math.PI*1.5){
            this.drawCir("purple",Math.PI*1.5);
        }

        if(this.i == Math.PI){
            this._context2d.fillText("50%",190 ,272);
        }
        if(this.i == Math.PI*1.5){
            this._context2d.fillText("25%",120 ,142);
        }
        if(this.i == Math.PI*2){
            this._context2d.fillText("25%",250 ,142);
        }
    };

    Main.prototype.drawCir = function(col, start){
        this._context2d.save();
        this._context2d.beginPath();
        this._context2d.moveTo(200, 200);
        this._context2d.fillStyle = col;
        this._context2d.arc(200, 200, 150, start, this.i);
        this._context2d.closePath();
        this._context2d.fill();
        this._context2d.restore();
    };

    new Main();

})();