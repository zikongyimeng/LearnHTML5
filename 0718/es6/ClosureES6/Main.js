/**
 * Created by plter on 7/18/16.
 */

// import {Hello, sayHi as hi, intVar} from "lib"         /*import是导入；这里的sayHi as hi是修改函数名，把函数名sayHi修改成hi*/
//
// var h = new Hello();
// h.sayHello();
//
// hi();
//
// console.log(intVar);

import Hi from "lib1"   /* 从lib1.js文件里导入Hi到这里*/

var h = new Hi();     /*定义*/
h.sayHi();       /*  执行*/