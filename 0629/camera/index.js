/**
 * Created by sks on 2016/6/29.
 */

(function () {
    
    function Main() {
        this._video=document.getElementById("video");
        this.showCamera();
    }
    
    Main.prototype.showCamera=function () {
        //navigator.getUserMedia获取本机设备，这里是调用本机摄像头
        navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia;

        //调用本机设备后由系统自动把数据传给stream
        navigator.getUserMedia({video: true}, function (stream) {
            var url=URL.createObjectURL(stream);//获取传入文件的路径
            this._video.src=url;
            this._video.play();//视频开始播放
        }.bind(this),function (error) {
            console.error("无法获取设备");
            console.error(error);
            alert("您拒绝了使用本机设备");
        });
        
    };
    new Main();
})();