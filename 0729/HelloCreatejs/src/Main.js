/**
 * Created by plter on 7/29/16.
 */
///<reference path="../node_modules/definitively-typed/easeljs/easeljs.d.ts"/>
var ucai;
(function (ucai) {
    var Main = (function () {
        function Main() {
            var stage = new createjs.Stage("canvas");
            createjs.Ticker.on("tick", function () {
                stage.update();
            });
            var mc = new window["lib"].MyMC();
            stage.addChild(mc);
            var shape = new createjs.Shape();
            shape.graphics.beginFill("#ff0000");
            shape.graphics.drawRect(0, 0, 100, 100);
            shape.graphics.endFill();
            stage.addChild(shape);
            shape.rotation = 30; /*旋转30度*/
            /*添加点击事件*/
            shape.on("click", function () {
                // alert("Clicked");
                createjs.Tween.get(shape).to({ x: 300, alpha: 0 }, 1000); /*通过一秒的时间x的位置移动到300位置，透明度变为0完全透明*/
            });
            /* 添加轮循事件*/
            shape.on("tick", function () {
                shape.x++; /*x方向上移动一次加一帧*/
            });
        }
        return Main;
    }());
    new Main();
})(ucai || (ucai = {}));
//# sourceMappingURL=Main.js.map