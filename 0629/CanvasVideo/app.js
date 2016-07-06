/**
 * Created by sks on 2016/6/29.
 */

//不会找到文件的地址，动态创建右键不会有保存菜单

(function () {

    function Main() {

        this._context2d=document.getElementById("canvas").getContext("2d");
        /**
         *
         * @type {HTMLVideoElement}
         * @private
         */
        this._video=document.createElement("video");//创建一个video标签
        this._video.autoplay = true;//自动播放
        this._video.src="video.mp4";//引入mp4文件

        this.render();
    }

    Main.prototype.render=function () {
        this._context2d.drawImage(this._video,0,0);//把video弄在画布上

        requestAnimationFrame(this.render.bind(this));//跟随系统刷新
    };


    new Main();
})();