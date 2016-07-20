/**
 * Created by plter on 7/18/16.
 */

"use strict";  /*严格模式*/

class Main {

    index = 0;

    constructor() {       /* 构造函数*/

    }

    startTimer() {
        setInterval(()=> {
            console.log(this.index++);     /*箭头函数中的this 系统会自动辨别this所指代对象，不用再用bind绑定*/
        }, 1000);

        // setInterval(function () {
        //     console.log(this);
        //     console.log(this.index++);
        // }, 1000);
    }
}

var m = new Main();
m.startTimer();
