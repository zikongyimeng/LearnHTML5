/**
 * Created by sks on 2016/8/2.
 */
(function () {

    var _canvas = document.getElementById("canvas");
    var _context2d = _canvas.getContext("2d");

    function draw(begin, endpre, color, fn) {  /* 传四个参数*/
        var nowpre = 0;
        var timer = setInterval(function () {

            nowpre += endpre / 100;

            _context2d.beginPath();
            _context2d.fillStyle = color;
            _context2d.arc(250, 250, 200, begin, begin + nowpre, false);
            _context2d.lineTo(250, 250);
            _context2d.closePath();
            _context2d.fill();

            if (nowpre >= endpre) {
                clearInterval(timer);  /*清空计时器*/
                nowpre = endpre;
                fn();
            }
            if (nowpre >= endpre) {
                // x = r * cona + a;
                // y = r * sina + b;
                var x = ((200 * Math.cos(begin + endpre / 2) + 250) - 250) / 2 + 220;
                var y = ((200 * Math.sin(begin + endpre / 2) + 250) - 250) / 2 + 250;
                _context2d.beginPath();
                _context2d.font = "30px 宋体";
                _context2d.fillStyle = "black";
                _context2d.closePath();
                _context2d.fillText((endpre / (Math.PI * 2)) * 100 + "%", x, y);
                fn();/*执行一下函数*/
            }
        }, 10);
    }

    function count(preNum) {
        return (preNum / 100) * 2 * Math.PI;   /*把角度转成弧度*/
    }
    /*调用draw函数绘制三个扇形，把参数传进去*/
    draw(0, count(50), "red", function () {
        draw(count(50), count(25), "blue", function () {
            draw(count(75), count(25), "yellow", function () {
            });
        })
    })
    
})();