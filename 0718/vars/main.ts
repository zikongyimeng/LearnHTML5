/**
 * Created by plter on 7/18/16.
 */

const MATH_PI = 3.14;    /*ts中const是定义常量*/

function printNumbers() {
    for (let i = 0; i < 10; i++) {     /*ts中let定义变量作用域是离它最近的代码块，var定义的变量是离它最近的函数*/
        console.log("Hello " + i);
    }

    for (let i = 0; i < 10; i++) {
        console.log("Data " + i);
    }
}

printNumbers();
