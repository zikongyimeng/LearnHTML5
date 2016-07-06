/**
 * Created by sks on 2016/6/29.
 */

(function () {

    function Main() {
        this._infoDiv=document.getElementById("info");

        this._memoryCanvas=document.createElement("canvas");//创建一个canvas来存放图片数据
        this._memoryCanvas.width=1000;
        this._memoryCanvas.height=1000;
        this._memoryContext2d=this._memoryCanvas.getContext("2d");

        this._context2d=document.getElementById("canvas").getContext("2d");
        this.loadImage(function (imgData) {
            //通过 getImageData() 复制画布上指定矩形的像素数据，然后通过 putImageData() 将图像数据放回画布
            this._context2d.putImageData(imgData,0,0);
        }.bind(this));
        this.addListeners();
    }
    Main.prototype.addListeners=function () {
        this._context2d.canvas.onclick=function (event) {
            if (this._imgData){
                var c=this.getColorByPosition(event.layerX,event.layerY);
                if (c&&c.a>0){
                    this._infoDiv.innerHTML="点中了图片";
                    console.log(c);//有值的话就输出r、g、b、a的值
                }else {
                    this._infoDiv.innerHTML="没有点中图片";
                    console.log(c);//没有值的话举输出null
                }
            }
        }.bind(this);
    };

    Main.prototype.getColorByPosition=function (x,y) {
        var data=this._imgData.data;//获取图片的字节数据
        var index=(y*this._imgData.width+x)*4;//获取字节， 字节是一维存放，x与y是像素，y * this._imgData.width + x是把多维转成一维，一个像素有4个字节
        if (index<data.length){
            return{r:data[index],g:data[index+1],b:data[index+2],a:data[index+3]};
        }else {
            return null;
        }
    };
    Main.prototype.loadImage=function (callback) {
        var img=new Image();//创建img标签
        img.onload=function () {
            this._memoryContext2d.clearRect(0,0,this._memoryCanvas.width,this._memoryCanvas.height);//绘制之前先清除画布
            this._memoryContext2d.drawImage(img,0,0);//把图片绘制到画布上
            this._imgData=this._memoryContext2d.getImageData(0,0,img.width,img.height);//通过 getImageData() 复制画布上指定矩形的像素数据

            callback(this._imgData);
        }.bind(this);
        img.src="image.jpg";
    };
    new Main();
})();