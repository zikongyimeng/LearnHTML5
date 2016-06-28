/**
 * Created by sks on 2016/6/27.
 */


(function () {

    function Main() {

        this._context2d = document.getElementById("canvas").getContext("2d");

        //运用new Promise对象
        new Promise(function (resolve, reject) {
            var img = document.createElement("img");

            //当图片加载完成后会执行resolve函数
            img.onload = function () {
                resolve(img);
            };
            img.onerror = reject;//当图片加载发生错误时会执行reject函数
            img.src = "picture.jpg";//引进图片并输出
        }).then(function (result) {        //result是加载图片后的结果
            this._context2d.drawImage(result, 0, 0);
            var imageWidth = Math.round(result.width);
            var imageHeight = Math.round(result.height);

            var originImageData = this._context2d.getImageData(0, 0, result.width, result.height);// getImageData() 复制画布上指定矩形的像素数据

            var i = 0;

            //red image data   只提取红色数据代码
            //color/alpha 以数组形式存在，并存储于 ImageData 对象的 data 属性中
            var redChannelData = this._context2d.createImageData(imageWidth, imageHeight);//createImageData() 方法创建新的空白 ImageData 对象
            for (i = 0; i < originImageData.data.length; i += 4) {
                redChannelData.data[i] = originImageData.data[i];
                redChannelData.data[i + 3] = 255;
            }
            this._context2d.putImageData(redChannelData, 0, 250);//通过 putImageData() 将图像数据放回画布

            //green image data   只提取绿色数据代码
            var greenChannelData = this._context2d.createImageData(imageWidth, imageHeight);
            for (i = 0; i < originImageData.data.length; i += 4) {
                greenChannelData.data[i + 1] = originImageData.data[i + 1];
                greenChannelData.data[i + 3] = 255;
            }
            this._context2d.putImageData(greenChannelData, 0, 500);

            //blue image data   只提取蓝色数据代码
            var blueChannelData = this._context2d.createImageData(imageWidth, imageHeight);
            for (i = 0; i < originImageData.data.length; i += 4) {
                blueChannelData.data[i + 2] = originImageData.data[i + 2];
                blueChannelData.data[i + 3] = 255;
            }
            this._context2d.putImageData(blueChannelData, 0, 750);

            //reverse color  反色  用255减原来的就是反色
            var reversedImageData = this._context2d.createImageData(imageWidth, imageHeight);
            for (i = 0; i < originImageData.data.length; i += 4) {
                reversedImageData.data[i] = 255 - originImageData.data[i];
                reversedImageData.data[i + 1] = 255 - originImageData.data[i + 1];
                reversedImageData.data[i + 2] = 255 - originImageData.data[i + 2];
                reversedImageData.data[i + 3] = 255;
            }
            this._context2d.putImageData(reversedImageData, 0, 1000);

            //black and white image data    黑白色数据的获取方法是r、g、b三种的平均值
            var blackAndWhiteImageData = this._context2d.createImageData(imageWidth, imageHeight);
            for (i = 0; i < originImageData.data.length; i += 4) {
                var color = (originImageData.data[i] + originImageData.data[i + 1] + originImageData.data[i + 2]) / 3;
                blackAndWhiteImageData.data[i] = color;
                blackAndWhiteImageData.data[i + 1] = color;
                blackAndWhiteImageData.data[i + 2] = color;
                blackAndWhiteImageData.data[i + 3] = 255;
            }
            this._context2d.putImageData(blackAndWhiteImageData, 0, 1250);

        }.bind(this)).catch(function (error) {
            console.log(error);
        });

    }

    new Main();
})();